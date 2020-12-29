<template lang="pug">
  .wrap(v-loading="loading")
    Breadcrumb
    el-row
      el-button(size="small" icon="el-icon-back" type="primary" class="ml-20" @click="$router.go(-1)") {{ $t('goBack') }}
    Card(:header-title="$t('depositInfo')" header-icon="" :closeable="false")
      DepositInformation(ref="DepositInformation" :uuid="$route.params.uuid")
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb';
import Card from '@/components/Card';
import DepositInformation from '@/views/payment/deposit-list/components/DepositInformation';
import { mapGetters } from 'vuex';
export default {
  components: {
    Breadcrumb,
    Card,
    DepositInformation,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ loading: 'app/loading' }),
  },
  mounted() {
    this.fetchData();
  },
  methods: {
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
      await this.$refs.DepositInformation.fetchData();
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
