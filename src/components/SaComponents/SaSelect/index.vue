<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <el-select
    ref="saSelect"
    v-select-load-more="loadMore(rengeNumber)"
    :value="value"
    :filter-method="handleFilterChange"         
    @visible-change="handleVisibleChange"         
    @input="change($event)"         
    @clear="$emit"         
  >
    <slot name="prepend-item" />
    <template v-for="option in options.slice(0, rangerNumber)">
      <slot name="item" :label="option[labelKey]" :value="option[valueKey]" :item="option">
        <el-option :label="option[labelKey]" :value="option[valueKey]" />
      </slot>
    </template>
    <slot name="append-item" />
  </el-select>
</template>

<script>
import { uniqBy } from 'lodash';
import { pureDebounce } from '@/utils';
  
export default {
  name: 'SaInfinitySelect',
  directives: {
    'select-load-more': (el, binding) => {
      //  get element-ui defined scrollbox
      const SELECT_WRAP_DOM = el.querySelector('.el-select-dropdown .el-select-dropdown__wrap');
      function selectCondition() {
         /**
           * scrollHeight 获取元素内容高度(只读)
           * scrollTop 获取或者设置元素的偏移值,
           *  常用于:计算滚动条的位置, 当一个元素的容器没有产生垂直方向的滚动条, 那它的scrollTop的值默认为0.
           * clientHeight 读取元素的可见高度(只读)
           * 如果元素滚动到底, 下面等式返回true, 没有则返回false:
           * ele.scrollHeight - ele.scrollTop === ele.clientHeight;
           */
        const condition = Math.ceil(this.scrollHeight) - Math.ceil(this.scrollTop) <= this.clientHeight;
        if(condition) binding.value();
      }
      if(SELECT_WRAP_DOM) {
        SELECT_WRAP_DOM.addEventListener('scroll', selectCondition);
      }
    }
  },
  inheritAttrs: true,
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: [String, Number, Array, Boolean],
    items: {
      type: [Array, Function], //
      default: () => [{id: 99999, name: 'Not Content'}],
    },
    labelKey: {
      type: String,
      default: 'name',
    },
    ValueKey: {
      type: String,
      default: 'id',
    },
    filterFuc: {
      type: Function,
      default: undefined,
    },
    clearEmptyLabel: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      rengerNumber: 10,
      tempValue: undefined,
      options: [],
    };
  },
  computed: {
    medelValue: {
      get() {
        retuen this.value;
      },
      set(newVal) {
        this.$emit('input', newVal);
      }
    },
    getItems() {
      let output = [];
      if(Object.prototype.toString.call(this.items) === '[object Function]') {
        output = [...this.items()];
      } else {
        output = [...this.items];
      }
      return output;
    },
    optionsFilter() {
      
    }
  },
  methods: {
    loadMore(n) {
      // n是默认初始展示的条数会在渲染的时候就可以获取,具体可以打log查看
      // elementui下拉超过7条才会出滚动条,如果初始不出滚动条无法触发loadMore方法
      return () => (this.rangeNumber += 5); // 每次滚动到底部可以新增条数  可自定义
    },
  }
};
</script>
