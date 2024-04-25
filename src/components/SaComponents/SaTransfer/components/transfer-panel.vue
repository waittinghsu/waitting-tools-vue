<template>
  <div class="el-transfer-panel">
    <p class="el-transfer-panel__header">
      <el-checkbox
        v-model="allChecked"
        :indeterminate="isIndeterminate"
        @change="handleAllCheckedChange"
      >
        {{ title }}
        <span>{{ checkedSummary }}</span>
      </el-checkbox>
    </p>

    <div :class="['el-transfer-panel__body', hasFooter ? 'is-with-footer' : '']">
      <el-input
        v-if="filterable"
        v-model="query"
        class="el-transfer-panel__filter"
        size="small"
        :placeholder="placeholder"
        @mouseenter.native="inputHover = true"
        @mouseleave.native="inputHover = false"
      >
        <i
          slot="prefix"
          :class="['el-input__icon', 'el-icon-' + inputIcon]"
          @click="clearQuery"
        />
      </el-input>
      <el-checkbox-group
        v-show="!hasNoMatch && data.length > 0"
        v-model="checked"
        v-infinite-scroll="loadMore"
        :infinite-scroll-distance="10"
        :class="{ 'is-filterable': filterable }"
        class="el-transfer-panel__list"
      >
        <el-checkbox
          v-for="item in dataForShow"
          :key="item[keyProp]"
          class="el-transfer-panel__item"
          :label="item[keyProp]"
          :disabled="item[disabledProp]"
        >
          <option-content :option="item" />
        </el-checkbox>
      </el-checkbox-group>
      <p
        v-show="hasNoMatch"
        class="el-transfer-panel__empty"
      >
        {{ t('el.transfer.noMatch') }}
      </p>
      <p
        v-show="data.length === 0 && !hasNoMatch"
        class="el-transfer-panel__empty"
      >
        {{ t('el.transfer.noData') }}
      </p>
    </div>
    <p v-if="hasFooter" class="el-transfer-panel__footer">
      <slot />
    </p>
  </div>
</template>

<script>
import ElCheckboxGroup from 'element-ui/packages/checkbox-group';
import ElCheckbox from 'element-ui/packages/checkbox';
import ElInput from 'element-ui/packages/input';
import Locale from 'element-ui/src/mixins/locale';

// let start = new Date().getTime();
export default {

  name: 'ElTransferPanel',

  components: {
    ElCheckboxGroup,
    ElCheckbox,
    ElInput,
    OptionContent: {
      props: {
        option: Object,
      },
      render(h) {
        const getParent = (vm) => {
          if (vm.$options.componentName === 'ElTransferPanel') {
            return vm;
          } if (vm.$parent) {
            return getParent(vm.$parent);
          }
          return vm;
        };
        const panel = getParent(this);
        const transfer = panel.$parent || panel;
        // eslint-disable-next-line no-nested-ternary
        return panel.renderContent
          ? panel.renderContent(h, this.option)
          : transfer.$scopedSlots.default
            ? transfer.$scopedSlots.default({ option: this.option })
            : <span>{ this.option[panel.labelProp] || this.option[panel.keyProp] }</span>;
      },
    },
  },
  mixins: [Locale],

  componentName: 'ElTransferPanel',

  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    renderContent: Function,
    placeholder: String,
    title: String,
    filterable: Boolean,
    format: Object,
    filterMethod: Function,
    defaultChecked: Array,
    props: Object,
  },

  data() {
    return {
      checked: [],
      allChecked: false,
      query: '',
      inputHover: false,
      checkChangeByUser: true,
      dataForShow: [],
      pageNumber: 1,
      pageSize: 50,
    };
  },

  computed: {
    filteredData() {
      // start = new Date().getTime();
      const arr = this.data.filter((item) => {
        if (typeof this.filterMethod === 'function') {
          return this.filterMethod(this.query, item);
        }
        const label = item[this.labelProp] || item[this.keyProp].toString();
        return label.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
      });
      this.setDataForShow(arr.slice(0, this.pageSize));

      // console.log('filteredData耗时', new Date().getTime() - start);
      return arr;
    },

    checkableData() {
      return this.filteredData.filter((item) => !item[this.disabledProp]);
    },

    checkedSummary() {
      const checkedLength = this.checked.length;
      const dataLength = this.data.length;
      const { noChecked, hasChecked } = this.format;
      if (noChecked && hasChecked) {
        return checkedLength > 0
          ? hasChecked.replace(/\${checked}/g, checkedLength).replace(/\${total}/g, dataLength)
          : noChecked.replace(/\${total}/g, dataLength);
      }
      return `${checkedLength}/${dataLength}`;
    },

    isIndeterminate() {
      const checkedLength = this.checked.length;
      return checkedLength > 0 && checkedLength < this.checkableData.length;
    },

    hasNoMatch() {
      return this.query.length > 0 && this.filteredData.length === 0;
    },

    inputIcon() {
      return this.query.length > 0 && this.inputHover
        ? 'circle-close'
        : 'search';
    },

    labelProp() {
      return this.props.label || 'label';
    },

    keyProp() {
      return this.props.key || 'key';
    },

    disabledProp() {
      return this.props.disabled || 'disabled';
    },

    hasFooter() {
      return !!this.$slots.default;
    },
  },

  watch: {
    checked(val, oldVal) {
      // start = new Date().getTime();
      this.updateAllChecked();
      const newObj = {};
      val.forEach((item) => {
        newObj[item] = true;
      });
      const oldObj = {};
      oldVal.forEach((item) => {
        oldObj[item] = true;
      });
      if (this.checkChangeByUser) {
        // const movedKeys = val.concat(oldVal)
        const movedKeys = this.dataForShow.concat(oldVal)
          .filter((v) => newObj[v] || oldVal[v]);
        this.$emit('checked-change', val, movedKeys);
      } else {
        this.$emit('checked-change', val);
        this.checkChangeByUser = true;
      }
      // console.log('checked耗时', new Date().getTime() - start);
    },

    data() {
      // start = new Date().getTime();
      const checked = [];
      const filteredDataKeys = this.filteredData.map((item) => item[this.keyProp]);
      this.checked.forEach((item) => {
        if (filteredDataKeys.indexOf(item) > -1) {
          checked.push(item);
        }
      });
      this.checkChangeByUser = false;
      this.checked = checked;
      // console.log('data耗时', new Date().getTime() - start);
    },

    checkableData() {
      this.updateAllChecked();
    },

    defaultChecked: {
      immediate: true,
      handler(val, oldVal) {
        // start = new Date().getTime();
        if (oldVal && val.length === oldVal.length
          && val.every((item) => oldVal.indexOf(item) > -1)) return;
        const checked = [];
        const checkableDataKeys = this.checkableData.map((item) => item[this.keyProp]);
        val.forEach((item) => {
          if (checkableDataKeys.indexOf(item) > -1) {
            checked.push(item);
          }
        });
        this.checkChangeByUser = false;
        this.checked = checked;
        // console.log('defaultCheck耗时', new Date().getTime() - start);
      },
    },
  },

  methods: {
    updateAllChecked() {
      // const start = new Date().getTime();
      const checkObj = {};
      this.checked.forEach((item, index) => {
        checkObj[item] = true;
      });
      // 通过对象的k-v对应，n(1)的方式寻找数组中是否存在某元素
      this.allChecked = this.checkableData.length > 0
        && this.checked.length > 0
        && this.checkableData.every((item) => checkObj[item[this.keyProp]]);
      // 上面被注释的源码是最耗时的，所有一直看耗时就可以了
      // console.log('updateAllCheckedEnd', new Date().getTime() - start);
    },

    handleAllCheckedChange(value) {
      // debugger
      // start = new Date().getTime();
      this.checked = value
        ? this.checkableData.map((item) => item[this.keyProp])
        : [];
      // console.log('handleAllCheckedChange耗时', new Date().getTime() - start);
    },

    loadMore() {
      // console.log('1111');
      this.pageNumber++;
      this.dataForShow = this.filteredData.slice(0, this.pageSize * this.pageNumber);
    },

    clearQuery() {
      if (this.inputIcon === 'circle-close') {
        this.query = '';
      }
    },

    setDataForShow(value) {
      this.dataForShow = value;
    },
  },
};
</script>
