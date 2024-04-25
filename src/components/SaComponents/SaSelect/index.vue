<!--此元件解決 大筆下拉選單遇到的頁面渲染卡頓問題-->
<template>
  <el-select
    ref="saSelect" v-bind="$attrs"
    v-select-load-more="loadMore(rangeNumber)"
    :value="value"
    :filter-method="handleFilterMethod"
    @visible-change="handleVisibleChange"
    @input="change($event)"
    @clear="$emit('clear')"
  >
    <slot name="prepend-item" />
    <template v-for="option in options.slice(0, rangeNumber)">
      <slot name="item" :label="option[labelKey]" :value="option[valueKey]" :item="option">
        <el-option :label="option[labelKey]" :value="option[valueKey]" :disabled="option.disable" />
      </slot>
    </template>
    <slot name="append-item" />
  </el-select>
</template>

<script>
import { uniqBy } from 'lodash';
function pureDebounce(fn, delay = 1000) {
  let timer = null;
  function closure(...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  }
  return closure;
}

export default {
  name: 'SaInfinitySelect',
  directives: {
    'select-load-more': (el, binding) => {
      // 获取element-ui定义好的scroll盒子
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
        // console.log('origin', `${this.scrollHeight} - ${this.scrollTop} <= ${this.clientHeight}`, this.scrollHeight - this.scrollTop <= this.clientHeight);
        // console.log('math', `${Math.ceil(this.scrollHeight)} - ${Math.ceil(this.scrollTop)} <= ${this.clientHeight}`, this.scrollHeight - this.scrollTop <= this.clientHeight);
        const condition = Math.ceil(this.scrollHeight) - Math.ceil(this.scrollTop) <= this.clientHeight;
        if (condition) binding.value(); // directive 呼叫 loadMore
      }
      if (SELECT_WRAP_DOM) {
        SELECT_WRAP_DOM.addEventListener('scroll', selectCondition);
      }
    },
  },
  inheritAttrs: false,
  model: {
    prop: 'value', // 绑定的值，通过父组件传递
    event: 'input', // 自定义事件名
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    value: {
      type: [String,
        Number,
        Array,
        Boolean],
    },
    items: {
      type: [Array, Function], // 默认情况是：[{id:11, name:'aa'}]
      default: () => [{ id: 99999, name: '無匹配數據' }],
    },
    labelKey: {
      type: String,
      default: 'name',
    },
    valueKey: {
      type: String,
      default: 'id',
    },
    // 自定義過濾器 ex: items => items
    filterFunc: {
      type: Function,
      default: undefined,
    },
    // 過濾label 會有空值得資料
    clearEmptyLabel: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      rangeNumber: 10,
      tempValue: undefined,
      options: [],
    };
  },
  computed: {
    modelValue: {
      get() {
        return this.value;
      },
      set(newVal) {
        this.$emit('input', newVal);
      },
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

      // 自定義過濾器 方法
      if (Object.prototype.toString.call(this.filterFunc) === '[object Function]') {
        items = this.filterFunc({ items: this.getItems });
      }

      // const items = this.getItems;
      // 例外判斷 如果 items 內容物 非Object 則自動轉型 成 object 格式 ex: { id: value, name: value }
      const [first] = items;
      if (Object.prototype.toString.call(first) !== '[object Object]') {
        items = [...new Set(items)].filter(Boolean).map((value) => ({ id: value, name: value }));
      }

      // options 為 Object做基本的過濾重複值
      let options = uniqBy(items, this.valueKey);
      const textErrorKey = `option key有重值 ：${this.$attrs.placeholder || ''}`;
      const textDifference = `（原數量:${this.getItems.length} 過濾後：${options.length}）`;
      options.length !== items.length && (console.warn(`SA Select Component ${textErrorKey} ${textDifference}`));
      // options 為 Object 做可限制清除 label 為空的選項
      if (this.clearEmptyLabel) {
        options = options.filter((obj) => obj[this.labelKey]);
      }

      // *調整排序 － 當有選取狀態(value)時 將選取的項目提取到第一位
      if (this.value) {
        const findIndex = options.findIndex((item) => item[this.valueKey] === this.value);
        const [findItem] = options.splice(findIndex, 1);
        options.unshift(findItem);
      }

      return options;
    },

  },
  methods: {
    loadMore(n) {
      // n是默认初始展示的条数会在渲染的时候就可以获取,具体可以打log查看
      // element-ui下拉超过7条才会出滚动条,如果初始不出滚动条无法触发loadMore方法
      return () => (this.rangeNumber += 5); // 每次滚动到底部可以新增条数  可自定义
    },
    change(val) {
      this.$emit('input', val, this.$refs.saSelect);
    },
    handleFilterMethod: pureDebounce(function callBack(filterText) {
      if (filterText) {
        const filterResult = this.optionsFilter.filter((item) => `${item[this.labelKey]}`.toLowerCase().includes(filterText.toLowerCase()));
        this.options = [];
        filterResult.length > 0 && this.options.push(...filterResult);
        this.modelValue = filterText;
      } else {
        this.options = this.optionsFilter;
      }
    }, 500),
    /**
     * 下拉匡觸發事件
     * @param flag true:  ”展開“下拉options
     * @param flag false: “收起”下拉options
     */
    handleVisibleChange(flag) {
      this.options = this.optionsFilter;
      if (flag) {
        this.tempValue = this.value; // 開啟時先暫存目前的 select value
        this.handleFilterMethod();
      } else {
        /**
         * 檢查不前的value 是否存在 items 裏面
         * @type {Boolean} true: 表示目前的值選中狀態 false: 表示現在欄位為filter狀態
         */
        const isExist = this.optionsFilter.find((item) => item[this.valueKey] === this.value);
        if (!isExist) {
          // 回復搜尋前的狀態 並刷新下拉表單
          this.modelValue = this.tempValue;
        }
        // 關閉下拉選單 清除暫存  將下拉填回全部選項
        this.tempValue = undefined;
        this.handleFilterMethod();
        // console.log(this.tempValue);
      }
    },
  },
};
</script>
