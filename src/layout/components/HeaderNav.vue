<template lang="pug">
  el-container
    el-header.header__wrap
      h3(@click="backHome()") HWAO
      div.right-menu
        el-select.language-list(:value="locale" @change='SET_LOCALE')
          el-option(v-for='item in langItem' :key='item.key' :label='item.value' :value='item.key')
        el-dropdown.user-info-container(trigger="click")
          div.avatar-wrapper
            span {{ username || '' }}
            i.el-icon-caret-bottom
          el-dropdown-menu(slot="dropdown")
            el-dropdown-item(@click.native="logout")
              span {{ $t('logout') }}
    el-menu
      el-menu-item(
        v-for="functionModule in accessedRoutes"
        :key="functionModule.path"
        @click="goPage(functionModule)"
        :class="{ active__bg: isActived === functionModule.meta.title }"
      ) {{ $t(functionModule.meta.title) }}
</template>

<script>
import store from '@/store';
import { mapMutations, mapActions, mapGetters } from 'vuex';

export default {
  name: 'HeaderNav',
  data() {
    return {
      isActived: '',
    };
  },
  computed: {
    ...mapGetters({
      username: 'user/name',
      locale: 'i18n/locale',
      langItem: 'i18n/langItem',
      accessedRoutes: 'permission/accessedRoutes',
    }),
  },
  watch: {
    $route: {
      handler(to, from) {
        // 從url直接進入, 選定Module
        this.setSelectedModule(to);
      },
      immediate: true,
    },
  },
  methods: {
    ...mapMutations('i18n', ['SET_LOCALE']),
    ...mapActions({
      LOGOUT: 'user/logout',
    }),
    // 選定Module
    setSelectedModule(to) {
      const urls = to.path.split('/');
      const parentUrl = `/${urls[1].toLowerCase()}`;
      const toModule = this.accessedRoutes.find(item => item.path === parentUrl);
      if (toModule) {
        this.goPage(toModule);
      }
    },
    // 建立選單
    goPage({ path, meta: { title }, hiddenSidebar = false, redirect = '/' }) {
      this.isActived = title;
      store.dispatch('permission/switchSidebarRoutes', path);
      if (hiddenSidebar) {
        this.$router.push({ path: redirect });
      }
    },
    backHome() {
      store.dispatch('app/setSidebarIsShow', false);
      this.$router.push({ name: 'dashboard' });
    },
    logout() {
      this.LOGOUT().then(() => {
        this.$router.push('/login');
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.header__wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: to-rem(46px);
  background: $header-bg;
  color: $light;

  h3 {
    cursor: pointer;
  }
}

.el-menu {
  @include breakpoint($pad, true) {
    display: flex;
  }

  background: $menu-bg;
  border-right: initial;
}

.el-menu-item {
  color: $light;
  font-weight: bold;

  &:hover {
    background: $menu-hover-bg;
  }
}

.active__bg {
  background: $active-bg;
}

.language-list {
  width: 120px;
  margin-right: 24px;
}

.user-info-container {
  cursor: pointer;
  color: #fff;
}
</style>
