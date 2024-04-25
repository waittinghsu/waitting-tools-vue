<template>
  <div class="saTransfer">
    <Transfer
      v-model="model"
      :class="getTransferClass"
      :data="filterData"
      :titles="titles"
      :button-texts="buttonTexts"
      :filter-placeholder="filterPlaceholder"
      :filter-method="filterMethod"
      :left-default-checked="leftDefaultChecked"
      :right-default-checked="rightDefaultChecked"
      :render-content="renderContent"
      :value="value"
      :format="format"
      :filterable="filterable"
      :props="props"
      :target-order="targetOrder"
      @left-check-change="handleLeftCheckChange"
      @right-check-change="handleRightCheckChange"
      @input="handleInput"
      @change="handleChange"
    >
      <template v-if="$scopedSlots.default" #default="{option}">
        <slot :option="option" />
      </template>
      <template v-if="$slots['left-footer']" #left-footer>
        <slot name="left-footer" />
      </template>
      <template v-if="$slots['right-footer']" #right-footer>
        <slot name="right-footer" />
      </template>
    </Transfer>
  </div>
</template>
<script>
import { uniqBy } from 'lodash';
import Transfer from '@/components/SaComponent/SaTransfer/components/main.vue';

export default {
  name: 'SaTransfer',
  components: { Transfer },
  inheritAttrs: false,
  model: {
    prop: 'modelValue',
    event: 'input',
  },
  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
    data: {
      type: [Array, Function],
      default() {
        return [];
      },
    },
    titles: {
      type: Array,
      default() {
        return ['所有', '选中'];
      },
    },
    // 左右穿梭 按鈕上的文字
    buttonTexts: {
      type: Array,
      default() {
        return [];
      },
    },
    filterPlaceholder: {
      type: String,
      default: '',
    },
    filterMethod: {
      type: Function,
      default: undefined,
    },
    leftDefaultChecked: {
      type: Array,
      default() {
        return [];
      },
    },
    rightDefaultChecked: {
      type: Array,
      default() {
        return [];
      },
    },
    renderContent: {
      type: Function,
      default: undefined,
    },
    value: {
      type: Array,
      default() {
        return [];
      },
    },
    format: {
      type: Object,
      default() {
        return {};
      },
    },
    filterable: Boolean,
    props: {
      type: Object,
      default() {
        return {
          label: 'name',
          key: 'id',
          disabled: 'disabled',
        };
      },
    },
    targetOrder: {
      type: String,
      default: 'original',
    },
    size: {
      type: String,
      default: '',
    },
  },
  data() {
    return {};
  },
  computed: {
    model: {
      get() {
        return this.modelValue;
      },
      set(newVal) {
        this.$emit('input', newVal);
      },
    },
    getTransferClass() {
      const customerClass = [];
      // 規則１ 控制大小按鈕
      switch (this.size) {
        case 'small':
          customerClass.push('transfer-half d-flex flex-row align-center');
          break;
        default: break;
      }

      return customerClass;
    },
    getItems() {
      let output = [];
      if (Object.prototype.toString.call(this.data) === '[object Function]') {
        output = [...this.data()];
      } else {
        output = [...this.data];
      }
      return output;
    },
    filterData() {
      let items = this.getItems;
      const { props } = this;
      if (!Object.prototype.hasOwnProperty.call(props, 'key') || !Object.prototype.hasOwnProperty.call(props, 'label')) {
        this.$message.error('组建参数有遗漏 请检查');
        return [];
      }
      const { label, key } = this.props;
      // console.log(key, label);
      // 例外判斷 如果 items 內容物 非Object 則自動轉型 成 object 格式 ex: { id: value, name: value }
      const [first] = items;
      if (Object.prototype.toString.call(first) !== '[object Object]') {
        items = [...new Set(items)].filter(Boolean).map((value) => ({ [key]: value, [label]: value }));
      }

      let options = uniqBy(items, key);
      const textErrorKey = `option key有重值 ：${this.$attrs.placeholder || ''}`;
      const textDifference = `（原數量:${this.getItems.length} 過濾後：${options.length}）`;
      options.length !== items.length && (console.warn(`SA Select Component ${textErrorKey} ${textDifference}`));
      // options 為 Object 做可限制清除 label 為空的選項
      if (this.clearEmptyLabel) {
        options = options.filter((obj) => obj[label]);
      }

      return options;
    },
  },
  methods: {
    handleLeftCheckChange(val, movedKeys) {
      this.$emit('left-check-change', val, movedKeys);
    },
    handleRightCheckChange(val, movedKeys) {
      this.$emit('right-check-change', val, movedKeys);
    },
    handleInput(currentValue) {
      this.$emit('input', currentValue);
    },
    /**
     * 介接change 事件
     * @param currentValue
     * @param direction
     * @param directionCheckedList
     */
    handleChange(currentValue, direction, directionCheckedList) {
      this.$emit('change', currentValue, direction, directionCheckedList);
    },
  },
};
</script>
