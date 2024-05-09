<!--此元件解決 大筆下拉選單遇到的頁面渲染卡頓問題-->
<template>
  <el-select
    ref="saSelect" v-bind="$attrs"
    v-select-load-more="loadMore(rangeNumber)"
    :value="value"
    :filter-method="handleFilterMethod"
    :multiple="multiple"
    :filterable="filterable"
    @visible-change="handleVisibleChange"
    @input="handleInput($event)"
    @change="handleChange($event)"
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
import { pureDebounce } from '@/utils';

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
    filterable: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      rangeNumber: 10,
      tempValue: undefined,
      options: [],
      isFilter: false,
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
    /**
     * items 本身是function 的話 就執行並解構
     * @returns {*[]}
     */
    getItems() {
      let output = [];
      if (Object.prototype.toString.call(this.items) === '[object Function]') {
        output = [...this.items()];
      } else {
        output = [...this.items];
      }
      return output;
    },
    /**
     * 重組過濾選單列表
     * 1. 如果 filterFunc 有定義 直接執行 filterFunc()
     * 2. 判斷來源 items  是 string[] or object[]
     *   a. string[] 去重複選項 並且轉換成 object[]
     *   b  object[] 資料去重複
     * 3. clearEmptyLabel 可以將顯示名稱為空的移除
     * @returns {object[]}
     */
    optionsFilter() {
      let options = [];
      // =========================== 自定義過濾器 方法 ===========================
      const items = Object.prototype.toString.call(this.filterFunc) === '[object Function]' ? this.filterFunc({ items: this.getItems }) : this.getItems;
      // =========================== 建立 options 去重複 ===========================
      const [first] = items;
      if (Object.prototype.toString.call(first) !== '[object Object]') {
        /**
         * 判斷 items內容物 string[] or number[]
         * 則自動轉型 成 object[] 格式 ex: { id: key, name: value }
         */
        options = [...new Set(items)].filter(Boolean).map((value) => ({ id: value, name: value }));
      } else {
        // =========================== options 為 Object做基本的過濾重複值 ===========================
        options = uniqBy(items, this.valueKey);
      }
      // =========================== 去重警告提示 ===========================
      const textErrorKey = `option key有重值 ：${this.$attrs.placeholder || ''}`;
      const textDifference = `（原數量:${items.length} 過濾後：${options.length}）`;
      // eslint-disable-next-line no-console
      options.length !== items.length && (console.warn(`SA Select Component ${textErrorKey} ${textDifference}`));
      // =========================== options 為 Object 做可限制清除 label 為空的選項 ===========================
      if (this.clearEmptyLabel) {
        options = options.filter((obj) => obj[this.labelKey]);
      }
      /**
       * 因为懒载入关系, 被选择的选项可能还未建立dom，透过方法把被选的项目往上提升
       * @param {array} arr
       * @param {number|String|Array} target 要移動的目標
       * @returns {object[]}
       */
      function moveItemToTop(arr, target) {
        if (Object.prototype.toString.call(target) === '[object Array]') {
          const targetSet = new Set(target);
          return arr.reduce((acc, item) => ((targetSet.has(item.id)) ? [item, ...acc] : [...acc, item]), []);
        }
        return arr.reduce((acc, item) => ((item.id === target) ? [item, ...acc] : [...acc, item]), []);
      }
      // =========================== 調整排序 － 當有選取狀態(value)時 將選取的項目提取到第一位 ===========================
      if ((!this.multiple && this.modelValue) || (this.multiple && this.modelValue.length > 0)) {
        options = moveItemToTop(options, this.modelValue);
      }
      return options;
    },
  },
  watch: {
    value: {
      handler(n) {
        // 非 multiple 且 未開啟搜尋的狀況下 modelValue 有預設值 更新下拉選單
        !this.multiple && !this.isFilter && this.handleFilterMethod();
      },
      immediate: true,
    },
    items: {
      handler() {
        // 選項來源異動時 更新選項
        this.handleFilterMethod();
      },
      immediate: true,
    },
  },
  methods: {
    /**
     * directives 綁定監聽事件 addEventListener('scroll')  當某條件成立 會出發 loadMore
     * @param {Number} n
     * @returns {function(): number}
     */
    loadMore(n) {
      // n是默认初始展示的条数会在渲染的时候就可以获取,具体可以打log查看
      // element-ui下拉超过7条才会出滚动条,如果初始不出滚动条无法触发loadMore方法
      return () => (this.rangeNumber += 5); // 每次滚动到底部可以新增条数  可自定义
    },
    handleFilterMethod: pureDebounce(function callBack(filterText) {
      // 文字搜索方法
      function filterMethod(mapperText = '', filterText = '') {
        return `${mapperText}`.toLowerCase().includes(`${filterText}`.toLowerCase());
      }
      if (filterText) {
        const filterResult = this.optionsFilter.filter((item) => filterMethod(item[this.labelKey], filterText));
        this.options = [];
        // 是否有搜寻到相符资料
        const hasFilter = filterResult.length > 0;
        hasFilter && this.options.push(...filterResult);
        // 多選的時候更新選項列表 必須找到已被選的選項 丟在後排
        if (this.multiple && hasFilter) {
          const currentSelected = this.optionsFilter.slice(0, this.modelValue.length) // 被選的選項
            .filter((item) => !filterMethod(item[this.labelKey], filterText)); // 不可以在 filterResult 裏面
          this.options.push(...currentSelected);
        }
        // 「單筆」下拉 正常顯示搜索文字, 將搜索文字覆蓋在 modelValue
        !this.multiple && (this.modelValue = filterText);
      } else {
        this.options = this.optionsFilter;
      }
    }, 100),
    /**
     * 下拉匡觸發事件
     * @param flag true:  ”展開“下拉options
     * @param flag false: “收起”下拉options
     */
    handleVisibleChange(flag) {
      this.isFilter = flag;
      this.options = this.optionsFilter;
      if (flag) {
        this.rangeNumber = 10;
        this.tempValue = this.value; // 開啟時先暫存目前的 select value
        this.handleFilterMethod();
      } else {
        // 「單選」時 才回復搜尋前的狀態 並刷新下拉表單
        if (!this.multiple) {
          /**
           * 檢查目前的value 是否存在 items 裏面
           * @type {Boolean} true: 表示目前的值選中狀態 false: 表示現在欄位為filter狀態
           */
          const isExist = this.optionsFilter.find((item) => item[this.valueKey] === this.value);
          isExist || (this.modelValue = this.tempValue);
        }
        // 關閉下拉選單 清除暫存  將下拉填回全部選項
        this.tempValue = undefined;
        // this.options = this.optionsFilter;
      }
    },
    handleInput(val) {
      this.$emit('input', val, this.$refs.saSelect);
    },
    handleChange(val) {
      this.$emit('change', val, this.$refs.saSelect);
    },
  },
};
</script>
