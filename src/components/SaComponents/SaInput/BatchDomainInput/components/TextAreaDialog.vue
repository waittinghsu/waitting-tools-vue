<template>
  <base-dialog ref="dialog" :title="title" height-fixed width="40%">
    <template slot="dialog-body">
      <div class="my-2">
        <slot name="topTips">
          <span class="pa-1 blue--text text--darken-2">说明：</span><span>域名列表，一行一个域名</span>
        </slot>
      </div>
      <el-form ref="dataForm" :model="form" status-icon class="demo-ruleForm">
        <el-form-item prop="content" :rules="contentRule">
          <el-input v-model="form.content" :autosize="{ minRows: 8, maxRows: 10 }" type="textarea" :placeholder="placeholder" />
        </el-form-item>
      </el-form>
    </template>
    <div slot="dialog-footer" class="dialog-footer">
      <div class="d-flex flex-row justify-end">
        <el-button @click="handleCancel">
          取消
        </el-button>
        <el-button type="primary" @click="handleSubmit">
          确认
        </el-button>
      </div>
    </div>
  </base-dialog>
</template>

<script>
import BaseDialog from '@/components/Dialog';

export default {
  name: 'TextAreaDialog',
  components: { BaseDialog },
  props: {
    title: {
      type: String,
      default: '搜索内容',
    },
    contentRule: {
      type: Object,
      default: () => {},
    },
    placeholder: {
      type: String,
      default: '查询的域名,多个域名请换行！',
    },
  },
  data() {
    return {
      form: { content: '' },
    };
  },
  computed: {
  },
  methods: {
    show({ row: { inputValue } }) {
      this.form.content = inputValue.replaceAll(',', '\n');
      this.$refs.dialog.show();
    },
    init() {
      this.form = { content: '' };
    },
    hide() {
      this.$refs.dialog.hide();
    },
    handleCancel() {
      this.hide();
    },
    handleSubmit() {
      this.$refs.dataForm.validate((valid) => {
        if (valid) {
          const cts = [...new Set(this.form.content.trim().split(/\n/g).filter(Boolean).map((v) => v.trim()))];
          this.$emit('submit', cts);
          this.handleCancel();
        } else {
          this.$message.warning('请按格式输入内容！');
        }
      });
    },
    clearContent() {
      this.init();
    },
  },
};
</script>
