<template lang="pug">
  .collapse-box(:class="customClass")
    div.custom-area
      slot(name="customArea")
    .title {{ title }}
      span.custom-title
        slot(name="customTitle")
    el-button.collapse-btn(v-if="isShowBtn" type="primary" size="mini" round @click="trigger")
      i(:class="btnIcon")
      span {{ btnText }}
    .content
      el-row
        slot(name="light")
        span.dark(:class="{active: this.status}")
          slot
          slot(name="dark")
</template>

<script>
/**
 * props說明
 * title: 標題名稱
 * isOpen: 開闔狀態，預設false
 * className: 提供自定義 class name
 * isShowBtn: 是否顯示開闔按鈕，預設true
 * slot說明
 * default，會依據 isOpen 狀態，顯示/隱藏內容
 * 提供具名插槽
 * light: 無視 isOpen 狀態，永遠顯示內容
 * dark: 同 default 效果
 */
export default {
  name: 'CollapseBox',
  props: {
    title: {
      type: String,
      required: true,
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
    className: {
      type: String,
      default: '',
    },
    isShowBtn: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      status: false,
    };
  },
  computed: {
    customClass() {
      const list = [];
      !!this.className && list.push(this.className);
      return list;
    },
    btnIcon() {
      return this.status ? 'el-icon-remove' : 'el-icon-circle-plus';
    },
    btnText() {
      return this.status ? this.$t('collapseAll') : this.$t('expandAll');
    },
  },
  created() {
    this.status = this.isOpen;
  },
  methods: {
    trigger() {
      this.status = !this.status;
    },
  },
};
</script>

<style lang="scss" scoped>
.collapse-box {
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  .title {
    font-weight: 500;
    font-size: 14px;
    color: #303133;
    padding: 0 10px;
    background-color: #fff;
    display: inline-block;
    transform: translate(10px, -10px);
    .custom-title {
      margin-left: 48px;
    }
  }
  .collapse-btn {
    border-radius: 5px;
    transform: translate(10px, -14px);
  }
  .custom-area {
    position: absolute;
    right: 50px;
    transform: translateY(-14px);
  }
  .content {
    margin: 0px 20px 20px;
    .dark {
      display: none;
      &.active {
        display: block;
      }
    }
  }
}
</style>
