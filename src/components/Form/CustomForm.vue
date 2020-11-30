<template lang="pug">
el-col( :span="colSpan")
  el-form-item( :label="checkLabel(form.label)" :size="formSize" :prop="formName" :rules="rules" :style="form.formItemStyle" v-bind="formItemBind")
    br(v-if="!form.label && !form.checkboxLabel")
    el-input(v-if="form.type === 'input'" v-model="form.value" :disabled="form.disabled" v-bind="form.bind")
     template(v-if="form.prepend" slot="prepend") {{form.prepend}}
     template(v-if="form.append" slot="append") {{form.append}}
    el-input(v-else-if="form.type === 'number'" type="number" v-model.number="form.value" :min="minNum" :max="maxNum" :disabled="form.disabled" v-bind="form.bind")
     template(v-if="form.prepend" slot="prepend") {{form.prepend}}
     template(v-if="form.append" slot="append") {{form.append}}
    el-input-number(v-else-if="form.type === 'inputNumber'" v-model="form.value" :min="minNum" :disabled="form.disabled" v-bind="form.bind")
    el-input(v-else-if="form.type === 'textarea'" :rows="textareaRow" type="textarea" v-model="form.value" :disabled="form.disabled" v-bind="form.bind")
    el-input(v-else-if="form.type === 'password'" type="password" v-model="form.value" :disabled="form.disabled" v-bind="form.bind")
    el-checkbox(v-else-if="form.type === 'oneCheckbox'" v-model="form.value" :disabled="form.disabled" :true-label="form.trueLabel" :false-label="form.falseLabel" v-bind="form.bind") {{checkLabel(form.checkboxLabel)}}
    template(v-else-if="form.type === 'checkboxGroup'")
      el-checkbox(v-if="form.indeterminate" :indeterminate="checkboxIsIndeterminate"  v-model="checkboxCheckAll" @change="handleCheckboxCheckAll") {{$t('selectAll')}}
      el-checkbox-group( v-model="form.value"  v-bind="form.bind" @change="handleCheckedBoxChange")
        el-checkbox(v-for="item in form.optionList" :key="item.value" :label="item.value" :class="form.class" :disabled="form.disabled") {{checkLabel(item.label)}}
    el-radio-group(v-else-if="form.type === 'radioGroup'" v-model="form.value" v-bind="form.bind")
      el-radio(v-for="item in form.optionList" :key="item.value" :label="item.value" :class="form.class" :disabled="form.disabled") {{checkLabel(item.label)}}
    el-select.select(v-else-if="form.type === 'select'"  v-model="form.value" @change='customerEvent' :class="form.class" :disabled="form.disabled" v-bind="form.bind")
      el-option(v-for="item in form.optionList" :key="item.value" :label="checkLabel(item.label)" :value="item.value")
    el-select.select(v-else-if="form.type === 'multipleSelect'" multiple  v-model='form.value' :class="form.class"  @change='handleMultipleChangeSelect' @remove-tag='handleRemoveTag' placeholder='请选择' :disabled="form.disabled" v-bind="form.bind")
      el-option(label='All' value='All' @click.native='handleMultipleSelectAll')
      el-option(v-for="item in form.optionList" :key="item.value" :label="checkLabel(item.label)" :value="item.value")
    el-switch(
      v-else-if="form.type === 'switch'"
      v-model='form.value'
      :width="switchWidth"
      :inactive-color="inactiveColor"
      :active-color="activeColor"
      :active-value="form.activeValue"
      :inactive-value="form.inactiveValue"
      :active-text="checkLabel(form.activeText)"
      :inactive-text="checkLabel(form.inactiveText)"
      :disabled="form.disabled"
      v-bind="form.bind"
    )
    p.note(v-if ="form.note") {{form.note}}
</template>
<script>
export default {
  name: 'CustomForm',
  /*
  form格式參考
    ===input樣式====
    totalDepositCount: {
      type: 'input',//input類型
      label: () => this.$t('totalDepositCount'),//label顯示字樣
      note: this.$t('totalDepositCountNote'),//註解
      value: null,//放置數值
    },

    ===select樣式====
    bankPaymentGatewayType: {
      type: 'select',
      label: () => this.$t('bankPaymentGatewayType'),//label顯示字樣
      optionList: [],option列表
      value: null,//放置數值
    },

    ===multipleSelect樣式====
    agents: {
      type: 'multipleSelect',
      label: () => this.$t('agents'),
      note: this.$t('agentsNote'),
      optionList: [],option列表
      value: null,
    },
    如要加上註解則加上
    note: this.$t('totalDepositCountNote'),
  */
  props: {
    // el-form-item bind使用
    formItemBind: {
      type: Object,
      required: false,
      default: null,
    },
    form: {
      type: Object,
      required: true,
    },
    // 表單驗證規則
    rules: {
      type: Array,
      required: false,
      default: null,
    },
    // 表單驗證對應prop名
    formName: {
      type: String,
      required: false,
      default: '',
    },
    textareaRow: {
      type: Number,
      required: false,
      default: 5,
    },
    colSpan: {
      type: Number,
      required: false,
      default: 6,
    },
  },
  data() {
    return {
      test: '',
      defaultMinNum: 0,
      defaultActiveColor: '#13ce66',
      defaultInactiveColor: '#878787',
      defaultSwitchWidth: 10,
      defaultFromSize: 'small',
      // el-checkbox- group 全選使用
      checkboxCheckAll: false,
      checkboxIsIndeterminate: true,
    };
  },
  computed: {
    formSize() {
      return this.form.formSize || this.defaultFromSize;
    },
    minNum() {
      return this.form.minNum || this.defaultMinNum;
    },
    maxNum() {
      return this.form.maxNum || null;
    },
    activeColor() {
      return this.form.activeColor || this.defaultActiveColor;
    },
    inactiveColor() {
      return this.form.inactiveColor || this.defaultInactiveColor;
    },
    switchWidth() {
      return this.form.switchWidth || this.defaultSwitchWidth;
    },
  },
  methods: {
    // ------多選下拉選單-------
    // 多選下拉選單全選
    handleMultipleSelectAll() {
      if (this.form.value.length < this.form.optionList.length) {
        this.form.value = [];
        this.form.optionList.map(item => this.form.value.push(item.value));
        this.form.value.unshift('All');
      } else {
        this.form.value = [];
      }
    },
    // 多選下拉選單change事件
    handleMultipleChangeSelect(val) {
      if (!val.includes('All') && val.length === this.form.optionList.length) {
        this.form.value.unshift('All');
      } else if (val.includes('All') && val.length - 1 < this.form.optionList.length) {
        this.form.value = this.form.value.filter(item => {
          return item !== 'All';
        });
      }
      this.customerEvent();
    },
    handleRemoveTag(val) {
      if (val === 'All') {
        this.form.value = [];
      }
    },
    // ------多選下拉選單-------END
    // 客製化事件
    customerEvent() {
      if (this.form.customerEvent) {
        this.form.customerEvent();
      }
    },
    checkLabel(label) {
      if (typeof label === 'function') {
        return label();
      } else {
        return label;
      }
    },
    // checkBox全選
    handleCheckboxCheckAll(val) {
      this.form.value = val ? this.form.optionList.map(e => e.value) : [];
      this.checkboxIsIndeterminate = false;
    },
    handleCheckedBoxChange(value) {
      const checkedCount = value.length;
      this.checkboxCheckAll = checkedCount === this.form.optionList.length;
      this.checkboxIsIndeterminate = checkedCount > 0 && checkedCount < this.form.optionList.length;
    },
  },
};
</script>
<style lang="scss" scoped>
.note {
  color: #c9c7c7;
}
.displayBlock {
  display: block;
}
.select {
  @extend .displayBlock;
}
</style>
<style lang="scss" scoped>
::v-deep .el-switch {
  &__inside-text {
    position: relative;
    &.is-checked {
      .el-switch__core {
        background: #179bff;
        &:after {
          margin-left: -18px;
        }
      }
    }
    .el-switch {
      &__label {
        position: absolute;
        display: none;
        color: #fff;
        &--left {
          z-index: 9;
          right: 0;
        }
        &--right {
          z-index: 9;
          left: -5px;
        }
        &.is-active {
          display: block;
        }
      }
    }
  }
}
</style>
