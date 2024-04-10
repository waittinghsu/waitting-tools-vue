<template>
  <div class="w-100">
    <el-input
      v-model.trim="inputValue" class="w-100"
      size="mini" :placeholder="placeholder"
      :readonly="inputReadonly"
      @keyup.enter.native="handleSearch"
    >
      <template #append>
        <el-button v-if="batch" v-waves size="mini" @click="handleBatch">
          {{ buttonText }}
        </el-button>
      </template>
    </el-input>
    <text-area-dialog
      ref="textAreaDialog"
      :title="modelTitle"
      :content-rule="checkContentRule"
      :placeholder="dialogPlaceholder"
      @submit="handleSubmit"
    >
      <template v-if="$slots.topTips" #topTips>
        <slot name="topTips" />
      </template>
    </text-area-dialog>
  </div>
</template>

<script>
import waves from '@/directive/waves';
import TextAreaDialog from './components/TextAreaDialog';

/**
 * 批量搜索用的 input 搭配dialog
 * 1. 限制model 只能 string or array 根據預設型別 回傳相對應數據
 * 2. 提供dialog slot 修改tips 文字 以及dialog placeholder
 */
export default {
  name: 'BatchSearchInput',
  components: {
    TextAreaDialog,
  },
  directives: { waves },
  model: {
    prop: 'model',
    event: 'change',
  },
  props: {
    model: {
      type: [String, Array],
      default: null,
    },
    batch: {
      type: Boolean,
      default: false,
    },
    inputReadonly: {
      type: Boolean,
      default: false,
    },
    contentRuleEnable: {
      type: Boolean,
      default: false,
    },
    contentRule: {
      type: Object,
      default: () => ({
        validator: (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请填写要查询的域名！'));
          } else {
            const reg = /\S+(\.\S+)+/;
            value.split('\n').forEach((text) => {
              if (!reg.test(text)) {
                callback(new Error('查询的域名格式不对，多个域名请换行！'));
              }
            });
            callback();
          }
        },
        trigger: 'change',
      }),
    },
    placeholder: {
      type: String,
      default: '域名搜索',
    },
    dialogPlaceholder: {
      type: String,
      default: '查询的域名,多个域名请换行！',
    },
    buttonText: {
      type: String,
      default: '批量域名',
    },
    modelTitle: {
      type: String,
      default: '批量搜索',
    },
  },
  data() {
    return {
      inputValue: '',
    };
  },
  computed: {
    handleModel: {
      get() {
        return this.model;
      },
      set(inputValue) {
        if (Object.prototype.toString.call(this.model) === '[object Array]') {
          this.$emit('change', inputValue.split(','));
        } else {
          this.$emit('change', inputValue);
        }
        // this.$emit('change', [...new Set(val.trim().split(',').filter(Boolean).map((v) => v.trim()))].join(','));
      },
    },
    checkContentRule() {
      return this.contentRuleEnable ? this.contentRule : {};
    },
  },
  watch: {
    inputValue: {
      handler(val) {
        this.handleModel = [...new Set(val.trim().split(',').filter(Boolean).map((v) => v.trim()))].join(',');
      },
    },
  },
  methods: {
    handleBatch() {
      this.$refs.textAreaDialog.show({ row: { inputValue: this.inputValue } });
    },
    handleSearch() {
      this.$emit('handle-keyup-enter');
    },
    /**
     *
     * @param {Array} val
     */
    handleSubmit(val) {
      this.inputValue = val.join(',');
      // 解決資料更新時 生命週期問題 逼需讓 $emit 在 handleModel更新之後
      setTimeout(() => {
        this.$emit('handle-model-submit');
      }, 0);
    },
    clearContent() {
      this.inputValue = '';
    },
  },
};
</script>
