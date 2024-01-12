<template>
  <div
    class="saTable"
    :class="[
      {
        'sys-shadow': sysShadow,
      }
    ]"
  >
    <el-table
      v-if="height > 1"
      ref="saTable"
      :key="`${tbKey}-${multiplePageSelect ? 'multiple': 'single'}`"
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
      :row-key="rowkey || getKey"
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
            <sa-expand-row columns="columns" :row="row" />
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
        <!-- 當有 columnDefine attribute 時能夠自定義template 由slot-->
        <template v-if="col.columnDefine === true">
          <slot :name="`col-${col.prop}`" :col="col" />
        </template>
        <!-- render render function jsx -->
        <sa-table-column v-else-if="col.render !== undefined" :key="`render_column_${tabColIndex}`" :attrs="col" />
        <!-- 一般欄位顯示-->
        <el-table-column v-else :key="`column_${tabColIndex}_${col.prop}`" v-bind="col">
          <!--自定義欄位 -->
          <template v-if="col.tooltip" #header>
            <div :key="`label_${tabColIndex}_${col.prop}`" class="text-no-wrap d-inline">
              <span>{{ col.label }}</span>
              <el-tooltip v-if="col.tooltip.content" class="item" effect="dark" content="col.tooltip.content" placement="top-start">
                <svg-icon icon-class="question" class="mx-1 mb-1 blue--text" size="16" />
              </el-tooltip>
            </div>
          </template>
          <template #default="{ row, $index}">
            <!-- isShowAIL BARRI -->
            <span v-if="col.isShowAll === true">{{ row[col.prop] }}</span>
            <!-- 簡易排序資料筆數 佔用prop indexSort key-->
            <el-tag v-else-if="col.prop === 'indexSort'" type="primary">
              {{ $index + 1 }}
            </el-tag>
            <!--正常數據流 處理 formatter function 或者其他原始類別-->
            <sa-fold-content v-else :value="handleSaContentValue(row, col, $index)" :fix-simple-text="col.fixSimpleText" : len="headerWidth" />
            <i v-if="col.copyable === true" class="el-icon-copy-document blue--text mx-2 cursor-pointer" @click="(event) => handleClipboard(row[col.prop] || ' ', event)" />
          </template>
        </el-table-column>
        <!--進入content 處理元件-->
      </template>
      <slot name="operation" />
    </el-table>
    <slot name="betweenPagination" />
    <pagination
      v-show="tbData['total'] && tbData['page_total']"
      :small="false"
      :total="tbData['total'] || 0"
      :page-sizes="pageSizes"
      :limit="limit"
      :page.sync="page"
      class="sys-pagination"
      @pagination="handlePagination"
    />
  </div>
</template>

<script>
import ElTableInfiniteScroll from 'el-table-infinite-scroll';
import Pagination from '@/components/Pagination'; // secondary package based on el-pagination
import SaExpandRow from '@/components/SaExpandRow';
import SaFoldContent from '@/components/SaFoldContent';
import SaTableColumn from '@/components/SaTable/SaTableColumn/index.vue';
import SaPopoverDialog from '@/components/SaPopoverDialog';
import handleClipboard from '@/utils/clipboard';
export default {
  name: "SaTable",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Pagination, SaExpandRow, SaFoldContent, SaPopoverDialog, SaTableColumn,
  },
  directives: {
    'el-table-infinite-scroll': ElTableInfiniteScroll,
  },
  inheritAttrs: false,
  props: {
    sysShadow: {
      type: Boolean,
      default: true,
    },
  },
  data(){
    return {

    };
  },
  computed: {

  },
  methods: {

  },
};
</script>

<style lang="=scss" scoped>
</style>

