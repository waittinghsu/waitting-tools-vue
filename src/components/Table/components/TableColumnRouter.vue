<template>
  <div>
    <router-link :to="targetPath">
      <el-link type="primary">{{ cellValue }}</el-link>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    routerTo: {
      type: String,
      default: 'dashboard',
    },
    cellValue: {
      type: String,
      default: '',
    },
    params: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    targetPath() {
      return {
        name: this.routerTo,
        params: this.params,
      };
    },
  },
};
</script>
