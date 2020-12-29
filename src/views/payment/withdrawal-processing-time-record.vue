<template lang="pug">
  .wrap(v-loading="loading")
    Breadcrumb
    Card(:header-title="$t('search')" header-icon="el-icon-search")
      el-form.el-form-content-w-100(:inline="true")
        el-row.flex-wrap(type="flex" :gutter="20")
          el-col(:span="8")
            el-form-item
              FormItemLabel {{ $t('requestTime') }}
              DatePicker(v-model="searchForm.requestTime" format="datetimerange" :options="true" :style="{ width: '100%' }")
          el-col(:span="6")
            el-form-item
              FormItemLabel {{ $t('playerUserName') }}
              el-input.w-100(v-model="searchForm.playerUserName" size="small")
          el-col(:span="6")
            el-form-item
              FormItemLabel {{ $t('status') }}
              el-select.w-100(v-model="searchForm.status" size="small")
                el-option(v-for="(status, index) in statusList" :key="index" :label="status.text()" :value="status.value")
          el-col(:span="4")
            el-form-item
              FormItemLabel {{ $t('processedBy') }}
              el-input.w-100(v-model="searchForm.processedBy" size="small")
          el-col(:span="4")
            el-form-item
              FormItemLabel {{ $t('keywordSearch') }}
              el-input.w-100(v-model="searchForm.keywordSearch" size="small")
          el-col.d-flex.justify-end(:span="24")
            el-button(size="small" type="info" @click="handleClear") {{ $t('reset') }}
            el-button(size="small" type="primary" @click="handleSearch") {{ $t('search') }}
    Card(:header-title="$t('depositProcessingTimeRecord')" svg-icon="" :closeable="false")
      div(slot="toolbar")
        el-row(type="flex" align="middle" justify="space-between")
          el-row(type="flex" align="center")
            Pagination(layout="sizes, total" :data="searchForm" @pagination-change="handlePaginationChange")
          el-row
            ColumnSelector(:columns="tableColumns")
            el-button(type="success" size="mini" @click="handleExport") {{ $t('exportExcel') }}
      Table(
        :table-data="tableData"
        :table-columns="tableColumns"
        :table-footer-data="tableFooterData"
        @selection-change="handleSelectionChange"
        @sort-change="handleSortChange"
      )
      Pagination(:data="searchForm" @pagination-change="handlePaginationChange")
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb';
import Card from '@/components/Card';
import Table from '@/components/Table';
import Pagination from '@/components/Pagination';
import FormItemLabel from '@/components/FormItemLabel';
import DatePicker from '@/components/DatePicker';
import ColumnSelector from '@/components/ColumnSelector';
import { getInitialTimeRange } from '@/utils/date';
import { defaultColumn } from '@/utils/table';
import { eportFile } from '@/utils/export-file';
import { getPaymentReport } from '@/api/report';
export default {
  components: {
    Breadcrumb,
    Card,
    Table,
    Pagination,
    FormItemLabel,
    DatePicker,
    ColumnSelector,
  },
  data() {
    return {
      loading: false,
      searchForm: {
        requestTime: getInitialTimeRange(),
        playerUserName: '',
        status: 0,
        processedBy: '',
        keywordSearch: '',
        sortColumn: '',
        sortOrder: '',
        page: 1,
        totalRows: 0,
        rows: 10,
      },
      tableData: [],
      tableColumns: [
        { ...defaultColumn, prop: 'withdrawCode', label: () => this.$t('withdrawCode') },
        { ...defaultColumn, prop: 'userName', label: () => this.$t('userName') },
        { ...defaultColumn, prop: 'name', label: () => this.$t('name') },
        { ...defaultColumn, prop: 'withdrawalAmount', label: () => this.$t('withdrawalAmount') },
        { ...defaultColumn, prop: 'requestTime', label: () => this.$t('requestTime') },
        { ...defaultColumn, prop: 'updatedAt', label: () => this.$t('updatedAt') },
        { ...defaultColumn, prop: 'paidTime', label: () => this.$t('paidTime') },
        { ...defaultColumn, prop: 'totalSpendTime', label: () => this.$t('totalSpendTime') },
        { ...defaultColumn, prop: 'status', label: () => this.$t('status') },
        { ...defaultColumn, prop: 'processedBy', label: () => this.$t('processedBy') },
      ],
      tableFooterData: [],
      statusList: [],
    };
  },
  created() {
    this.initOptionList();
    // this.fetchData();
  },
  methods: {
    initOptionList() {
      this.statusList = [
        { text: () => this.$t('all'), value: 0 },
        { text: () => this.$t('pending'), value: 1 },
        { text: () => this.$t('approved'), value: 2 },
        { text: () => this.$t('declined'), value: 3 },
      ];
    },
    async fetchData() {
      try {
        this.loading = true;
        this.rerenderTable = false;
        const { data } = await getPaymentReport();
        const { totalRows, list } = data;
        this.tableData = list;
        this.searchForm = { ...this.searchForm, totalRows };
      } finally {
        this.loading = false;
      }
    },
    handleClear() {},
    handleSearch() {
      console.log(this.searchForm);
    },
    handlePaginationChange(paylod) {
      this.searchForm = { ...this.searchForm, ...paylod };
      this.fetchData();
    },
    // handleColumnChange(emitColumns) {
    //   for (const emitColumn of emitColumns) {
    //     const currentColumn = this.tableColumns.find(column => column.prop === emitColumn.prop);
    //     if (currentColumn == null) {
    //       return;
    //     }
    //     currentColumn.visible = emitColumn.visible;
    //   }
    // },
    handleSortChange({ sortColumn, sortOrder, columnData }) {
      this.searchForm = {
        ...this.searchForm,
        sortColumn,
        sortOrder,
        page: 1,
      };
      this.fetchData();
    },
    handleSelectionChange(selection) {
      console.log(selection);
    },
    handleExport() {
      // todo: 送api 取得匯出的資料列表
      // 資料拿到後再做下面這段功能
      const tHeader = [
        this.$t('withdrawCode'),
        this.$t('userName'),
        this.$t('name'),
        this.$t('withdrawalAmount'),
        this.$t('requestTime'),
        this.$t('updatedAt'),
        this.$t('paidTime'),
        this.$t('totalSpendTime'),
        this.$t('status'),
        this.$t('processedBy'),
      ];
      const filterVal = [
        'withdrawCode',
        'userName',
        'name',
        'withdrawalAmount',
        'requestTime',
        'updatedAt',
        'paidTime',
        'totalSpendTime',
        'status',
        'processedBy',
      ];
      const data = this.tableData.map(v => filterVal.map(j => v[j]));
      eportFile(tHeader, data, 'excel-test', 'xlsx');
    },
  },
};
</script>
