<template>
  <el-dialog
    v-loading.fullscreen.lock="loadingFullScreen"
    :title="title"
    :top="top"
    :visible.sync="dialogVisible"
    :before-close="hide"
    :close-on-click-modal="closeOnClickModal"
    :close-on-press-escape="closeOnPressEscape"
    :modal-append-to-body="modalAppendToBody"
    :append-to-body="appendToBody"
    :show-close="showClose"
    :width="width"
    custom-class="dialog-add-edit"
    @closed="afterClose"
  >
    <div v-loading="loadingDialog" :class="['dialog-wrap', { 'dialog-wrap--height-fixed': heightFixed }]">
      <div v-if="dialogBodyVisible" :class="['dialog-body', { 'dialog-body--height-fixed': heightFixed }]">
        <slot name="dialog-body" />
      </div>
      <div v-if="$slots['dialog-footer']" class="dialog-footer">
        <slot name="dialog-footer" />
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    title: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: '50%',
    },
    top: {
      type: String,
      default: '15vh',
    },
    heightFixed: {
      type: Boolean,
      default: false,
    },
    beforeClose: {
      type: Function,
      default: () => () => {},
    },
    closeOnClickModal: {
      type: Boolean,
      default: false,
    },
    closeOnPressEscape: {
      type: Boolean,
      default: false,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    modalAppendToBody: {
      type: Boolean,
      default: false,
    },
    appendToBody: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loadingFullScreen: false,
      loadingDialog: false,
      dialogVisible: false,
      dialogBodyVisible: false,
    };
  },
  methods: {
    show() {
      this.dialogBodyVisible = true;
      this.dialogVisible = true;
    },
    afterClose() {
      this.dialogBodyVisible = false;
      this.$emit('closed');
    },
    hide() {
      this.dialogVisible = false;
      this.beforeClose();
    },
    toggleLoadingDialog() {
      this.loadingDialog = !this.loadingDialog;
    },
    toggleLoadingFullScreen() {
      this.loadingFullScreen = !this.loadingFullScreen;
    },
    afterSubmit() {
      this.loadingFullScreen = false;
      this.hide();
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog-wrap {
  padding-top: 10px;

  // &--height-fixed {
  //   max-height: 60vh;
  // }
}
.dialog-body {
  &--height-fixed {
    overflow: auto;
    max-height: 60vh;
  }
}
.dialog-footer {
  text-align: center;
  padding: 20px 0 0 0;
}
</style>
