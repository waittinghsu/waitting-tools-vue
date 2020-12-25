<template lang="pug">
  .wrap(v-loading="loading")
    Breadcrumb
    el-row.flex-wrap.font-tiny.mx-12(:gutter="12" type="flex")
      el-col(:span="6")
        el-card.box1.white--text.border-0
          .d-flex.justify-space-around.align-center.full-height
            .d-flex.flex-column.text-right.cursor-pointer.pa-24.rounded(:class="{ 'border-1': dashSearch.monthRequest.isSearch }" @click="dashboardSearch('monthRequest')")
              span.font-big.pb-8 {{ dashboard.monthRequest }}
              span {{ $t('payment_withdrawal_list_monthDeclined') }}
            .d-flex.flex-column.text-right.cursor-pointer.pa-24.rounded(:class="{ 'border-1': dashSearch.todayRequest.isSearch }" @click="dashboardSearch('todayRequest')")
              span.font-big.pb-8 {{ dashboard.todayRequest }}
              span {{ $t('payment_withdrawal_list_monthPaid') }}
      el-col(:span="6")
        el-card.box2.white--text.border-0
          .d-flex.justify-space-around.align-center.full-height
            .d-flex.flex-column.text-right.cursor-pointer.pa-24.rounded(:class="{ 'border-1': dashSearch.monthPayProc.isSearch }" @click="dashboardSearch('monthPayProc')")
              span.font-big.pb-8 {{ dashboard.monthPayProc }}
              span {{ $t('payment_withdrawal_list_monthPayProc') }}
            .d-flex.flex-column.text-right.cursor-pointer.pa-24.rounded(:class="{ 'border-1': dashSearch.todayPayProc.isSearch }" @click="dashboardSearch('todayPayProc')")
              span.font-big.pb-8 {{ dashboard.todayPayProc }}
              span {{ $t('payment_withdrawal_list_monthRequest') }}
      el-col(:span="6")
        el-card.box3.white--text.border-0
          .d-flex.justify-space-around.align-center.full-height
            .d-flex.flex-column.text-right.cursor-pointer.pa-24.rounded(:class="{ 'border-1': dashSearch.monthPaid.isSearch }" @click="dashboardSearch('monthPaid')")
              span.font-big.pb-8 {{ dashboard.monthPaid }}
              span {{ $t('payment_withdrawal_list_todayDeclined') }}
            .d-flex.flex-column.text-right.cursor-pointer.pa-24.rounded(:class="{ 'border-1': dashSearch.todayPaid.isSearch }" @click="dashboardSearch('todayPaid')")
              span.font-big.pb-8 {{ dashboard.todayPaid }}
              span {{ $t('payment_withdrawal_list_todayPaid') }}
      el-col(:span="6")
        el-card.box4.white--text.border-0
          .d-flex.justify-space-around.align-center.full-height
            .d-flex.flex-column.text-right.cursor-pointer.pa-24.rounded(:class="{ 'border-1': dashSearch.monthDeclined.isSearch }" @click="dashboardSearch('monthDeclined')")
              span.font-big.pb-8 {{ dashboard.monthDeclined }}
              span {{ $t('payment_withdrawal_list_todayPayProc') }}
            .d-flex.flex-column.text-right.cursor-pointer.pa-24.rounded(:class="{ 'border-1': dashSearch.todayDeclined.isSearch }" @click="dashboardSearch('todayDeclined')")
              span.font-big.pb-8 {{ dashboard.todayDeclined }}
              span {{ $t('payment_withdrawal_list_todayRequest') }}
    Card(:header-title="$t('search')" header-icon="el-icon-search")
      el-form.el-form-content-w-100(:inline="true")
        el-row.flex-wrap(type="flex" :gutter="20")
          el-col(:span="8")
            el-form-item
              FormItemLabel {{ $t('tradeTime') + ':' }}
                el-radio.pl-8(
                  v-for="(mode, index) in timeModeList"
                  :label="mode.value"
                  :key="index"
                  v-model="searchForm.tradeTimeType"
                ) {{ mode.text() }}
              DatePicker.w-100(v-model="date" format="datetimerange" :options="true")
          el-col(:span="4")
            el-form-item
              FormItemLabel {{ $t('status') + ':' }}
              el-select.w-100(v-model="searchForm.status" size="small")
                el-option(v-for="(status, index) in statusList" :key="index" :label="status.text" :value="status.value")
          el-col(:span="4")
            el-form-item
              FormItemLabel {{ $t('withdrawCode') + ':' }}
              el-input.w-100(v-model="searchForm.orderNo" size="small")
          el-col(:span="4")
            el-form-item
              FormItemLabel {{ $t('userName') + ':' }}
              el-input.w-100(v-model="searchForm.username" size="small")
          el-col(:span="4")
            el-form-item
              FormItemLabel {{ $t('realName') + ':' }}
              el-input.w-100(v-model="searchForm.realName" size="small")
          el-col(:span="4")
            el-form-item
              FormItemLabel {{ $t('withdrawalAmount') }}
              el-input.w-100(v-model="searchForm.amountGreaterAndEqualAt" size="small")
          el-col(:span="4")
            el-form-item
              FormItemLabel {{ $t('payment_withdrawal_list_processedByUserName') + ':' }}
              el-input.w-100(v-model="searchForm.processedByUserName" size="small")
          //el-col(:span="4")
            el-form-item
              FormItemLabel {{ $t('withdrawAmount') + '<=' }}
              el-input.w-100(v-model="searchForm.amountLessAndEqualAt" size="small")

        //CollapseBox(:title="$t('paymentMethod')" :isShowBtn="false" className="custom-collapse-box")
          template(v-slot:light)
              el-checkbox-group(v-model="searchForm.paymentApiIDList")
                  el-checkbox(v-for="item in paymentMethodList" :key="item.id" :label="item.id")  {{ item.name }}
        .d-flex.justify-end.mt-15
          el-button(size="small" type="info" @click="handleClear") {{ $t('reset') }}
          el-button(size="small" type="primary" @click="handleSearch") {{ $t('search') }}
    Card(:header-title="$t('withdrawalRequestList')" svg-icon="pay" :closeable="false")
      div(slot="header-buttons")
        el-button(type="primary" @click="handleNewWithdrawal") {{ $t('newWithdrawal') }}
        //el-button(type="primary" @click="handleWithdrawProcessingTimeRecord") {{ $t('withdrawProcessingTimeRecord') }}
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
    DialogWithdrawalCondition(ref="DialogWithdrawalCondition")
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
import DialogCommand from '@/views/payment/withdrawal-list/components/DialogCommand';
import DialogWithdrawalCondition from '@/views/payment/withdrawal-list/components/DialogWithdrawalCondition';
import { dateTimeFormat, getInitialTimeRange, formatToRFC3339, getStartOfToday, getEndOfToday } from '@/utils/date';
import { defaultColumn } from '@/utils/table';
import { eportFile } from '@/utils/export-file';
import { getForegroundColor, thousandsSeparator } from '@/utils';
import { getPaymentWithdrawalOrder, getSystemPaymentApiWithdrawalList, getPaymentWithdrawalOrderDashboard, getPaymentDeposit } from '@/api/payment';
import _ from 'lodash';
import { getMultipleGlobalSelector } from '@/api/public';
export default {
  name: 'WithdrawalList',
  components: {
    Breadcrumb,
    Card,
    Table,
    CollapseBox,
    Pagination,
    FormItemLabel,
    DatePicker,
    ColumnSelector,
    DialogCommand,
    DialogWithdrawalCondition,
    IconDropdown,
  },
  inject: ['switchLangEvent',
    'FETCH_DATA',
    'INIT_OPTION_LIST'],
  data() {
    return {
      loading: false,
      dashboard: {},
      dashSearch: {
        monthRequest: { isSearch: false },
        todayRequest: { isSearch: false },
        monthPayProc: { isSearch: false },
        todayPayProc: { isSearch: false },
        monthPaid: { isSearch: false },
        todayPaid: { isSearch: false },
        monthDeclined: { isSearch: false },
        todayDeclined: { isSearch: false },
      },
      initForm: {
        tradeTimeStart: getStartOfToday(),
        tradeTimeEnd: getEndOfToday(),
        tradeTimeType: 2,
        status: '',
        orderNo: '',
        username: '',
        realName: '',
        amountGreaterAndEqualAt: null,
        processedByUserName: null,
        // amountLessAndEqualAt: null,
        // updateBeginTime: '',
        // updateEndTime: '',
        page: 1,
        rows: 10,
      },
      date: getInitialTimeRange(),
      searchForm: {},
      tableData: [],
      tableColumns: [
        {
          ...defaultColumn,
          prop: 'status',
          label: () => this.$t('status'),
          render: (h, param) => {
            const dicColor = { 0: '', 1: '', 2: 'green--text text--accent-4', 3: 'red--text', 4: '' };
            return h('span', { class: dicColor[param.row.status] }, param.row.statusName);
          },
        },
        { ...defaultColumn, prop: 'orderNo', label: () => this.$t('withdrawCode') },
        { ...defaultColumn, prop: 'username', label: () => this.$t('userName') },
        {
          ...defaultColumn,
          prop: 'created',
          label: () => this.$t('requestTime'),
          render: (h, param) => h('span', dateTimeFormat(param.row.created)),
        },
        {
          ...defaultColumn,
          prop: 'processTime',
          label: () => this.$t('processTime'),
          render: (h, param) => h('span', param.row.processTime ? dateTimeFormat(param.row.processTime) : '-'),
        },
        { ...defaultColumn, prop: 'realName', label: () => this.$t('name') },
        { ...defaultColumn, prop: 'playerLevel', label: () => this.$t('playerLevel') },
        {
          ...defaultColumn,
          prop: 'userTagList',
          label: () => this.$t('tag'),
          render: (h, param) =>
            h(
              'div',
              { class: ['d-flex', 'flex-column'] },
              Array.from(param.row.userTagList || [], obj =>
                h(
                  'div',
                  { class: [`${getForegroundColor(obj.tagColor)}--text`,
                    'pa-4',
                    'ma-4'], style: { backgroundColor: obj.tagColor } },
                  obj.tagName,
                )),
            ),
        },
        {
          ...defaultColumn,
          prop: 'amount',
          label: () => this.$t('withdrawalAmount'),
          render: (h, param) => h('span', thousandsSeparator(param.row.amount)),
        },
        { ...defaultColumn, prop: 'paymentTypeName', label: () => this.$t('paymentType') },
        { ...defaultColumn, prop: 'bankName', label: () => this.$t('bankName') },
        { ...defaultColumn, prop: 'bankAccountName', label: () => this.$t('accountName') },
        { ...defaultColumn, prop: 'bankAccount', label: () => this.$t('account') },
        { ...defaultColumn, prop: 'processedBy', label: () => this.$t('processedBy') },
        { ...defaultColumn, prop: 'internalNote', label: () => this.$t('internalNote') },
        { ...defaultColumn, prop: 'externalNote', label: () => this.$t('externalNote') },
        {
          ...defaultColumn,
          prop: 'action',
          label: () => this.$t('g_condition'),
          render: (h, param) => (
            <el-button size={'small'} type="primary" onClick={() => this.handleDetailButtonClick(param.row)}>
              {this.$t('detail')}
            </el-button>
          ),
        },
        {
          ...defaultColumn,
          prop: 'action',
          label: () => this.$t('action'),
          render: (h, param) => {
            const filter = param.row.status !== 0 ? ['reject', 'confirm'] : [];
            return <IconDropdown filter={filter} vOn:command={command => this.command({ command, row: param.row })}></IconDropdown>;
          },
        },
        // { ...defaultColumn, prop: 'lockedStatusBy', label: () => this.$t('lockStatus') },

        // {
        //   ...defaultColumn,
        //   prop: 'paidTime',
        //   label: () => this.$t('paidTime'),
        //   render: (h, param) => {
        //     return h('span', dateTimeFormat(param.row.paidTime));
        //   },
        // },
        // { ...defaultColumn, prop: 'totalSpendTime', label: () => this.$t('spendTime') },

        // { ...defaultColumn, prop: 'branch', label: () => this.$t('bankBranch') },
        // { ...defaultColumn, prop: 'declinedCategory', label: () => this.$t('withdrawalRefuseType') },
        // { ...defaultColumn, prop: 'province', label: () => this.$t('province') },
        // { ...defaultColumn, prop: 'city', label: () => this.$t('city') },
        // { ...defaultColumn, prop: 'ip', label: () => this.$t('withdrawalIp') },
        // { ...defaultColumn, prop: 'location', label: () => this.$t('withdrawalPlace') },
        // { ...defaultColumn, prop: 'id', label: () => this.$t('withdrawalId') },
        // {
        //   ...defaultColumn,
        //   prop: 'updated',
        //   label: () => this.$t('payTime'),
        //   render: (h, param) => {
        //     return h('span', dateTimeFormat(param.row.updated));
        //   },
        // },

        // { ...defaultColumn, prop: 'actionLog', label: () => this.$t('actionLog') },
        // { ...defaultColumn, prop: 'timeLog', label: () => this.$t('timeRecord') },
        // { ...defaultColumn, prop: 'currencyCode', label: () => this.$t('currency') },
        // { ...defaultColumn, prop: 'systemCode', label: () => this.$t('systemCode') },
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
  },
  methods: {
    async initOptionList() {
      this.timeModeList = [
        { text: () => this.$t('requestTime'), value: 1 }, { text: () => this.$t('processingTime'), value: 2 },
      ];
      const {
        // eslint-disable-next-line camelcase
        data: { user_withdrawal_order_status },
      } = await getMultipleGlobalSelector({ parents: ['user_withdrawal_order_status'] });
      this.statusList = [{ text: this.$t('all'), value: '' }].concat(user_withdrawal_order_status);
    },
    async fetchData() {
      try {
        this.loading = true;
        const {
          data: { totalRows, list },
        } = await getPaymentWithdrawalOrder({ ..._.pickBy(this.searchForm, v => v !== '') });
        this.tableData = list;
        this.searchForm = { ...this.searchForm, totalRows };
      } finally {
        this.loading = false;
      }
      const { data } = await getPaymentWithdrawalOrderDashboard({ tradeTimeEnd: formatToRFC3339(new Date()) });
      this.dashboard = data;
    },
    command({ command, row }) {
      this.bindDialogCommand.type = command;
      this.bindDialogCommand.uuid = row.uuid;
      this.$refs.DialogCommand.show();
    },
    dashboardSearch(type) {
      // @todo 未來要實作 各自搜尋條件功能
      _.map(this.dashSearch, o => {
        o.isSearch = false;
        return o;
      });
      this.dashSearch[type].isSearch = true;
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
      this.$refs.DialogWithdrawalCondition.show({ uuid: row.userUUID });
      // this.$router.push({ name: 'withdrawal-information', params: { uuid: row.uuid } });
    },
    handleNewWithdrawal() {
      this.$router.push({ name: 'new-withdrawal' });
    },
    handleWithdrawProcessingTimeRecord() {
      this.$router.push({ name: 'withdrawal-processing-time-record' });
    },
    handleExport() {
      // todo: 送api 取得匯出的資料列表
      // 資料拿到後再做下面這段功能
      const tHeader = [
        this.$t('status'),
        this.$t('withdrawCode'),
        this.$t('userName'),
        this.$t('lockStatus'),
        this.$t('requestTime'),
        this.$t('processTime'),
        this.$t('paidTime'),
        this.$t('spendTime'),
        this.$t('name'),
        this.$t('playerLevel'),
        this.$t('tag'),
        this.$t('withdrawalAmount'),
        this.$t('paymentType'),
        this.$t('bankName'),
        this.$t('accountName'),
        this.$t('account'),
        this.$t('bankBranch'),
        this.$t('withdrawalRefuseType'),
        this.$t('province'),
        this.$t('city'),
        this.$t('withdrawalIp'),
        this.$t('withdrawalPlace'),
        this.$t('withdrawalId'),
        this.$t('processedBy'),
        this.$t('payTime'),
        this.$t('externalNote'),
        this.$t('internalNote'),
        this.$t('actionLog'),
        this.$t('timeRecord'),
        this.$t('currency'),
        this.$t('systemCode'),
      ];
      const filterVal = [
        'status',
        'orderNo',
        'username',
        'lockedStatusBy',
        'requestTime',
        'processTime',
        'paidTime',
        'totalSpendTime',
        'realName',
        'playerLevel',
        'userTagList',
        'amount',
        'paymentType',
        'bankName',
        'bankAccountName',
        'bankAccount',
        'branch',
        'declinedCategory',
        'province',
        'city',
        'ip',
        'location',
        'id',
        'processedBy',
        'updated',
        'externalNote',
        'internalNote',
        'actionLog',
        'timeLog',
        'currencyCode',
        'systemCode',
      ];
      const data = this.tableData.map(v => filterVal.map(j => v[j]));
      eportFile(tHeader, data, 'excel-test', 'xlsx');
    },
  },
};
</script>

<style lang="scss" scoped>
.box1 ::v-deep {
  background: linear-gradient(270deg, #d3768b 0%, #d190a9 100%);
  box-shadow: 5px 6px 2px 0px rgba(0, 0, 0, 0.35);
}
.box2 ::v-deep {
  background: linear-gradient(90deg, #b68be0 0%, #a762d4 100%);
  box-shadow: 5px 6px 2px 0px rgba(0, 0, 0, 0.35);
}
.box3 ::v-deep {
  background: linear-gradient(90deg, #7ac9d8 0%, #29adc6 100%);
  box-shadow: 5px 6px 2px 0px rgba(0, 0, 0, 0.35);
}
.box4 ::v-deep {
  background: linear-gradient(90deg, #bcbcbc 20%, #878787 100%);
  box-shadow: 5px 6px 2px 0px rgba(0, 0, 0, 0.35);
}
.box-wrap {
  display: flex;
  justify-content: space-around;
}
</style>
