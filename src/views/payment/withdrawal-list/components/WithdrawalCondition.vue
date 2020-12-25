<template lang="pug">
  div(v-loading="loading")
    CollapseBox(:title="$t('withdrawalCondition')" :isShowBtn="false" className="custom-collapse-box")
      template(v-slot:light)
        el-tabs(v-model="activeName" @tab-click="handleClick")
          el-tab-pane(:label="$t('wageringRequirements')" name="wageringRequirements")
            Table(
              :table-data="wrTableData"
              :table-columns="wrTableColumns"
            )
            Pagination(:data="searchForm" @pagination-change="handlePaginationChange")
          //el-tab-pane(:label="$t('minimumDepositRequirements')" name="second")
            Table(:table-data="mrTableData" :table-columns="mrTableColumns")
</template>

<script>
import Card from '@/components/Card';
import Table from '@/components/Table';
import Pagination from '@/components/Pagination';
import CollapseBox from '@/components/CollapseBox/index';
import { dateTimeFormat } from '@/utils/date';
import { getPlayerWithdrawal } from '@/api/player-detail';
import { mapGetters, mapMutations } from 'vuex';
import { defaultColumn } from '@/utils/table';
export default {
  name: 'WithdrawalCondition',
  components: {
    Card,
    CollapseBox,
    Table,
    Pagination,
  },
  props: {
    uuid: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      activeName: 'wageringRequirements',
      searchForm: {
        page: 1,
        totalRows: 0,
        rows: 1,
        transactionType: 1,
      },
      wrTableData: [],
      mrTableData: [],
      wrTableColumns: [
        {
          ...defaultColumn,
          prop: 'transactionType',
          label: () => this.$t('transactionType'),
          render: (h, param) => {
            const transactionType = param.row.transactionType;
            return transactionType === 1 ? this.$t('deposit') : this.$t('bets');
          },
        },
        { ...defaultColumn, prop: 'depositAmount', label: () => this.$t('player_detail_deposit_amount') },
        {
          ...defaultColumn,
          prop: 'startedAt',
          label: () => this.$t('startAt'),
          render: (h, param) => h('span', param.row.startedAt ? dateTimeFormat(param.row.startedAt) : '-'),
        },
        { ...defaultColumn, prop: 'betAmountWithdrawalCondition', label: () => this.$t('player_detail_withdrawal_condition') },
        { ...defaultColumn, prop: 'note', label: () => this.$t('notes') },
        { ...defaultColumn, prop: 'bettingAmount', label: () => this.$t('player_detail_bet_amount') },
        {
          ...defaultColumn,
          prop: 'status',
          label: () => this.$t('status'),
          render: (h, param) => {
            const colorDic = {
              0: { text: this.$t('payment_withdrawal_condition_undone'), class: '' },
              1: { text: this.$t('payment_withdrawal_condition_completed'), class: 'green--text text--accent-4' },
            };
            return h('span', { class: 'green--text text--accent-4' }, colorDic[param.row.status]?.text || '-');
          },
        },
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
    initOptionList() {},
    async fetchData() {
      try {
        this.SET_MODAL_LOADING_STATUS(true);
        const {
          data: { wageringRequirements, totalRows },
        } = await getPlayerWithdrawal({ id: this.uuid, ...this.searchForm });
        this.wrTableData = wageringRequirements || [];
        this.searchForm = { ...this.searchForm, totalRows };
      } finally {
        this.SET_MODAL_LOADING_STATUS(false);
      }
    },
    handleClick() {},
    handlePaginationChange(payload) {
      this.searchForm = { ...this.searchForm, ...payload };
      this.fetchData();
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
