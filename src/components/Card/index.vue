<template>
  <el-card>
    <div slot="header" class="card-header">
      <div class="card-header__left">
        <i v-if="headerIcon" :class="['icon', 'mr-6', headerIcon]" />
        <svg-icon v-else-if="svgIcon" class="icon mr-6" width="22" height="22" :icon-class="svgIcon" />
        <span v-if="headerTitle" class="title">{{ headerTitle }}</span>
      </div>
      <div class="card-header__right">
        <div class="header-buttons">
          <el-button
            v-if="closeable"
            :size="size"
            type="primary"
            :icon="isOpen ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"
            @click="toggleCardBody"
          />
          <slot v-else name="header-buttons" />
        </div>
      </div>
    </div>
    <div v-if="isOpen" class="card-body" :class="{ 'card-body--open': isOpen }">
      <div class="toolbar">
        <slot name="toolbar" />
      </div>
      <slot />
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    headerTitle: {
      type: String,
      default: '',
    },
    headerIcon: {
      type: String,
      default: '',
    },
    svgIcon: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    closeable: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isOpen: true,
    };
  },
  methods: {
    toggleCardBody() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.el-card {
  margin: 20px;
}
::v-deep .el-card__body {
  padding: 0;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $collapsible-panel-header-text;
  background-color: $collapsible-panel-header-bg;
  padding: 0 20px;
  min-height: 56px;

  .icon,
  .card-title {
    margin-left: 8px;
    font-size: 22px;
  }
  .toolbar {
    padding: 8px;
  }
}
.card-body {
  &--open {
    padding: 20px;
  }
}
</style>
