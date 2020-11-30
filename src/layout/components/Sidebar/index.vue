<template lang="pug">
  .side__wrap
    .side__container
      el-menu.side__menu__list(
        v-if="showSideMenu"
        :default-active="activeMenu"
        :collapse="isCollapse"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      )
        sidebar-item(
          v-for="node in sidebarRoutes"
          :key="node.name"
          :item="node"
          :base-path="node.path"
        )
      hamburger.hamburger-container(
        v-if="showSideMenu"
        :is-active="sidebar.opened"
        @toggleClick="toggleSideBar"
      )
</template>

<script>
import { mapGetters } from 'vuex';
import SidebarItem from './SidebarItem';
import Hamburger from '@/components/Hamburger';

export default {
  components: { SidebarItem, Hamburger },
  computed: {
    ...mapGetters('app', ['sidebar']),
    ...mapGetters('permission', ['sidebarRoutes', 'selectedRoutes']),
    activeMenu() {
      const route = this.$route;
      const { meta, name } = route;
      // console.log('omega', this.$route, meta?.activeMenu, name);
      // if set router name, the sidebar will highlight the router name you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }

      return name;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
    showSideMenu() {
      return this.sidebar.isShow;
    },
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar');
    },
  },
};
</script>

<style lang="scss" scoped>
.side__wrap {
  height: calc(100vh - #{to-rem(158px)});
  background-color: $aside-bg;
}

.side__container {
  height: 100%;
}

.el-menu {
  height: 100%;
  background-color: $aside-bg;
  color: $aside-text;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
