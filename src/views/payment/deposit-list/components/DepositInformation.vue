<template lang="pug">
  div(v-loading="loading")
    el-form.el-form-content-w-100(:inline="true")
      el-row.flex-wrap(type="flex" :gutter="20")
        el-col(:span="8" v-for="item in walletList" :key="item.value")
          el-form-item
            FormItemLabel {{ item.label() + ':' }}
            .d-flex.flex-row
              el-input(v-model="info[item.value]" placeholder="Please input" disabled)
              el-button(type="primary" icon="el-icon-document" @click="handleCopy(info[item.value],$event)")
    h5
      div(style="padding-bottom: 10px") {{ $t('paymentMethodDetails') }}
      div(class="wrap-grid")
        div(class="grid" v-for="(item,index) in paymentMethodDetailList1" :key="index" style="border-bottom: 0px #ffffff;")
          div(style="width: 45%;")
            span {{ item.label() }}
          div(style="width: 55%;")
            span(style="padding: 10px;") {{ info[item.value] }}
      div(class="wrap-grid")
        div(class="grid" v-for="(item,index) in paymentMethodDetailList2" :key="index" )
          div(style="width: 45%;")
            span {{ item.label() }}
          div(style="width: 55%;")
            span(style="padding: 10px;") {{ info[item.value] }}
    el-divider
    h5
      div(style="padding-bottom: 10px") {{ $t('collectionAccount') }}
      div(class="wrap-grid")
        div(class="grid" v-for="(item,index) in collectionAccountList1" :key="index" style="border-bottom: 0px #ffffff;")
          div(style="width: 45%;")
            span {{ item.label() }}
          div(style="width: 55%;")
            span(style="padding: 10px;") {{ info[item.value] }}
      div(class="wrap-grid")
        div(class="grid" v-for="(item,index) in collectionAccountList2" :key="index")
          div(style="width: 45%;")
            span {{ item.label() }}
          div(style="width: 55%;")
            span(style="padding: 10px;") {{ info[item.value] }}
</template>

<script>
import Card from '@/components/Card';
import Table from '@/components/Table';
import Pagination from '@/components/Pagination';
import FormItemLabel from '@/components/FormItemLabel';
import CollapseBox from '@/components/CollapseBox';
import clip from '@/utils/clipboard';
import { dateTimeFormat } from '@/utils/date';
import { getPaymentDepositDetailsUuid } from '@/api/payment';
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: 'DepositInformation',
  components: {
    Card,
    Table,
    Pagination,
    FormItemLabel,
    CollapseBox,
  },
  props: {
    uuid: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      info: {},
      walletList: [],
      paymentMethodDetailList1: [],
      paymentMethodDetailList2: [],
      collectionAccountList1: [],
      collectionAccountList2: [],
    };
  },
  computed: {
    ...mapGetters({ loading: 'app/loading' }),
  },
  created() {
    this.initOptionList();
  },
  methods: {
    ...mapMutations({ SET_MODAL_LOADING_STATUS: 'app/SET_MODAL_LOADING_STATUS' }),
    initOptionList() {
      this.walletList = [
        { label: () => this.$t('orderNumber'), value: 'sn' },
        { label: () => this.$t('userName'), value: 'username' },
        { label: () => this.$t('realName'), value: 'realName' },
        { label: () => this.$t('playerLevel'), value: 'userLevel' },
        { label: () => this.$t('bankOrderId'), value: 'bankOrderID' },
        { label: () => this.$t('playerSince'), value: 'created' },
        // { label: () => this.$t('reference'), value: 'reference' },
        // { label: () => this.$t('apvdDepositCount'), value: 'approvedDepositCount' },
        // { label: () => this.$t('externalTransactionId'), value: 'externalID' },
        // { label: () => this.$t('bankOrderId'), value: 'bankOrderID' },
        // { label: () => this.$t('dateDeposited'), value: 'depositTime' },
        // { label: () => this.$t('depositMethod'), value: 'userDepositMode' },
      ];
      this.paymentMethodDetailList1 = [
        { label: () => this.$t('depositAmount'), value: 'depositAmount' },
        { label: () => this.$t('depositBankApiName'), value: 'depositBank' },
        { label: () => this.$t('depositBankApiAccount'), value: 'depositBankAccountNumber' },
        { label: () => this.$t('depositTransCode'), value: 'depositTransID' },
        { label: () => this.$t('arrivalTime'), value: 'depositTime' },
      ];
      this.paymentMethodDetailList2 = [
        { label: () => this.$t('depositBankBranchName'), value: 'depositBankBranch' },
        { label: () => this.$t('depositIpLocation'), value: 'depositIpLocation' },
        { label: () => this.$t('depositorName'), value: 'depositorName' },
        { label: () => this.$t('depositDatetimeFromPlayer'), value: 'depositTimeFromUser' },
        { label: () => this.$t('depositWay'), value: 'userDepositMode' },
      ];
      this.collectionAccountList1 = [
        { label: () => this.$t('bankPaymentType'), value: 'collectionBank' },
        { label: () => this.$t('collectionAccHolderName'), value: 'collectionBankAccountName' },
        { label: () => this.$t('collectionAccount'), value: 'collectionBankAccountNumber' },
      ];
      this.collectionAccountList2 = [
        { label: () => this.$t('collectionAccountNote'), value: 'collectionNote' },
        { label: () => this.$t('feeForOperator'), value: 'feeForOperator' },
        { label: () => this.$t('feeForPlayer'), value: 'feeForUser' },
      ];
    },
    async fetchData() {
      try {
        this.SET_MODAL_LOADING_STATUS(true);
        const { data } = await getPaymentDepositDetailsUuid({ uuid: this.uuid });
        this.info = data;
        this.info.depositTime = dateTimeFormat(data.depositTime);
        this.info.created = dateTimeFormat(data.created);
        this.info.depositTimeFromUser = dateTimeFormat(data.depositTimeFromUser);
        this.info.depositIpLocation = `${data.ip} ${data.location}`;
      } finally {
        this.SET_MODAL_LOADING_STATUS(false);
      }
    },
    handleCopy(text, event) {
      clip(text, event);
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep .el-textarea .el-textarea__inner {
  resize: none;
}

.wrap-grid {
  display: flex;
  .grid {
    display: flex;
    border: 1px solid #000000;
    width: 33%;
    line-height: 3.5;
    background: #e6e6e6;
    border-right: 0px;
    :nth-child(even) {
      background: #ffffff;
    }
    &:nth-last-child(1) {
      border-right: 1px solid #000000;
    }
  }
}
</style>
