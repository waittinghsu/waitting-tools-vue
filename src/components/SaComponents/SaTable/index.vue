<template>
  <div
    class="sys-table"
    :class="[
      {
        'sys-shadow': sysShadow
      }
    ]"
  >
    <!--    @expand-change="handleExpandChange"-->
    <el-table
      v-if="height > 1"
      ref="saTable"
      :key="`${tbKey}-${multiplePageSelect ? 'multiple' : 'single'}`"
      v-el-table-infinite-scroll="handleLoad"
      :data="tbData.result || tbData.results || []"
      :border="border"
      fit
      highlight-current-row
      style="width: 100%;"
      v-bind="$attrs"
      :max-height="height"
      :height="fixHeight || height"
      size="mini"
      :row-key="rowKey || getKey"
      :default-sort="defaultSort"
      :row-class-name="rowClassName"
      @expand-change="handleExpandChange"
      @header-dragend="headerDragend"
      @sort-change="handleSortChange"
      @selection-change="handleSelectionChange"
    >
      <slot v-if="expand === true" name="expand" :columns="columns">
        <el-table-column type="expand" width="30px">
          <template #default="{ row }">
            <sa-expand-row :columns="columns" :row="row" />
          </template>
        </el-table-column>
      </slot>
      <el-table-column
        v-if="selection === true"
        :selectable="checkSelectable"
        :reserve-selection="multiplePageSelect"
        type="selection"
        width="44"
      />

      <template v-for="(col, tabColIndex) in tabCols">
        <!-- 當有 columnDefine attribute 時 能夠自定義template 由slot -->
        <template v-if="col.columnDefine === true">
          <slot :name="`col-${col.prop}`" :col="col" />
        </template>
        <!-- render 使用render function 出 jsx -->
        <sa-table-column v-else-if="col.render !== undefined" :key="`render_column_${tabColIndex}`" :attrs="col" />
        <!-- 一般欄位顯示-->
        <el-table-column v-else :key="`column_${tabColIndex}_${col.prop}`" v-bind="omit(col, ['formatter'])">
          <!--自定義欄位-->
          <template v-if="col.tooltip" #header>
            <div :key="`label_${tabColIndex}_${col.prop}`" class="text-no-wrap d-inline">
              <span>{{ col.label }}</span>
              <el-tooltip v-if="col.tooltip.content" class="item" effect="dark" :content="col.tooltip.content" placement="top-start">
                <svg-icon icon-class="question" class="mx-1 mb-1 blue--text" size="16" />
              </el-tooltip>
            </div>
          </template>
          <template #default="{ row , $index}">
            <!-- isShowAll 顯示最原始數據 -->
            <span v-if="col.isShowAll === true">{{ row[col.prop] }}</span>
            <!-- 簡易排序資料筆數 佔用prop indexSort key  -->
            <el-tag v-else-if="col.prop === 'indexSort'" type="primary">
              {{ $index + 1 }}
            </el-tag>
            <!-- 正常數據流 處理 formatter function 或者其他原始類別-->
            <sa-fold-content
              v-else :value="handleSaContentValue(row, col, $index)"
              :fix-simple-text="col.fixSimpleText" :popover-class="col.foldPopoverClass"
              :len="headerWidth"
            />
            <!-- copyable 提供複製按鈕 -->
            <i v-if="col.copyable === true" class="el-icon-copy-document blue--text mx-2 cursor-pointer" @click="event => handleClipboard(row[col.prop] || ' ', event)" />
          </template>
        </el-table-column>
        <!-- 進入 content 元件做處理 -->
      </template>
      <slot name="operation" />
    </el-table>
    <slot name="betweenTablePagination" />
    <pagination
      v-show="tbData['total'] && tbData['page_total'] > 0"
      :small="false"
      :total="tbData['total'] || 0"
      :page-sizes="pageSizes"
      :limit="limit"
      :page.sync="page"
      class="sys-pagination"
      :layout="paginationLayout"
      @pagination="handlePagination"
    />
  </div>
</template>

<script>
import ElTableInfiniteScroll from 'el-table-infinite-scroll';
import { omit } from 'lodash';
import Pagination from '@/components/Pagination'; // secondary package based on el-pagination
import SaExpandRow from '@/components/SaExpandRow';
import SaFoldContent from '@/components/SaFoldContent';
import SaTableColumn from '@/components/SaTable/SaTableColumn/index.vue';
import SaPopoverDialog from '@/components/SaPopoverDialog';
import handleClipboard from '@/utils/clipboard';

export default {
  name: 'SaTable',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Pagination, SaExpandRow, SaFoldContent, SaPopoverDialog, SaTableColumn,
  },
  directives: {
    'el-table-infinite-scroll': ElTableInfiniteScroll,
  },
  inject: {
    pageProvideComponent: {
      default: {},
    },
  },
  inheritAttrs: false,
  props: {
    selectID: {
      type: Array,
      default: () => [],
    },
    height: {
      type: Number,
      required: true,
    },
    fixHeight: {
      type: [String, Number],
      default: '',
    },
    tbData: {
      required: true,
      type: Object,
      default: () => {},
    },
    columns: { // 所有列
      required: true,
      type: Array,
      default: () => [], // [{label: yyy, prop: xxx}]
    },
    visibleCols: {
      required: false,
      type: Array,
      default: () => [], // ['xxx', 'xxx2', 'xxx3']
    },
    expand: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: true,
    },
    selection: {
      type: Boolean,
      default: false,
    },
    checkSelectable: {
      type: Function,
      default: (row) => true,
    },
    rowClassName: {
      type: Function,
      default: (row, rowIndex) => true,
    },
    multiplePageSelect: {
      type: Boolean,
      // 组件有bug，只能设置一次
      default: false,
    },
    pageSizes: {
      type: Array,
      default() {
        return [20,
          50,
          100,
          500];
      },
    },
    rowKey: {
      type: [String, Function],
      default: '',
    },
    tableName: {
      type: String,
      default: '',
    },
    columnsLimit: {
      type: Number,
      default: 11,
    },
    // 存放勾選的值
    tableSelectRows: {
      type: Array,
      default: () => [],
    },
    sysShadow: {
      type: Boolean,
      default: true,
    },
    paginationLayout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper',
    },
    /**
     * 如果只指定了 prop, 没有指定order, 则默认顺序是ascending
     * return {prop: '', order: ''}
     */
    defaultSort: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      tbKey: 'sa-table',
      sortColumn: null,
      pagination: {
        // 初始化
        // page 当前页面码
        page: 1,
        // limit 页面行数
        limit: 20,
      },
      headerWidth: 30, // 初始化標頭長度
      handleClipboard,
    };
  },
  computed: {
    tabCols: {
      get() {
        if (!this.visibleCols || this.visibleCols.length < 1) {
          return this.columns.slice(0, this.columnsLimit);
        }
        return this.columns.filter((v) => this.visibleCols.includes(v.prop));
      },
    },
    limit: {
      get() {
        return this.tbData.page_size || this.pagination.limit;
      },
      set(val) {
        // eslint-disable-next-line vue/no-mutating-props
        this.tbData.page_size = val;
      },
    },
    page: {
      get() {
        return this.tbData.page || this.pagination.page;
      },
      set(val) {
        // eslint-disable-next-line vue/no-mutating-props
        this.tbData.page = val;
      },
    },
  },
  created() {
    window.saTabel = this;
  },
  updated() {},
  methods: {
    omit,
    getKey(row) {
      return row.id || row.name;
    },
    handleSaContentValue(row, column, index) {
      if (Object.prototype.toString.call(column.formatter) === '[object Function]') {
        return column.formatter.call(this, row, column, index);
      }
      return row[column.prop];
    },
    handleSortChange(data) {
      // eslint-disable-next-line no-unused-vars
      const { prop, order, column: { sortBy } } = data;
      this.sortColumn = { prop: sortBy || prop, order };
      // 排序改变，自动跳第一页
      const param = {
        sort: this.sortColumn,
        pagination: {
          page: 1,
          limit: this.tbData.page_size || this.pagination.limit,
        },
      };
      this.$emit('tbChange', param);
    },
    handlePagination(data) {
      // 修改页行数时
      if (this.limit !== data.limit) {
        data.page = 1;
      }
      // 排序改变，自动跳第一页
      const param = { sort: this.sortColumn, pagination: data };
      this.$emit('tbChange', param);
    },
    handleSelectionChange(val) {
      this.$emit('update:tableSelectRows', val);
    },
    doLayout() {
      this.$refs.saTable.doLayout();
    },
    clearSelection() {
      this.$refs.saTable.clearSelection();
    },
    // 調整欄寬度時 觸發的事件
    headerDragend(newWidth, oldWidth, column, event) {
      this.$emit('headerDragend', newWidth, oldWidth, column, event);
      // todo 請改用外部事件處理（miPage
      // const wid = newWidth > 40 ? newWidth : 40;
      // const { tableName: table_name } = this;
      // if (column.property && this.tableName) {
      //   putCommonColumnsByTableName({
      //     table_name,
      //     field_name: column.property,
      //     width: parseInt(wid),
      //   });
      // }
    },
    handleExpandChange(row, rows) {
      // 增加一个参数，判断是否展开的
      let isExpand = false;
      // eslint-disable-next-line eqeqeq
      if (rows.find((v) => v === row)) {
        isExpand = true;
      }
      this.$emit('expand-change', row, rows, isExpand);
    },
    handleLoad() {
      this.$emit('handleInfiniteLoad');
    },
    toggleRowSelection(row, selected) {
      this.$refs.saTable.toggleRowSelection(row, selected);
    },
    toggleAllSelection() {
      this.$refs.saTable.toggleAllSelection();
    },
  },
};
</script>
<style lang="scss" scoped>
  ::v-deep.sys-table {
    ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: rgba(144, 147, 153, 0.5);
    }
    .el-table__expanded-cell {
      background: #ebfbfa;
    }
    &.sys-shadow {
      box-shadow: 2px 2px 22px 2px rgba(0, 0, 0, 0.2);
      .el-table {
        border-left-width: 0;
      }
    }
    .sys-table {
      .el-table {
        border-radius: 4px 4px 0 0 ;
      }
    }
  }
</style>
<style lang="scss">
  .el-table__body,
  .el-table__footer,
  .el-table__header {
    table-layout: fixed;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
</style>
