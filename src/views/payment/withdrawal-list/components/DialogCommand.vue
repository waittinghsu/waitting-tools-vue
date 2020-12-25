<template lang="pug">
  Dialog(ref="dialog" :title="title")
    el-form.el-form-content-w-100(:inline="true" slot="dialog-body")
      el-row.flex-wrap(type="flex" :gutter="20")
        el-col(:span="24")
          span.font-display-1 {{ info.sn || '華澳大欖發' }}
        el-col(:span="24")
          el-divider
        el-col(:span="24")
      el-row.flex-wrap(type="flex" :gutter="20")
        el-col(:span="12")
          el-form-item
            FormItemLabel {{ `${$t('internalNoteRecord')}:` }}
            el-input(v-model="info.internalNote" type="textarea" :rows="10" disabled)
        el-col(:span="12")
          el-form-item
            FormItemLabel {{ `${$t('externalNoteRecord')}:` }}
            el-input(v-model="info.externalNote" type="textarea" :rows="10" disabled)
      el-row.flex-wrap(type="flex" :gutter="20")
        el-col(:span="12")
          el-form-item
            FormItemLabel {{ `${$t('addInternalNoteRecord')}:` }}
            el-input(v-model="notes.internalNote" type="textarea" :rows="10")
        el-col(:span="12")
          el-form-item
            FormItemLabel {{ `${$t('addExternalNoteRecord')}:` }}
            el-input(v-model="notes.externalNote" type="textarea" :rows="10")
    div(slot="dialog-footer")
      .d-flex.flex-row.justify-end
        el-button(type="info" @click="handleCancel")  {{ $t('cancel') }}
        el-button(type="primary" @click="handleAdd")  {{ $t('confirm') }}
</template>

<script>
import Dialog from '@/components/Dialog';
import FormItemLabel from '@/components/FormItemLabel';
import { mapGetters, mapMutations } from 'vuex';
import _ from 'lodash';
import {
  getPaymentWithdrawalOrderDetailUuid,
  patchPaymentWithdrawalOrderPaidUuid,
  patchPaymentWithdrawalOrderDeclineUuid,
  patchPaymentWithdrawalOrderNoteUuid,
} from '@/api/payment';
export default {
  name: 'DialogCommand',
  components: {
    Dialog,
    FormItemLabel,
  },
  props: {
    uuid: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'confirm',
    },
  },
  data() {
    return {
      info: {},
      initNote: {
        internalNote: '',
        externalNote: '',
      },
      notes: {},
      apiMapping: {
        confirm: patchPaymentWithdrawalOrderPaidUuid,
        reject: patchPaymentWithdrawalOrderDeclineUuid,
        remark: patchPaymentWithdrawalOrderNoteUuid,
      },
    };
  },
  computed: {
    ...mapGetters({ loading: 'app/loading' }),
    title() {
      const dic = {
        confirm: `${this.$t('confirm')} ${this.$t('deposit')}`,
        reject: `${this.$t('g_btn_reject')} ${this.$t('deposit')}`,
        remark: `${this.$t('g_btn_remark')}`,
      };
      return dic[this.type || 'confirm'];
    },
  },
  created() {
    this.notes = _.cloneDeep(this.initNote);
  },
  mounted() {
    this.$watch(
      () => this.$refs.dialog.dialogVisible,
      val => !val || this.fetchData(),
    );
  },
  methods: {
    ...mapMutations({ SET_MODAL_LOADING_STATUS: 'app/SET_MODAL_LOADING_STATUS' }),
    async fetchData() {
      try {
        this.SET_MODAL_LOADING_STATUS(true);
        const { data } = await getPaymentWithdrawalOrderDetailUuid({ uuid: this.uuid });
        this.info = data;
      } finally {
        this.SET_MODAL_LOADING_STATUS(false);
      }
    },
    async handleAdd() {
      try {
        const { data } = await this.apiMapping[this.type]({ ...this.notes, uuid: this.uuid });
        this.$message.success(this.$t('g_msgAddSuccess'));
      } catch (e) {
        this.$message.error(e.response ? e.response.data.message : e.message);
      } finally {
        this.$emit('update', { status: true });
        this.$refs.dialog.hide();
      }
    },
    handleCancel() {
      // if (status) {
      this.$refs.dialog.hide();
      // }
    },
    show() {
      this.notes = _.cloneDeep(this.initNote);
      this.$refs.dialog.show();
    },
  },
};
</script>
