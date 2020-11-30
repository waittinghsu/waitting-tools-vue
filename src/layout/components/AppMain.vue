<template lang="pug">
  section.app-main
    transition(name="fade-transform" mode="out-in")
      router-view(ref="router" :key="key")
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  // @todo 此功能提供注入 讓某層子函式獲得方法 並在語系切換時作動 # 列舉 FETCH_DATA INIT_OPTION_LIST (可擴充)
  provide() {
    return {
      switchLangEvent(doFunction = []) {
        doFunction.forEach(functionName => {
          !(typeof this[functionName] === 'function') || this[functionName]();
        });
      },
      FETCH_DATA: 'fetchData',
      INIT_OPTION_LIST: 'initOptionList',
    };
  },
  name: 'AppMain',
  computed: {
    ...mapGetters({ locale: 'i18n/locale' }),
    key() {
      return this.$route.path;
    },
  },
  watch: {
    locale: {
      handler(newVal) {
        this.currentComponentFetchFunction(this.$refs.router);
        this.deepSearchComponentFetchFunction(this.$refs.router);
      },
    },
  },
  methods: {
    /**
     * 當前元件檢測
     * */
    currentComponentFetchFunction(refsComponent) {
      // console.log(`path:${this.key}`);
      // console.log(`===== level 1 ===== name: (${refsComponent.$options.name}) $children.length: (${refsComponent.$children.length}),`);
      this.reloadApi(refsComponent);
    },
    /**
     * 遞回深度搜尋所有元件
     * */
    deepSearchComponentFetchFunction(refsComponent) {
      if (refsComponent.$children.length !== 0) {
        refsComponent.$children.forEach(child => {
          this.reloadApi(child);
          if (child.$children.length !== 0) {
            this.deepSearchComponentFetchFunction(child);
          }
        });
      }
      return refsComponent;
    },
    /**
     * 重新刷新api
     * 判斷規則
     * 1. component 必須有 name
     * 2. methods array 非空陣列
     * 3. 下層 component 有注入 switchLangEvent()
     * */
    reloadApi(refsComponent) {
      if (refsComponent.$options.name && refsComponent.$options.methods && typeof refsComponent.switchLangEvent === 'function') {
        console.log('refsComponent', refsComponent.$options);
        const doFunction = [];
        !refsComponent.FETCH_DATA || doFunction.push(refsComponent.FETCH_DATA);
        !refsComponent.INIT_OPTION_LIST || doFunction.push(refsComponent.INIT_OPTION_LIST);
        refsComponent.switchLangEvent(doFunction);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.app-main {
  position: relative;
  width: 100%;
  overflow: auto;
  background-color: #f5f5f5;
  height: calc(100vh - #{to-rem(102px)});
}

.fixed-header + .app-main {
  padding-top: 50px;
}

.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
