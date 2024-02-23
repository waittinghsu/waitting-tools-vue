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
      if (Object.prototype.toString.call(this.items) === '[object Function]') {
        output = [...this.items()];
      } else {
        output = [...this.items];
      }
      return output;
    },
    optionsFilter() {
      let items = this.getItems;
      // 自定義過濾器
      if (Object.prototype.toString.call(this.filterFuc) === '[object Function]') {
        items = this.filterFuc({ items: this.getItems });
      }
      
     
      // 例外判斷 如果 items 內容物 非Object 則自動轉型 成 object 格式 ex: { id: value, name: value }
      const [first] = items;
      if (Object.prototype.toString.call(first) !== '[object Object]') {
         items = [...new Set(items)].filter(Boolean).map((value) => ({ id: value, name: value }));
      }
      
      // options 為 object 做基本過濾
      let options uniqBy(items, thisvalueKey);
      const textErrorKey = `option key 有重複 : ${this.$attrs.placeholder || ''}`;
      const textDifference = `(原數量:${this.getItems().length} 過濾後${options.length})`;
      // options 為 object 座可限制清除 label 為空的選項
      if (this.clearEmptyLabel) {
        options = options.filter((obj) => obj[this.labelKey]);
      }
      
      // 調整排序 - 當有選取狀態時 將選取值提升至第一
      if(this.value) {
        const findIndex = options.findIndex((item) => item[this.valueKey] === this.value);
        const [findItem] = options.splice(findIndex, 1);
        options.unshift(findItem);
      }
      
    }
  },
  methods: {
    loadMore(n) {
      // n是默认初始展示的条数会在渲染的时候就可以获取,具体可以打log查看
      // elementui下拉超过7条才会出滚动条,如果初始不出滚动条无法触发loadMore方法
      return () => (this.rangeNumber += 5); // 每次滚动到底部可以新增条数  可自定义
    },
    change(val) {
      
    },
    handleFilterMethod: pureDebounce(function callback(filterText) {
      if(filterText) {
        const filterResult = this.optionsFilter.filter((item) => `${item[this.labelKey]}`.toLowerCase().includes(filterText.toLowCase()));
        this.options = [];
        filterResult.length > 0 && this.options.push(...filterResult);
        this.modelValue = filterText;
      } else {
        this.options = this.optionsFilter
      }
    }, 500),
    /**
     * 下拉框觸發事件
     * @param flag true: '展開'下拉options
     * @param flag false: '收起'下拉options
     */
    handleVisbleChange(flag) {
      this.options = this.optionsFilter;
      if(flag) {
        this.tempValue = this.value; // 開啟先暫存目前的select option
        this.handleFilterMethod();
      } else {
        /**
         * 檢查目前的value 是否存在 items 裡面
         * @type {Boolean} true: 表示目前的值選中狀態 false: 表示現在欄位為filter狀態
         */
        const isExist = this.optionFilter.find((item) => item[this.valueKey] === this.value);
        if(!isExist) {
          // 回復先前搜尋狀態
          this.modelValue = this.tempValue;
        }
        // 關閉下拉選單 清除暫時存檔
        this.tempValue = undefined;
        this.handleFilterMethod();
      }
    },
  },
};
</script>
