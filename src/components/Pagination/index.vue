<template>
  <div class="pagination-wrap">
    <el-pagination
      style="margin:15px 0;"
      :layout="layout"
      :page-size="paginationData.rows"
      :total="paginationData.totalRows"
      :page-sizes="[10, 25, 50, 100]"
      :current-page.sync="paginationData.page"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper',
    },
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      paginationData: {
        rows: 10,
        totalRows: 0,
        page: 1,
      },
    };
  },
  watch: {
    data: {
      handler(newValue) {
        this.paginationData = { ...newValue };
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    handleCurrentChange(page) {
      const payload = { ...this.paginationData, page };
      this.$emit('pagination-change', payload);
    },
    handleSizeChange(rows) {
      const payload = { ...this.paginationData, rows, page: 1 };
      this.$emit('pagination-change', payload);
    },
  },
};
</script>
