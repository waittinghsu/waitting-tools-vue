<template lang="pug">
  .layout__wrap
    HeaderNav
    el-container
      sidebar
      app-main
</template>

<script>
import { Navbar, Sidebar, AppMain, HeaderNav } from './components';
import ResizeMixin from './mixin/ResizeHandler';

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    HeaderNav,
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    device() {
      return this.$store.state.app.device;
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader;
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile',
      };
    },
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false });
    },
  },
};
</script>
