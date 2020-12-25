<template lang="pug">
  el-form.el-form-content-w-100(ref="ruleForm" :model="formParam" :rules="rules" :inline='true')
    el-row.d-flex.flex-wrap.px-44(:gutter="20")
      el-col.text-right(:span="24")
        .red--text.font-small  * {{ $t('requiredField') }}
      el-col(:span="12")
        el-form-item(prop="depositTime" :label="$t('date')")
          //el-date-picker.w-100(v-model='formParam.depositTime', type='datetime', placeholder='选择日期时间', default-time='12:00:00')
          el-input(v-model='formParam.date' :placeholder="$t('g_placeholder_inputContent')" readonly)
          template(v-slot:error="{ error }")
            span.font-mini.font-weight-regular.red--text {{ error() }}
      el-col(:span="12")
        el-form-item.success-border(ref="userName" prop="userName" :label="$t('playerUserName')" validate-status="success")
          el-input(v-model='formParam.userName', :placeholder="$t('g_placeholder_inputContent')")
          template( v-slot:error="{ error }")
            span.font-mini.font-weight-regular.red--text {{ error() }}
      el-col(:span="12")
        el-form-item(prop="amount" :label="$t('mainWallet')")
          el-input(v-model='formParam.amount', type='number', :placeholder="$t('g_placeholder_inputContent')")
          template( v-slot:error="{ error }")
            span.font-mini.font-weight-regular.red--text {{ error() }}
      el-col(:span="12")
        el-form-item(prop="paymentAccountUUID" :label="$t('byCollectionAccount')")
          el-select.w-100(v-model='formParam.paymentAccountUUID' :placeholder="$t('g_selector_default')")
            el-option-group(v-for='(group, i) in accountList[accountType]', :key='i', :label='group.text')
              el-option(v-for='item in group.options', :key='item.value', :label='item.text', :value='item.value')
          template( v-slot:error="{ error }")
            span.font-mini.font-weight-regular.red--text {{ error() }}
        el-checkbox(v-model="formParam.checked") {{ '只显示开启的收款帐户' }}
      el-col(:span="24")
        el-form-item(prop="bankAccountOwnerName" :label="$t('bankAccountOwnerName')")
          el-input(v-model='formParam.bankAccountOwnerName', :placeholder="$t('pleaseEnter')")
          template( v-slot:error="{ error }")
            span.font-mini.font-weight-regular.red--text {{ error() }}
      el-col(:span="12")
        el-form-item(prop="internalRemark" :label="$t('internalNote')")
          el-input(v-model='formParam.internalRemark', type='textarea', :rows='6', placeholder='')
          template( v-slot:error="{ error }")
            span.font-mini.font-weight-regular.red--text {{ error() }}
      el-col(:span="12")
        el-form-item(:label="$t('externalNote')")
          el-input(v-model='formParam.externalRemark', type='textarea', :rows='6', placeholder='')
      //.box__w50
        .block
          .demonstration {{ $t('subWallet') }}
          el-select(v-model='subWalletList.value', placeholder='-----NONE-----')
            el-option(v-for='item in subWalletList.options', :key='item.value', :label='item.label', :value='item.value')
      //.box__w50
        .block
          .demonstration {{ $t('promotion') }}
          el-select(v-model='promotionList.value', placeholder='-----NONE-----')
            el-option(v-for='item in promotionList.options', :key='item.value', :label='item.label', :value='item.value')
    el-row.d-flex.flex-wrap.px-44(:class="buttonClass" :gutter="20")
      el-col.text-right(:span="24")
        span.red--text *
        | {{ $t('status') }}
        el-radio.pl-32(v-model="formParam.status" :label="1") {{ $t('pending') }}
        el-radio.pl-4(v-model="formParam.status" :label="2") {{ $t('success') }}
        el-button.ml-32(type="primary"  @click="handleAdd") {{ $t('add') }}
</template>

<script>
import Card from '@/components/Card/index';
import { dateTimeFormat, getTodayRFC3339 } from '@/utils/date';
import { postPaymentDepositAdd } from '@/api/payment';
import { getGlobalUser, getMultipleGlobalSelector } from '@/api/public';
import _ from 'lodash';
import { mapMutations } from 'vuex';
export default {
  name: 'NewDepositForm',
  components: {
    Card,
  },
  props: {
    buttonClass: {
      type: [String, Object],
      default: '',
    },
  },
  data() {
    const validateUser = async (rule, value, callback) => {
      await getGlobalUser({ username: value })
        .then(repo => {
          this.$refs.userName.validateState = 'success';
          this.formParam.userUUID = repo.data.uuid;
        })
        .catch(error => {
          this.formParam.userUUID = '';
          // console.log('error:', `[${value}]${error.response.data.message}`);
          callback(() => `[ ${value} ] ${error.response.data.message}`);
        });
      callback();
    };
    return {
      initFormParam: {
        date: dateTimeFormat(getTodayRFC3339()),
        depositTime: getTodayRFC3339(),
        userName: '',
        userUUID: '',
        amount: '',
        paymentAccountUUID: '',
        internalRemark: '',
        externalRemark: '',
        status: 1,
        bankAccountOwnerName: '',
        checked: true,
      },
      formParam: {},
      accountList: {
        payment_account: [
          {
            text: 'only',
            options: [],
          },
        ],
        payment_account_all: [
          {
            text: 'all',
            options: [],
          },
        ],
      },
      // todo 子錢包第一階段暫時不做
      // subWalletList: {
      //   options: [
      //     {
      //       value: 'SAG',
      //       label: '假的 SAG',
      //     },
      //   ],
      //   value: '',
      // },
      // todo 優惠活動第一階段暫時不做
      // promotionList: {
      //   options: [
      //     {
      //       value: '12345 (bi1ccitt)',
      //       label: '假的 12345 (bi1ccitt)',
      //     },
      //   ],
      //   value: '',
      // },
      rules: {
        depositTime: [{ required: true, trigger: 'blur', message: () => this.$t('requiredMessage') }],
        userName: [
          { required: true, trigger: 'blur', message: () => this.$t('requiredMessage') }, { validator: validateUser, trigger: 'blur' },
        ],
        amount: [{ required: true, trigger: 'blur', message: () => this.$t('requiredMessage') }],
        paymentAccountUUID: [{ required: true, trigger: 'blur', message: () => this.$t('requiredMessage') }],
        internalRemark: [{ required: true, trigger: 'blur', message: () => this.$t('requiredMessage') }],
      },
    };
  },
  computed: {
    accountType() {
      return this.formParam.checked ? 'payment_account' : 'payment_account_all';
    },
  },
  watch: {
    'formParam.checked': {
      handler(status) {
        this.formParam.paymentAccountUUID = '';
      },
    },
  },
  created() {
    this.initForm();
    this.initOptionList();
  },
  mounted() {
    this.date = new Date();
  },
  methods: {
    ...mapMutations({ SET_LOADING_STATUS: 'app/SET_LOADING_STATUS' }),
    // eslint-disable-next-line require-await
    async postAdd() {
      this.$refs.ruleForm.validate(async valid => {
        if (valid) {
          try {
            this.SET_LOADING_STATUS(true);
            await postPaymentDepositAdd({
              ..._.pickBy(this.formParam, (val, key) => val !== '' && !['userName',
                'checked',
                'date'].includes(key)),
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
        } else {
          return false;
        }
      });
    },
    initForm() {
      this.formParam = _.cloneDeep(this.initFormParam);
      this.formParam.date = dateTimeFormat(getTodayRFC3339());
      this.formParam.depositTime = getTodayRFC3339();
    },
    // @todo 這應該寫在vuex
    async initOptionList() {
      const {
        data: { payment_account, payment_account_all },
      } = await getMultipleGlobalSelector({ parents: ['payment_account', 'payment_account_all'] });
      this.accountList.payment_account = payment_account;
      this.accountList.payment_account_all = payment_account_all;
    },
    handleAdd() {
      this.postAdd();
    },
  },
};
</script>
