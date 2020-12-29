<template lang="pug">
  .wrap(v-loading="loading")
    Breadcrumb
    el-row
      el-button(size="small" icon="el-icon-back" type="primary" class="ml-20" @click="$router.go(-1)") {{ $t('goBack') }}
    Card(:header-title="$t('withdrawalInfo')" header-icon="" :closeable="false")
      el-form.el-form-content-w-100(:inline="true")
        el-row.flex-wrap(type="flex" :gutter="20")
          el-col(v-for="item in walletList" :key="item.value" :span="8" )
            el-form-item
              FormItemLabel {{ item.label() + ':' }}
              .d-flex.flex-row
                el-input(v-model="info[item.value]" :placeholder="$t('g_input_placeholder_default')" disabled)
                el-button(type="primary" icon="el-icon-document" @click="handleCopy(wallet[item.value],$event)")
    Card(:header-title="$t('withdrawalCondition')" :closeable="false")
      el-tabs(v-model="activeName" @tab-click="handleClick")
        el-tab-pane(:label="$t('wageringRequirements')" name="first")
          Table(
            :table-data="wrTableData"
            :table-columns="wrTableColumns"
          )
        el-tab-pane(:label="$t('minimumDepositRequirements')" name="second")
          Table(
            :table-data="mrTableData"
            :table-columns="mrTableColumns"
          )
    Card(:header-title="$t('duplicateAccountList')" :closeable="false")
      div(slot="toolbar")
        el-row(type="flex" align="middle" justify="space-between")
          Pagination(layout="sizes, total" :data="searchForm" @pagination-change="handlePaginationChange")
      Table(
        :table-data="mrTableData"
        :table-columns="mrTableColumns"
      )
    Card(:header-title="$t('paymentMethodDetail')" header-icon="" :closeable="false")
      el-form.el-form-content-w-100(:inline="true")
        el-row.flex-wrap(type="flex" :gutter="20")
          el-col(v-for="item in paymentMethodDetail1" :key="item.value" :span="8" )
            el-form-item
              FormItemLabel {{ item.label() + ':' }}
              .d-flex.flex-row
                el-input(v-model="info[item.value]" :placeholder="$t('g_input_placeholder_default')" disabled)
                el-button(type="primary" icon="el-icon-document" @click="handleCopy(info[item.value],$event)")
        hr
        el-row.flex-wrap(type="flex" :gutter="20")
          el-col(v-for="item in paymentMethodDetail2" :key="item.value" :span="8" )
            el-form-item
              FormItemLabel {{ item.label() + ':' }}
              .d-flex.flex-row
                el-input(v-model="info[item.value]" :placeholder="$t('g_input_placeholder_default')" disabled)
                el-button(type="primary" icon="el-icon-document" @click="handleCopy(info[item.value],$event)")
      CollapseBox(:title="$t('notes')" :isShowBtn="false" className="custom-collapse-box")
        template(v-slot:light)
          el-form(:inline="true")
            el-row(type="flex" class="wrap-row")
              el-form-item(:style="{ width: '50%' }")
                FormItemLabel {{ $t('internalNoteRecord') + ':' }}
                el-input(v-model="info.internalNote" type="textarea" :rows="10" disabled)
              el-form-item(:style="{ width: '50%' }")
                FormItemLabel {{ $t('externalNoteRecord') + ':' }}
                el-input(v-model="info.externalNote" type="textarea" :rows="10" disabled)
            el-row(type="flex" class="wrap-row")
              el-form-item(:style="{ width: '50%' }")
                FormItemLabel {{ $t('addInternalNoteRecord') + ':' }}
                el-input(v-model="notes.addInternalNoteRecord" type="textarea" :rows="10")
              el-form-item(:style="{ width: '50%' }")
                FormItemLabel {{ $t('addExternalNoteRecord') + ':' }}
                el-input(v-model="notes.addExternalNoteRecord" type="textarea" :rows="10")
            el-row(type="flex" class="center")
              el-form-item
                el-button(size="small" type="primary" @click="handleAddInternalNoteRecord()") {{ $t('add') }}
              el-form-item
                el-button(size="small" type="primary" @click="handleAddExternalNoteRecord()") {{ $t('add') }}
    .wrap-checkbox
      el-checkbox(v-model="skip.canIgnoredVipDailyMaxAmountSetting" size="small") {{ $t('withdrawal_information_checkbox_ignore_max_amount') }}
      el-checkbox(v-model="skip.canIgnoredVipDailyMaxTimesSetting" size="small") {{ $t('withdrawal_information_checkbox_ignore_times') }}
    .wrap-btn
      el-button(size="small" type="primary" v-for="item in paymentMethodList" :key="item.id" @click="handleThirdParty(item.uuid)") {{ item.name }}
      el-button(size="small" type="info" @click="handleAdd(5)") {{ $t('close') }}
      el-button(size="small" type="danger" @click="handleDecline()") {{ $t('decline') }}
      el-button(size="small" type="primary" @click="handleManually()") {{ $t('manualPayment') }}
      el-button(size="small" type="primary" @click="handlePaid()") {{ $t('paid') }}
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb';
import Card from '@/components/Card';
import Table from '@/components/Table';
import Pagination from '@/components/Pagination';
import FormItemLabel from '@/components/FormItemLabel';
import CollapseBox from '@/components/CollapseBox';
import { defaultColumn } from '@/utils/table';
import clip from '@/utils/clipboard';
import {
  getPaymentWithdrawalOrderUuid,
  getSystemPaymentApiWithdrawalList,
  postPaymentWithdrawalOrderInternalNoteUuid,
  postPaymentWithdrawalOrderExternalNoteUuid,
  patchPaymentWithdrawalOrderDeclineUuid,
  patchPaymentWithdrawalOrderProcessManuallyUuid,
  patchPaymentWithdrawalOrderPaidUuid,
  patchPaymentWithdrawalOrderProcessUuid,
} from '@/api/payment';
export default {
  components: {
    Breadcrumb,
    Card,
    Table,
    Pagination,
    FormItemLabel,
    CollapseBox,
  },
  data() {
    return {
      loading: false,
      activeName: 'first',
      searchForm: {},
      info: {
        username: '',
        realName: '',
        playerLevel: '',
        userRegisterTime: '',
        balance: '',
        amount: '',
        orderNo: '',
        currencyCode: '',
        created: '',
        ip: '',
        location: '',
        bankName: '',
        bankAccountName: '',
        bankAccount: '',
        branch: '',
        userPhoneNumber: '',
        bankAddress: '',
        processedBy: '',
        paidTime: '',
        paymentMethod: '',
        transactionFee: '',
        internalNote: '',
        externalNote: '',
      },
      notes: {
        addInternalNoteRecord: '',
        addExternalNoteRecord: '',
      },
      skip: {
        canIgnoredVipDailyMaxAmountSetting: false,
        canIgnoredVipDailyMaxTimesSetting: false,
      },
      wrTableData: [],
      mrTableData: [],
      wrTableColumns: [
        { ...defaultColumn, prop: 'transactionType', label: () => this.$t('transactionType') },
        { ...defaultColumn, prop: 'subWallet', label: () => this.$t('subWallet') },
        { ...defaultColumn, prop: 'promotionName', label: () => this.$t('promotionName') },
        { ...defaultColumn, prop: 'promoCode', label: () => this.$t('promoCode') },
        { ...defaultColumn, prop: 'depositAmount', label: () => this.$t('depositAmount') },
        { ...defaultColumn, prop: 'bonus', label: () => this.$t('bonus') },
        { ...defaultColumn, prop: 'startAt', label: () => this.$t('startAt') },
        { ...defaultColumn, prop: 'withdrawalCondition', label: () => this.$t('withdrawalCondition') },
        { ...defaultColumn, prop: 'notes', label: () => this.$t('notes') },
        { ...defaultColumn, prop: 'betAmount', label: () => this.$t('betAmount') },
        { ...defaultColumn, prop: 'status', label: () => this.$t('status') },
      ],
      mrTableColumns: [
        { ...defaultColumn, prop: 'transactionType', label: () => this.$t('transactionType') },
        { ...defaultColumn, prop: 'subWallet', label: () => this.$t('subWallet') },
        { ...defaultColumn, prop: 'promotionName', label: () => this.$t('promotionName') },
        { ...defaultColumn, prop: 'promoCode', label: () => this.$t('promoCode') },
        { ...defaultColumn, prop: 'depositAmount', label: () => this.$t('depositAmount') },
        { ...defaultColumn, prop: 'bonus', label: () => this.$t('bonus') },
        { ...defaultColumn, prop: 'startAt', label: () => this.$t('startAt') },
        { ...defaultColumn, prop: 'minDepositAmountConditions', label: () => this.$t('minDepositAmountConditions') },
        { ...defaultColumn, prop: 'notes', label: () => this.$t('notes') },
        { ...defaultColumn, prop: 'betAmount', label: () => this.$t('betAmount') },
        { ...defaultColumn, prop: 'status', label: () => this.$t('status') },
      ],
      walletList: [],
      paymentMethodList: [],
      paymentMethodDetail1: [],
      paymentMethodDetail2: [],
    };
  },
  created() {
    this.initOptionList();
    this.getPaymentMethodList();
    this.fetchData();
  },
  methods: {
    initOptionList() {
      this.walletList = [
        { label: () => this.$t('userName'), value: 'userName' },
        { label: () => this.$t('realName'), value: 'realName' },
        { label: () => this.$t('playerLevel'), value: 'playerLevel' },
        { label: () => this.$t('playerSince'), value: 'userRegisterTime' },
        { label: () => this.$t('totalPlayerBalance'), value: 'balance' },
        { label: () => this.$t('withdrawalNumber'), value: 'orderNo' },
      ];
      this.paymentMethodDetail1 = [
        { label: () => this.$t('withdrawalAmount'), value: 'amount' },
        { label: () => this.$t('withdrawalNumber'), value: 'orderNo' },
        { label: () => this.$t('currency'), value: 'currencyCode' },
        { label: () => this.$t('requestOn'), value: 'created' },
        { label: () => this.$t('withdrawIpLocation'), value: 'location' },
        { label: () => this.$t('bankName'), value: 'bankName' },
        { label: () => this.$t('bankAccountName'), value: 'bankAccountName' },
        { label: () => this.$t('bankAccount'), value: 'bankAccount' },
        { label: () => this.$t('bankAccountBranch'), value: 'branch' },
        { label: () => this.$t('bankBoundMobilePhone'), value: 'userPhoneNumber' },
        { label: () => this.$t('bankAddress'), value: 'bankAddress' },
      ];
      this.paymentMethodDetail2 = [
        { label: () => this.$t('operator'), value: 'processedBy' },
        { label: () => this.$t('approvalDateTime'), value: 'paidTime' },
        { label: () => this.$t('paymentMethod'), value: 'paymentMethod' },
        { label: () => this.$t('transferFee'), value: 'transferFee' },
      ];
    },
    async fetchData() {
      try {
        this.loading = true;
        const { data } = await getPaymentWithdrawalOrderUuid({ uuid: this.$route.params.id });
        this.info = data;
      } finally {
        this.loading = false;
      }
    },
    async getPaymentMethodList() {
      try {
        this.loading = true;
        const { data } = await getSystemPaymentApiWithdrawalList();
        const { list } = data;
        this.paymentMethodList = list;
      } finally {
        this.loading = false;
      }
    },
    async postInternalNoteRecord() {
      try {
        this.loading = true;
        const { data } = await postPaymentWithdrawalOrderInternalNoteUuid({
          uuid: this.$route.params.id,
          internalNote: this.notes.addInternalNoteRecord,
        });
        this.fetchData();
      } finally {
        this.loading = false;
      }
    },
    async postExternalNoteRecord() {
      try {
        this.loading = true;
        const { data } = await postPaymentWithdrawalOrderExternalNoteUuid({
          uuid: this.$route.params.uuid,
          externalNote: this.notes.addExternalNoteRecord,
        });
        this.fetchData();
      } finally {
        this.loading = false;
      }
    },
    async patchDecline() {
      try {
        this.loading = true;
        const { data } = await patchPaymentWithdrawalOrderDeclineUuid({ uuid: this.$route.params.uuid });
        this.fetchData();
      } finally {
        this.loading = false;
      }
    },
    async patchManually() {
      try {
        this.loading = true;
        const { data } = await patchPaymentWithdrawalOrderProcessManuallyUuid({ uuid: this.$route.params.uuid });
        this.fetchData();
      } finally {
        this.loading = false;
      }
    },
    async patchPaid() {
      try {
        this.loading = true;
        const { data } = await patchPaymentWithdrawalOrderPaidUuid({
          uuid: this.$route.params.id,
          canIgnoredVipDailyMaxAmountSetting: this.skip.canIgnoredVipDailyMaxAmountSetting,
          canIgnoredVipDailyMaxTimesSetting: this.skip.canIgnoredVipDailyMaxTimesSetting,
        });
        this.fetchData();
      } finally {
        this.loading = false;
      }
    },
    async patchThirdParty(apiUuId) {
      try {
        this.loading = true;
        const { data } = await patchPaymentWithdrawalOrderProcessUuid({
          uuid: this.$route.params.id,
          paymentApiUUID: apiUuId,
          canIgnoredVipDailyMaxAmountSetting: this.skip.canIgnoredVipDailyMaxAmountSetting,
          canIgnoredVipDailyMaxTimesSetting: this.skip.canIgnoredVipDailyMaxTimesSetting,
        });
        this.fetchData();
      } finally {
        this.loading = false;
      }
    },
    handleCopy(text, event) {
      clip(text, event);
    },
    handleAdd(number) {
      console.log(number);
    },
    handleAddInternalNoteRecord() {
      this.postInternalNoteRecord();
    },
    handleAddExternalNoteRecord() {
      this.postExternalNoteRecord();
    },
    handleDecline() {
      this.patchDecline();
    },
    handleManually() {
      this.patchManually();
    },
    handlePaid() {
      this.patchPaid();
    },
    handleThirdParty(uuid) {
      this.patchThirdParty(uuid);
    },
    handleClick() {},
    handlePaginationChange() {},
  },
};
</script>
<style lang="scss" scoped>
::v-deep .el-textarea .el-textarea__inner {
  resize: none;
}
::v-deep .wrap-row {
  .el-form-item__content {
    width: 100%;
  }
}
::v-deep .center {
  justify-content: space-around;
}
.wrap-checkbox {
  margin-left: 20px;
}
.wrap-btn {
  margin-top: 20px;
  margin-bottom: 75px;
  margin-left: 20px;
}
</style>
