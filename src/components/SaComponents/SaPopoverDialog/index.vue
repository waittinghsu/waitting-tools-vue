<template>
  <el-popover
    v-model="visible"
    :width="width"
    placement="top"
    :trigger="trigger"
    v-bind="$attrs"
    :title="title"
    :popper-class="popoverClass"
    :disabled="disabled"
  >
    <slot name="content">
      <div v-if="confirmText" class="sa-popper-dialog__icon-tips">
        <i class="el-icon-question titleIcon" /> {{ confirmText }}
      </div>
      <div v-if="commentEnable" class="sa-popper-dialog__input-desc ">
        <span class="d-flex font-normal mb-1 red--text text--accent-1">{{ inputDescription }}</span>
        <el-input v-model="comment" type="textarea" resize="none" />
      </div>
    </slot>
    <slot name="footer">
      <el-row class="sa-popper-dialog__footer" :gutter="10">
        <el-col :span="12">
          <el-button class="w-100" type="primary" size="mini" @click="confirmExec">
            <svg-icon icon-class="true" class="white--text" size="14" />
            确定
          </el-button>
        </el-col>
        <el-col :span="12">
          <el-button class="w-100" type="info" size="mini" @click="cancelExec">
            <svg-icon icon-class="false" class="white--text" size="14" />
            取消
          </el-button>
        </el-col>
      </el-row>
      <div class="" />
    </slot>
    <span slot="reference">
      <slot name="reference" />
    </span>
  </el-popover>
</template>

<script>

// slot content 可自定义
export default {
  name: 'SaPopoverDialog',
  inheritAttrs: false,
  props: {
    trigger: {
      type: String,
      default: 'click',
    },
    popoverClass: { // 弹出窗口class
      type: String,
      default: 'sa-popper-dialog',
    },
    width: { // 默认宽度
      type: Number,
      default: 240,
    },
    title: {
      type: String,
      default: '提示', // 默认
    },
    commentEnable: {
      type: Boolean,
      default: false,
    },
    // tip icon 的文字訊息
    confirmText: {
      type: String,
      default: '您确定要执行吗？',
    },
    // input上方的描述文字
    inputDescription: {
      type: String,
      default: '原因:',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      visible: false, // 默认不展示
      comment: '',
    };
  },
  computed: {},
  methods: {
    cancelExec() {
      this.visible = false;
      // this.cancel && this.cancel();
      this.$emit('cancel');
    },
    confirmExec() {
      this.visible = false;
      const { comment } = this;
      this.$emit('confirm', { comment });
      // this.confirm && this.confirm();
    },
  },
};
</script>

<style lang="scss">
  .sa-popper-dialog {
    padding: 0;
    background: linear-gradient(to bottom right, #f2f7f5 0%, #FFFDE7 100%)!important;
    border: 1px solid #d8d8c4;
    box-shadow: 12px 8px 30px 0 rgba(0, 0, 0, 0.26);
    border-radius: 8px;
    .el-popover__title{
      //background: #E8F5E9;
      background: linear-gradient(to bottom right, #C8E6C9 0%, #E8F5E9 100%);
      font-weight: 600;
      padding: 12px 12px 8px 12px;
      border-bottom: 1px solid #BDBDBD;
      border-radius: 8px 8px 0 0;
    }
    &__icon-tips{
      margin: 0 0 8px 0;
      padding: 0 8px 0 8px;
      .titleIcon{
        color: #f90;
        margin-right: 5px;
      }
    }
    &__input-desc {
      margin: 0 0 8px 0;
      padding: 0 8px 0 8px;
    }
    &__footer{
      margin: 0 0 8px 0;
      padding: 0 8px 0 8px;
    }
    .popper__arrow:after {
      //border-bottom-color: #f2f7f5!important;
      border-bottom-color: #C8E6C9!important;
    }

    &.theme-blue {
      background: linear-gradient(to bottom right, #E8EAF6 0%, #fff 100%)!important;
      .el-popover__title {
        background: linear-gradient(to bottom right, #64B5F6 0%, #BBDEFB 100%)!important;
      }
      .popper__arrow:after {
        border-bottom-color: #64B5F6!important;
      }
    }
    &.theme-teal {
      background: linear-gradient(to bottom right, #E0F2F1 0%, #fff 100%)!important;
      .el-popover__title {
        background: linear-gradient(to bottom right, #32ccbc 0%, #B2EBF2 100%);
      }
      .popper__arrow:after {
        border-bottom-color: #32ccbc!important;
      }
    }
    &.theme-yellow {
      //background: #fffbeb!important;
      background: linear-gradient(to bottom right, #fef3c7 0%, #fff 100%)!important;
      .el-popover__title {
        background: linear-gradient(to bottom right, #fbbf24 0%, #fde68a 100%);
      }
      .popper__arrow:after {
        border-bottom-color: #fbbf24
      }
    }
    &.theme-red {
      //background: #fffbeb!important;
      background: linear-gradient(to bottom right, #FFEBEE 0%, #fff 100%)!important;
      .el-popover__title {
        background: linear-gradient(to bottom right, #E57373 0%, #FFCDD2 100%);
      }
      .popper__arrow:after {
        border-bottom-color: #E57373
      }
    }
  }

  .sa-popper-dialog-theme1{
    background: #E8EAF6;
    border: 1px solid transparent;
    padding: 0;
    box-shadow: 12px 8px 30px 0 rgba(0, 0, 0, 0.26);
    border-radius: 8px;
    .titleIcon{
      color: #f90;
      margin-right: 5px;
    }
    .el-popover__title{
      font-weight: 600;
      padding: 12px 12px 8px 12px;
      background: #BBDEFB;
      border-bottom: 1px solid #BDBDBD;
      border-radius: 8px 8px 0 0;
    }
    .popper__arrow:after {
      border-bottom-color: #BBDEFB!important;
    }
  }
</style>
