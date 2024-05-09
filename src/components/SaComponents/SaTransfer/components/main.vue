<template>
  <div class="el-transfer">
    <transfer-panel
      v-bind="$props"
      ref="leftPanel"
      :data="sourceData"
      :title="titles[0] || t('el.transfer.titles.0')"
      :default-checked="leftDefaultChecked"
      :placeholder="filterPlaceholder || t('el.transfer.filterPlaceholder')"
      @checked-change="onSourceCheckedChange"
    >
      <slot name="left-footer" />
    </transfer-panel>
    <div class="el-transfer__buttons">
      <el-button
        type="primary"
        :class="['el-transfer__button', hasButtonTexts ? 'is-with-texts' : '']"
        :disabled="rightChecked.length === 0"
        @click.native="addToLeft"
      >
        <i class="el-icon-arrow-left" />
        <span v-if="buttonTexts[0] !== undefined">{{ buttonTexts[0] }}</span>
      </el-button>
      <el-button
        type="primary"
        :class="['el-transfer__button', hasButtonTexts ? 'is-with-texts' : '']"
        :disabled="leftChecked.length === 0"
        @click.native="addToRight"
      >
        <span v-if="buttonTexts[1] !== undefined">{{ buttonTexts[1] }}</span>
        <i class="el-icon-arrow-right" />
      </el-button>
    </div>
    <transfer-panel
      v-bind="$props"
      ref="rightPanel"
      :data="targetData"
      :title="titles[1] || t('el.transfer.titles.1')"
      :default-checked="rightDefaultChecked"
      :placeholder="filterPlaceholder || t('el.transfer.filterPlaceholder')"
      @checked-change="onTargetCheckedChange"
    >
      <slot name="right-footer" />
    </transfer-panel>
  </div>
</template>

<script>
import ElButton from 'element-ui/packages/button';
import Emitter from 'element-ui/src/mixins/emitter';
import Locale from 'element-ui/src/mixins/locale';
import Migrating from 'element-ui/src/mixins/migrating';
import TransferPanel from './transfer-panel.vue';

// let start = '';
export default {
  name: 'ElTransfer',

  components: {
    TransferPanel,
    ElButton,
  },

  mixins: [Emitter, Locale, Migrating],

  props: {
    /**
     * 数据数组。
     * @typedef {Object} DataObject
     * @property {string|number} label - 对象的标签（参考 prop 的 label 属性）
     * @property {string|number} key - 对象的键（参考 prop 的 key 属性）
     * @property {...any} [otherAttrs] - 其他属性（如果有）
     */
    /**
     * @type {DataObject[]}
     */
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
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
    /**
     * @callback RenderContentFunction
     * @param {Function} h - Vue 的 createElement 函数，用于创建 VNode。
     * @param {Object} option - 渲染选项对象，包含从 prop 中获取的 attrs 数据。
     * @param {Object[]} option.data - 渲染选项对象中的 data 属性，类型为数组。
     * @param {...any} [otherArgs] - 其他参数（如果有）。
     */
    /**
     * 渲染内容的函数。
     * @type {RenderContentFunction}
     * @default undefined
     */
    renderContent: {
      type: Function,
      default: undefined,
    },
    /**
     * @param {Number[]} value
     */
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
    /**
     * @typedef {Object} PropsObject
     * @property {string} label - 選項文案属性
     * @property {string} key - 键属性
     * @property {string} disabled - 狀態属性
     */
    /**
     * @type PropsObject
     */
    props: {
      type: Object,
      default() {
        return {
          label: 'label',
          key: 'key',
          disabled: 'disabled',
        };
      },
    },
    targetOrder: {
      type: String,
      default: 'original',
    },
  },

  data() {
    return {
      leftChecked: [],
      rightChecked: [],
    };
  },

  computed: {
    dataObj() {
      const { key } = this.props;
      return this.data.reduce((o, cur) => (o[cur[key]] = cur) && o, {});
    },
    /**
     * 左邊資料
     * 原生是使用 indexOf 來對每次對 this.value 遍歷查找 時間複雜度為  O(n * m)
     * 原生 -> return this.data.filter(item => this.value.indexOf(item[this.props.key]) === -1);
     * 修改後  O(n + m)
     * @returns {DataObject[]}
     */
    sourceData() {
      // 這裡做了 字典模式 配置成 key: Boolean 來確認誰不在左邊 this.value 可以想成是右邊的資料
      const valueDic = this.value.reduce((acc, key) => ({ ...acc, [key]: true }), {});
      // valueObj 字典查找速度更快
      return this.data.filter((item) => !valueDic[item[this.props.key]]);
    },
    /**
     * 右邊資料
     * @returns {*|DataObject[]}
     */
    targetData() {
      if (this.targetOrder === 'original') {
        // 這裡做了 字典模式 配置成 key: Boolean 來確認誰不在左邊 this.value 可以想成是右邊的資料
        const valueDic = this.value.reduce((acc, key) => ({ ...acc, [key]: true }), {});
        // valueObj 字典查找速度更快
        return this.data.filter((item) => valueDic[item[this.props.key]]);
      }
      return this.value.reduce((arr, cur) => {
        const val = this.dataObj[cur];
        val && arr.push(val);
        return arr;
      }, []);
    },

    hasButtonTexts() {
      return this.buttonTexts.length === 2;
    },
  },

  watch: {
    value(val) {
      this.dispatch('ElFormItem', 'el.form.change', val);
    },
  },

  methods: {
    getMigratingConfig() {
      return {
        props: {
          'footer-format': 'footer-format is renamed to format.',
        },
      };
    },

    onSourceCheckedChange(val, movedKeys) {
      this.leftChecked = val;
      if (movedKeys === undefined) return;
      this.$emit('left-check-change', val, movedKeys);
    },

    onTargetCheckedChange(val, movedKeys) {
      this.rightChecked = val;
      if (movedKeys === undefined) return;
      this.$emit('right-check-change', val, movedKeys);
    },

    addToLeft() {
      const currentValue = this.value.slice();
      this.rightChecked.forEach((item) => {
        const index = currentValue.indexOf(item);
        if (index > -1) {
          currentValue.splice(index, 1);
        }
      });
      this.$emit('input', currentValue);
      this.$emit('change', currentValue, 'left', this.rightChecked);
    },
    addToRight() {
      let currentValue = this.value.slice();
      const itemsToBeMoved = [];
      const { key } = this.props;

      const leftCheckedKeyPropsObj = {};
      this.leftChecked.forEach((item, index) => {
        leftCheckedKeyPropsObj[item] = true;
      });

      const valueKeyPropsObj = {};
      this.value.forEach((item, index) => {
        valueKeyPropsObj[item] = true;
      });
      this.data.forEach((item) => {
        const itemKey = item[key];
        if (
          leftCheckedKeyPropsObj[itemKey]
          && !valueKeyPropsObj[itemKey]) {
          itemsToBeMoved.push(itemKey);
        }
      });
      currentValue = this.targetOrder === 'unshift'
        ? itemsToBeMoved.concat(currentValue)
        : currentValue.concat(itemsToBeMoved);
      this.$emit('input', currentValue);
      this.$emit('change', currentValue, 'right', this.leftChecked);
    },

    clearQuery(which) {
      if (which === 'left') {
        this.$refs.leftPanel.query = '';
      } else if (which === 'right') {
        this.$refs.rightPanel.query = '';
      }
    },
  },
};
</script>
