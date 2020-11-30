<template>
  <div>
    <el-table
      ref="table"
      :data="tableData"
      border
      style="width: 100%;"
      row-key="id"
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'children.length>0' }"
      @selection-change="handleSelectionChange"
      @sort-change="handleSortChange"
    >
      <template v-for="(item, index) in newTableColumns">
        <table-column v-if="item.visible" :key="index" :attrs="item" />
      </template>
    </el-table>
    <el-table-footer v-show="footerData !== null" ref="tableFooter" :data="footerData" />
  </div>
</template>

<script>
import TableColumn from './components/TableColumn';

export default {
  name: 'Table',
  components: {
    TableColumn,
  },
  props: {
    tableData: {
      type: Array,
      required: true,
    },
    tableFooterData: {
      type: Array,
      default: () => [],
    },
    tableColumns: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      rerenderTable: false,
    };
  },
  computed: {
    newTableColumns() {
      const newColumns = [];
      this.tableColumns.forEach(element => {
        const obj = {};
        Object.assign(obj, element);
        newColumns.push(obj);
      });
      return newColumns;
    },
    footerData() {
      if (this.tableFooterData.length === 0) {
        return null;
      }
      return [...this.tableFooterData];
    },
  },
  watch: {
    tableColumns: {
      handler(newValue) {
        this.$nextTick(() => {
          this.$refs.table.doLayout();
        });
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    const { tableFooter, table } = this.$refs;
    tableFooter.init(table);
  },
  methods: {
    handleSortChange({ column, prop, order }) {
      const payload = {
        sortColumn: prop,
        sortOrder: order,
        columnData: column,
      };
      this.$emit('sort-change', payload);
    },
    handleSelectionChange(selection) {
      this.$emit('selection-change', selection);
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-table-footer-wrapper td {
  text-align: center;
  font-size: 14px;
}
</style>
