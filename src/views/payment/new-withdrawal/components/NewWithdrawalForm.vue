<template lang="pug">
  el-form.el-form-content-w-100(ref="ruleForm" :model="formParam" :rules="rules" :inline='true')
    el-row.d-flex.flex-wrap.px-44(:gutter="20")
      el-col.text-right(:span="24")
        .red--text.font-small  * {{ $t('requiredField') }}
      el-col(:span="12")
        el-form-item(prop="paidTime" :label="$t('date')")
          el-input(v-model='formParam.date' :placeholder="$t('selectDateAndTime')" readonly)
          template(v-slot:error="{ error }")
            span.font-mini.font-weight-regular.red--text {{ error() }}
      el-col(:span="12")
        el-form-item.success-border(ref="userName" prop="userName" :label="$t('playerUserName')")
          el-input(v-model='formParam.userName' :placeholder="$t('g_placeholder_inputContent')")
          template( v-slot:error="{ error }")
            span.font-mini.font-weight-regular.red--text {{ error() }}
        .font-small {{ $t('playerAccountBalance') }}：{{ wallet.totalBalance }}
      el-col(:span="12")
        el-form-item(prop="userBankUUID" :label="$t('bank')")
          el-select.w-100(v-model='formParam.userBankUUID' :placeholder="$t('g_selector_default')")
            el-option-group(v-for='(group, i) in accountList', :key='i', :label='group.text')
              el-option(v-for='item in group.options', :key='item.value', :label='item.text', :value='item.value')
          template( v-slot:error="{ error }")
            span.font-mini.font-weight-regular.red--text {{ error() }}
      el-col(:span="12")
        el-form-item(prop="amount" :label="$t('amount')")
          el-input(v-model="formParam.amount" type="number" :placeholder="$t('pleaseEnter')")
          template( v-slot:error="{ error }")
            span.font-mini.font-weight-regular.red--text {{ error() }}
        //.font-small.mb-5 {{ $t('minimumAmount') }}: {{ wallet.gameWalletTotal }}
        //.font-small.mb-5 {{ $t('maxiDailyWithdrawal') }}: {{ wallet.totalBalance }}
        //.font-small.mb-5 {{ $t('totalWithdrawalsToday') }}:  {{ wallet.gameWalletTotal }}
      el-col(:span="12")
        el-form-item(prop="internalNote" :label="$t('internalNote')")
          el-input(v-model='formParam.internalNote', type='textarea', :rows='6', placeholder='')
          template( v-slot:error="{ error }")
            span.font-mini.font-weight-regular.red--text {{ error() }}
      el-col(:span="12")
        el-form-item(:label="$t('externalNote')")
          el-input(v-model='formParam.outsideNote', type='textarea', :rows='6', placeholder='')
      el-col.text-right(:span="24")
        span.red--text *
        | {{ $t('status') }}
        el-radio.pl-32(v-model="formParam.status" :label="1") {{ $t('pending') }}
        //el-radio.pl-4(v-model="formParam.status" :label="2") {{ $t('success') }}
        el-button.ml-32(type="primary"  @click="handleAdd") {{ $t('add') }}
</template>

<script>
import Card from '@/components/Card/index';
import { dateTimeFormat, getTodayRFC3339 } from '@/utils/date';
import { postPaymentWithdrawalOrderAdd } from '@/api/payment';
import { getGlobalUser, getGlobalUserMainWalletBalance, getGlobalSelector } from '@/api/public';
import _ from 'lodash';
import { mapMutations } from 'vuex';

export default {
  name: 'NewWithdrawalForm',
  components: {
    Card,
  },
  data() {
    // eslint-disable-next-line func-style
    const validateUser = async (rule, value, callback) => {
      await getGlobalUser({ username: value })
        .then(repo => {
          this.$refs.userName.validateState = 'success';
          this.formParam.userUUID = repo.data.uuid;
        })
        .catch(error => {
          this.initUserAndBank();
          this.wallet = _.cloneDeep(this.initWallet);
          callback(() => `[ ${value} ] ${error.response.data.message}`);
        });
      callback();
    };
    return {
      initFormParam: {
        date: dateTimeFormat(getTodayRFC3339()),
        paidTime: getTodayRFC3339(),
        userName: '',
        userUUID: '',
        amount: 0,
        userBankUUID: '',
        externalNote: '',
        internalNote: '',
        status: 1,
      },
      formParam: {},
      initWallet: {
        gameWalletTotal: 0,
        mainWalletTotal: 0,
        subWallets: [],
        totalBalance: 3,
        withdrawalAmount: 0,
      },
      wallet: {},
      rules: {
        paidTime: [{ required: true, trigger: 'blur', message: () => this.$t('requiredMessage') }],
        userName: [
          { required: true, trigger: 'blur', message: () => this.$t('requiredMessage') }, { validator: validateUser, trigger: ['blur', 'change'] },
        ],
        amount: [{ required: true, trigger: 'blur', message: () => this.$t('requiredMessage') }],
        userBankUUID: [{ required: true, trigger: 'blur', message: () => this.$t('requiredMessage') }],
        internalNote: [{ required: true, trigger: 'blur', message: () => this.$t('requiredMessage') }],
      },
      accountList: [],
      loading: false,
    };
  },
  watch: {
    'formParam.userUUID': {
      handler(newValue) {
        if (newValue) {
          this.setWallet();
          this.setBankSelector();
        }
      },
    },
  },
  created() {
    this.formParam = _.cloneDeep(this.initFormParam);
    this.wallet = _.cloneDeep(this.initWallet);
  },
  methods: {
    ...mapMutations({ SET_LOADING_STATUS: 'app/SET_LOADING_STATUS' }),
    postAdd() {
      this.$refs.ruleForm.validate(async valid => {
        if (valid) {
          try {
            this.SET_LOADING_STATUS(true);
            await postPaymentWithdrawalOrderAdd({
              ..._.pickBy(this.formParam, (val, key) => val !== '' && !['userName', 'date'].includes(key)),
            }).then(() => {
              this.$message.success(
                this.$t('success'),
                setTimeout(() => {
                  this.$emit('postAdd', { status: true });
                  this.SET_LOADING_STATUS(false);
                }, 2000),
              );
            });
          } catch (e) {
            this.$message.error(
              e.response ? e.response.data.message : e.message,
              setTimeout(() => {
                this.SET_LOADING_STATUS(false);
              }, 2000),
            );
          }
        }
      });
    },
    initForm() {
      this.formParam = _.cloneDeep(this.initFormParam);
      this.formParam.date = dateTimeFormat(getTodayRFC3339());
      this.formParam.paidTime = getTodayRFC3339();
      this.wallet = _.cloneDeep(this.initWallet);
    },
    initUserAndBank() {
      this.formParam.userUUID = '';
      this.formParam.userBankUUID = '';
      this.accountList = [];
    },
    async setWallet() {
      const { data } = await getGlobalUserMainWalletBalance({ userUUID: this.formParam.userUUID });
      this.wallet = data;
    },
    async setBankSelector() {
      const { data } = await getGlobalSelector({ parent: ['user_bank'], bankType: 2, userUUID: this.formParam.userUUID });
      this.accountList = data;
    },
    handleAdd() {
      this.postAdd();
    },
  },
};
</script>
