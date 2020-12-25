<template lang="pug">
  .wrap(v-loading="loading")
    Breadcrumb
    el-row.flex-wrap.font-tiny.mx-12(:gutter="12" type="flex")
      el-col(:span="12")
        el-card.box3.white--text.full-height.border-0(body-style="height:100%; padding-top: 8px; padding-bottom: 8px;")
          el-row.flex-wrap(:gutter="20" type="flex")
            el-col.d-flex.flex-column.justify-center.text-right.cursor-pointer.rounded.pr-24(:class="{ 'border-1': dashSearch.dailyApproveCount.isSearch }" :span="10" @click.native="dashboardSearch('dailyApproveCount')")
              span.font-display-1.pb-8 {{ dashboard.dailyApproveCount }}
              span {{ $t('payment_deposit_list_dailyApproveCount') }}
            el-col(:span="14")
              el-col(:span="24")
                el-col.d-flex.flex-column.text-right.cursor-pointer.rounded.py-4(:class="{ 'border-1': dashSearch.dailyDeclinedCount.isSearch }" :span="11" @click.native="dashboardSearch('dailyDeclinedCount')")
                  span.font-big.pb-8 {{ dashboard.dailyDeclinedCount }}
                  span {{ $t('payment_deposit_list_dailyDeclinedCount') }}
                el-col(:span="2")
                  el-divider.font-display-3.mx-0(direction="vertical")
                el-col.d-flex.flex-column.text-right.cursor-pointer.rounded.py-4(:class="{ 'border-1': dashSearch.dailyPending3RdPartyAPICount.isSearch }" :span="11" @click.native="dashboardSearch('dailyPending3RdPartyAPICount')")
                  span.font-big.pb-8 {{ dashboard.dailyPending3RdPartyAPICount }}
                  span {{ $t('payment_deposit_list_dailyPending3RdPartyAPICount') }}
              el-col(:span="24")
                el-divider.mt-8.mb-16
              el-col.d-flex.justify-space-between.align-center.cursor-pointer.rounded.py-4(:class="{ 'border-1': dashSearch.dailyPendingBankAccountCount.isSearch }" :span="24" @click.native="dashboardSearch('dailyPendingBankAccountCount')")
                span {{ $t('payment_deposit_list_dailyPendingBankAccountCount') }}
                span.font-big {{ dashboard.dailyPendingBankAccountCount }}
      el-col(:span="6")
        el-card.box2.white--text.full-height.border-0(body-style="height:100%")
          .d-flex.justify-space-around.align-center.full-height
            .d-flex.flex-column.text-right.cursor-pointer.pa-24.rounded(:class="{ 'border-1': dashSearch.dailyPendingCount.isSearch }" @click="dashboardSearch('dailyPendingCount')")
              span.font-big.pb-8 {{ dashboard.dailyPendingCount }}
              span {{ $t('payment_deposit_list_dailyPendingCount') }}
            .d-flex.flex-column.text-right.cursor-pointer.pa-24.rounded(:class="{ 'border-1': dashSearch.monthlyApproveCount.isSearch }" @click="dashboardSearch('monthlyApproveCount')")
              span.font-big.pb-8 {{ dashboard.monthlyApproveCount }}
              span {{ $t('payment_deposit_list_monthlyApproveCount') }}
      el-col(:span="6")
        el-card.box1.white--text.full-height.border-0(body-style="height:100%")
          .d-flex.justify-space-around.align-center.full-height
            .d-flex.flex-column.text-right.cursor-pointer.pa-24.rounded(:class="{ 'border-1': dashSearch.monthlyDeclinedCount.isSearch }" @click="dashboardSearch('monthlyDeclinedCount')")
              span.font-big.pb-8 {{ dashboard.monthlyDeclinedCount }}
              span {{ $t('payment_deposit_list_monthlyDeclinedCount') }}
            .d-flex.flex-column.text-right.cursor-pointer.pa-24.rounded(:class="{ 'border-1': dashSearch.monthlyPendingCount.isSearch }" @click="dashboardSearch('monthlyPendingCount')")
              span.font-big.pb-8 {{ dashboard.monthlyPendingCount }}
              span {{ $t('payment_deposit_list_monthlyPendingCount') }}
    Card(:header-title="$t('search')" header-icon="el-icon-search")
      el-form.el-form-content-w-100(:inline="true")
        el-row.flex-wrap(type="flex" :gutter="20")
          el-col(:span="8")
            el-form-item
              FormItemLabel {{ $t('tradeTime') + ':' }}
                el-radio.pl-8(
                  v-for="(timeMode, index) in timeModeList"
                  :label="timeMode.value"
                  :key="index"
                  v-model="searchForm.tradeTimeType"
                ) {{ timeMode.text() }}
              DatePicker(v-model="date" format="datetimerange" :options="true" :style="{ width: '100%' }")
          el-col(:span="4")
            el-form-item
              FormItemLabel {{ $t('status') + ':' }}
              el-select.w-100(v-model="searchForm.status" size="small")
                el-option(v-for="(status, index) in statusList" :key="index" :label="status.text" :value="status.value")
          el-col(:span="4")
            el-form-item
              FormItemLabel {{ $t('orderId') + ':' }}
              el-input.w-100(v-model="searchForm.sn" size="small")
          el-col(:span="4")
            el-form-item
              FormItemLabel {{ $t('userName') + ':' }}
              el-input.w-100(v-model="searchForm.userName" size="small")
          el-col(:span="4")
            el-form-item
              FormItemLabel {{ $t('realName') + ':' }}
              el-input.w-100(v-model="searchForm.realName" size="small")
          el-col(:span="4")
            el-form-item
              FormItemLabel {{ $t('bankOrderId') + ':' }}
              el-input.w-100(v-model="searchForm.bankOrderID" size="small")
          //el-col(:span="4")
            el-form-item
              FormItemLabel {{ $t('withdrawAmount') + '>=' }}
              el-input.w-100(v-model="searchForm.amountStart" size="small")
          //el-col(:span="4")
            el-form-item
              FormItemLabel {{ $t('withdrawAmount') + '<=' }}
              el-input.w-100(v-model="searchForm.amountEnd" size="small")
        //CollapseBox(:title="$t('paymentMethod')" :isShowBtn="false" className="custom-collapse-box" style="margin-bottom: 25px;")
          template(v-slot:light)
            el-checkbox-group(v-model="searchForm.paymentTypes")
                el-checkbox(v-for="item in paymentMethodList" :key="item.value" :label="item.value")  {{ item.label }}
        //CollapseBox(:title="$t('collectionAccHolderName')" :isShowBtn="false" className="custom-collapse-box" style="margin-bottom: 25px;")
          template(v-slot:light)
            el-col(:span="6" v-for="n in 8" :key="n")
              el-checkbox(v-model="searchForm.paymentMethod")  ZOTAPAY_WITHDRAWAL
        .d-flex.flex-row.justify-end
          el-button(size="small" type="info" @click="handleClear") {{ $t('reset') }}
          el-button(size="small" type="primary" @click="handleSearch") {{ $t('search') }}
    Card(:header-title="$t('depositRequestList')" svg-icon="pay" :closeable="false")
      div(slot="header-buttons")
        el-button(type="primary" @click="handleNewDeposit") {{ $t('newDeposit') }}
        //el-button(type="primary" @click="handleDepositProcessingTimeRecord") {{ $t('depositProcessingTimeRecord') }}
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
        @selection-change="handleSelectionChange"
        @sort-change="handleSortChange"
      )
      Pagination(:data="searchForm" @pagination-change="handlePaginationChange")
    DialogCommand(ref="DialogCommand" :uuid="bindDialogCommand.uuid" :type="bindDialogCommand.type" @update="fetchData")
    DialogDepositInformation(ref="DialogDepositInformation")
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb/index';
import Card from '@/components/Card/index';
import Table from '@/components/Table/index';
import CollapseBox from '@/components/CollapseBox/index';
import Pagination from '@/components/Pagination/index';
import FormItemLabel from '@/components/FormItemLabel/index';
import DatePicker from '@/components/DatePicker/index';
import ColumnSelector from '@/components/ColumnSelector/index';
import IconDropdown from '@/components/Dropdown/IconDropdown';
import DialogCommand from '@/views/payment/deposit-list/components/DialogCommand';
import DialogDepositInformation from '@/views/payment/deposit-list/components/DialogDepositInformation';
import { dateTimeFormat, formatToRFC3339, getStartOfToday, getEndOfToday, getInitialTimeRange } from '@/utils/date';
import { defaultColumn } from '@/utils/table';
import { eportFile } from '@/utils/export-file';
import { thousandsSeparator } from '@/utils';
import { getPaymentDepositDashboard, getPaymentDeposit } from '@/api/payment';
import { getMultipleGlobalSelector } from '@/api/public';
// import { getPaymentTypeList } from '@/api/collection-account';
import _ from 'lodash';
export default {
  name: 'DepositList',
  components: {
    Breadcrumb,
    Card,
    Table,
    CollapseBox,
    Pagination,
    FormItemLabel,
    DatePicker,
    ColumnSelector,
    IconDropdown,
    DialogCommand,
    DialogDepositInformation,
  },
  inject: ['switchLangEvent',
    'FETCH_DATA',
    'INIT_OPTION_LIST'],
  data() {
    return {
      loading: false,
      date: getInitialTimeRange(),
      dashboard: {},
      dashSearch: {
        dailyApproveCount: { isSearch: false },
        dailyDeclinedCount: { isSearch: false },
        dailyPending3RdPartyAPICount: { isSearch: false },
        dailyPendingBankAccountCount: { isSearch: false },
        dailyPendingCount: { isSearch: false },
        monthlyApproveCount: { isSearch: false },
        monthlyDeclinedCount: { isSearch: false },
        monthlyPendingCount: { isSearch: false },
      },
      initForm: {
        tradeTimeStart: getStartOfToday(),
        tradeTimeEnd: getEndOfToday(),
        tradeTimeType: 2,
        status: null,
        sn: '',
        userName: '',
        realName: '',
        // externalID: '',
        // amountStart: null,
        // amountEnd: null,
        // paymentTypes: [],
        bankOrderID: '',
        page: 1,
        rows: 10,
      },
      searchForm: {},
      tableData: [],
      tableColumns: [
        { ...defaultColumn, prop: 'sn', label: () => this.$t('orderId') },
        {
          ...defaultColumn,
          prop: 'statusName',
          label: () => this.$t('status'),
          render: (h, param) => {
            const dicColor = { 1: '', 2: 'green--text text--accent-4', 3: 'red--text' };
            return h('span', { class: dicColor[param.row.status] }, param.row.statusName);
          },
        },
        { ...defaultColumn, prop: 'userName', label: () => this.$t('userName') },
        { ...defaultColumn, prop: 'paymentTypeName', label: () => this.$t('paymentType') },
        {
          ...defaultColumn,
          prop: 'created',
          label: () => this.$t('requestTime'),
          render: (h, param) => h('span', dateTimeFormat(param.row.created)),
        },
        { ...defaultColumn, prop: 'realName', label: () => this.$t('name') },
        { ...defaultColumn, prop: 'userLevel', label: () => this.$t('playerLevel') },
        {
          ...defaultColumn,
          prop: 'amount',
          label: () => this.$t('depositAmount'),
          render: (h, param) => h('span', thousandsSeparator(param.row.amount)),
        },
        {
          ...defaultColumn,
          prop: 'processedTime',
          label: () => this.$t('processTime'),
          render: (h, param) => h('span', param.row.processedTime ? dateTimeFormat(param.row.processedTime) : '-'),
        },
        { ...defaultColumn, prop: 'bankOrderID', label: () => this.$t('bankOrderId') },
        { ...defaultColumn, prop: 'operatorName', label: () => this.$t('processedBy') },
        { ...defaultColumn, prop: 'externalRemark', label: () => this.$t('externalNoteRecord') },
        { ...defaultColumn, prop: 'internalRemark', label: () => this.$t('internalNoteRecord') },
        {
          ...defaultColumn,
          prop: 'action',
          label: () => this.$t('g_condition'),
          render: (h, param) => (
            <el-button size="small" type="primary" onClick={() => this.handleDetailButtonClick(param.row)}>
              {this.$t('detail')}
            </el-button>
          ),
        },
        {
          ...defaultColumn,
          prop: 'action',
          label: () => this.$t('action'),
          render: (h, param) => {
            const filter = param.row.status !== 1 ? ['reject', 'confirm'] : [];
            return <IconDropdown filter={filter} vOn:command={command => this.command({ command, row: param.row })}></IconDropdown>;
          },
        },
        // {
        //   ...defaultColumn,
        //   prop: 'depositTime',
        //   label: () => this.$t('arrivalTime'),
        //   render: (h, param) => {
        //     return h('span', dateTimeFormat(param.row.depositTime));
        //   },
        // },

        // {
        //   ...defaultColumn,
        //   prop: 'fee',
        //   label: () => this.$t('feeForPlayer'),
        //   render: (h, param) => {
        //     return h('span', thousandsSeparator(param.row.fee));
        //   },
        // },
        // { ...defaultColumn, prop: 'paymentName', label: () => this.$t('bankPaymentType') },
        // { ...defaultColumn, prop: 'ip', label: () => this.$t('ipAddressRegion') },
        // {
        //   ...defaultColumn,
        //   prop: 'updated',
        //   label: () => this.$t('updatedAt'),
        //   render: (h, param) => {
        //     return h('span', dateTimeFormat(param.row.updated));
        //   },
        // },
        // {
        //   ...defaultColumn,
        //   prop: 'expiredTime',
        //   label: () => this.$t('expirationTime'),
        //   render: (h, param) => {
        //     return h('span', dateTimeFormat(param.row.expiredTime));
        //   },
        // },
        // { ...defaultColumn, prop: 'totalCostTime', label: () => this.$t('totalSpendTime') },
        // { ...defaultColumn, prop: 'collectionAccountName', label: () => this.$t('receivingAccountHolderName') },
        // { ...defaultColumn, prop: 'collectionAccountRemark', label: () => this.$t('receivingAccountNotes') },
        // { ...defaultColumn, prop: 'depositName', label: () => this.$t('depositBankApiName') },
        // { ...defaultColumn, prop: 'depositAccountName', label: () => this.$t('depositBankApiAccountName') },
        // { ...defaultColumn, prop: 'depositAccountNumber', label: () => this.$t('depositBankApiAccount') },
        // { ...defaultColumn, prop: 'depositTransID', label: () => this.$t('depositTransCode') },
        // { ...defaultColumn, prop: 'promoName', label: () => this.$t('promotionName') },
        // {
        //   ...defaultColumn,
        //   prop: 'promoAmount',
        //   label: () => this.$t('promotionReward'),
        //   render: (h, param) => {
        //     return h('span', thousandsSeparator(param.row.promoAmount));
        //   },
        // },
        // { ...defaultColumn, prop: 'externalID', label: () => this.$t('externalTransactionNumber') },
        // {
        //   ...defaultColumn,
        //   prop: 'userTransferTime',
        //   label: () => this.$t('depositDatetimeFromPlayer'),
        //   render: (h, param) => {
        //     return h('span', dateTimeFormat(param.row.userTransferTime));
        //   },
        // },
        // { ...defaultColumn, prop: 'transferMethod', label: () => this.$t('depositWay') },
        // { ...defaultColumn, prop: 'userRemark', label: () => this.$t('depositNote') },
        // { ...defaultColumn, prop: 'operatorName', label: () => this.$t('processedBy') },
        // { ...defaultColumn, prop: 'externalRemark', label: () => this.$t('externalNoteRecord') },
        // { ...defaultColumn, prop: 'internalRemark', label: () => this.$t('internalNoteRecord') },
        // { ...defaultColumn, prop: 'actionLog', label: () => this.$t('actionLog') },
      ],
      timeModeList: [],
      statusList: [],
      paymentMethodList: [],
      bindDialogCommand: {
        uuid: '',
        type: '',
      },
    };
  },
  watch: {
    date: {
      handler(range) {
        this.searchForm.tradeTimeStart = range.length === 0 ? '' : formatToRFC3339(range[0]);
        this.searchForm.tradeTimeEnd = range.length === 0 ? '' : formatToRFC3339(range[1]);
      },
    },
  },
  created() {
    this.handleClear();
    this.fetchData();
    this.initOptionList();
    // this.getPaymentType();
  },
  methods: {
    async initOptionList() {
      this.timeModeList = [
        { text: () => this.$t('requestTime'), value: 1 }, { text: () => this.$t('updatedOn'), value: 2 },
      ];
      const {
        // eslint-disable-next-line camelcase
        data: { deposit_status },
      } = await getMultipleGlobalSelector({ parents: ['deposit_status'] });
      this.statusList = [{ text: this.$t('all'), value: '' }].concat(deposit_status);
    },
    async fetchData() {
      try {
        this.loading = true;
        const {
          data: { totalRows, list },
        } = await getPaymentDeposit({ ..._.pickBy(this.searchForm, v => v !== '') });
        this.tableData = list;
        this.searchForm = { ...this.searchForm, totalRows };
      } finally {
        this.loading = false;
      }
      const { data } = await getPaymentDepositDashboard({ tradeTimeEnd: formatToRFC3339(new Date()) });
      this.dashboard = data;
    },
    // async getPaymentType() {
    //   try {
    //     this.loading = true;
    //     const { data } = await getPaymentTypeList();
    //     this.paymentMethodList = data;
    //   } finally {
    //     this.loading = false;
    //   }
    // },
    command({ command, row }) {
      this.bindDialogCommand.type = command;
      this.bindDialogCommand.uuid = row.uuid;
      this.$refs.DialogCommand.show();
    },
    handleSearch() {
      this.fetchData();
    },
    handleClear() {
      this.date = getInitialTimeRange();
      this.searchForm = _.cloneDeep(this.initForm);
    },
    handlePaginationChange(payload) {
      this.searchForm = { ...this.searchForm, ...payload };
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
    handleDetailButtonClick(row) {
      this.$refs.DialogDepositInformation.show({ uuid: row.uuid });
      // this.$router.push({ name: 'deposit-information', params: { uuid: row.uuid } });
    },
    handleNewDeposit() {
      this.$router.push({ name: 'new-deposit' });
    },
    handleDepositProcessingTimeRecord() {
      this.$router.push({ name: 'deposit-processing-time-record' });
    },
    dashboardSearch(type) {
      // @todo 未來要實作 各自搜尋條件功能
      _.map(this.dashSearch, o => {
        o.isSearch = false;
        return o;
      });
      this.dashSearch[type].isSearch = true;
    },
    handleExport() {
      // todo: 送api 取得匯出的資料列表
      // 資料拿到後再做下面這段功能
      const tHeader = [
        this.$t('status'),
        this.$t('orderId'),
        this.$t('userName'),
        this.$t('paymentType'),
        this.$t('requestTime'),
        this.$t('arrivalTime'),
        this.$t('name'),
        this.$t('playerLevel'),
        this.$t('depositAmount'),
        this.$t('feeForPlayer'),
        this.$t('bankPaymentType'),
        this.$t('ipAddressRegion'),
        this.$t('updatedAt'),
        this.$t('expirationTime'),
        this.$t('processTime'),
        this.$t('totalSpendTime'),
        this.$t('receivingAccountHolderName'),
        this.$t('receivingAccountNotes'),
        this.$t('depositBankApiName'),
        this.$t('depositBankApiAccountName'),
        this.$t('depositBankApiAccount'),
        this.$t('depositTransCode'),
        this.$t('promotionName'),
        this.$t('promotionReward'),
        this.$t('externalTransactionNumber'),
        this.$t('bankOrderId'),
        this.$t('depositDatetimeFromPlayer'),
        this.$t('depositWay'),
        this.$t('depositNote'),
        this.$t('processedBy'),
        this.$t('externalNoteRecord'),
        this.$t('internalNoteRecord'),
        this.$t('actionLog'),
      ];
      const filterVal = [
        'status',
        'uuid',
        'userName',
        'paymentTypeName',
        'created',
        'depositTime',
        'realName',
        'userLevel',
        'amount',
        'fee',
        'paymentName',
        'ip',
        'updated',
        'expiredTime',
        'processedTime',
        'totalCostTime',
        'collectionAccountName',
        'collectionAccountRemark',
        'depositName',
        'depositAccountName',
        'collectionAccountRemark',
        'depositName',
        'depositAccountName',
        'depositAccountNumber',
        'depositTransID',
        'promoName',
        'promoAmount',
        'externalID',
        'bankOrderID',
        'userTransferTime',
        'transferMethod',
        'userRemark',
        'operatorName',
        'externalRemark',
        'internalRemark',
        'actionLog',
      ];
      const data = this.tableData.map(v => filterVal.map(j => v[j]));
      eportFile(tHeader, data, 'excel-test', 'xlsx');
    },
  },
};
</script>

<style lang="scss" scoped>
.search-toolbar {
  display: flex;
  justify-content: flex-end;
}
.box1 ::v-deep {
  background: linear-gradient(270deg, #d3768b 0%, #d190a9 100%);
  box-shadow: 5px 6px 2px 0px rgba(0, 0, 0, 0.35);
}
.box2 ::v-deep {
  background: linear-gradient(90deg, #b68be0 0%, #a782cc 100%);
  box-shadow: 5px 6px 2px 0px rgba(0, 0, 0, 0.35);
}
.box3 ::v-deep {
  background: linear-gradient(90deg, #7ac9d8 0%, #29adc6 100%);
  box-shadow: 5px 6px 2px 0px rgba(0, 0, 0, 0.35);
}
.box4 ::v-deep {
  background: #d6cece;
}
</style>
