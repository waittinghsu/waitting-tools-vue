<template>
  <el-popover
    :width="width"
    trigger="hover"
    v-bind="$attrs"
    :disabled="disable"
    :visible-arrow="visibleArrow"
    :popper-class="popClass"
  >
    <!-- 這裡是 popover 彈出的區塊 -->
    <div class="sa-fold-content">
      <span v-if="disable" />
      <span v-else-if="['String','Number'].indexOf(type) > -1 " class="text-pre-wrap">
        {{ value }}
      </span>
      <!-- Array -->
      <div v-else-if="type === 'Array'" class="arr-content" :style="{'max-height': maxHeight}">
        <div v-for="(item, key) in value" :key="`sa_content_Array_${key}`" class="content-item">
          <slot name="contentItem" :item="item">
            <div>
              <span v-if="typeof item ==='string' || typeof item ==='number'">{{ item }}</span>
              <span v-else-if="typeof item ==='boolean'">{{ item ? '是' : '否' }}</span>
              <pre v-else>{{ JSON.stringify(item, undefined, 4).replace(/\"/g, "").replace(/,/g, ", ") }}</pre>
            </div>
          </slot>
        </div>
      </div>
      <!-- Object -->
      <template v-else-if="type === 'Object'">
        <div v-for="(item, key) in Object.entries(value)" :key="`sa_content_Object_${key}`" style="margin: 2px 2px;padding: 1px;">
          <span style="font-weight: 600;margin-right:4px;">{{ item[0] }}: </span>
          <span v-if="typeof item ==='string' || typeof item ==='number'">{{ item }}</span>
          <span v-else-if="typeof item ==='boolean'">{{ item ? '是' : '否' }}</span>
          <span v-else>{{ JSON.stringify(item) }}</span>
        </div>
      </template>
      <span v-else>{{ JSON.stringify(value) }}</span>
    </div>
    <!-- 這邊是展示的文字 -->
    <span slot="reference" :class="{'light-blue--text text--accent-5': !disable || simple === '是'}" v-bind="simpleProps">{{ simple }}</span>
  </el-popover>
</template>

<script>
import { checkStringIsDate, dateTimeFormat } from '@/utils/date';

export default {
  name: 'PopoverValue',
  filters: {},
  inheritAttrs: false,
  props: {
    popoverClass: { // 弹出窗口class
      type: String,
      default: '',
    },
    width: { // 默认宽度
      type: Number,
      default: 360,
    },
    maxHeight: {
      type: [String, Number],
      default: '300px',
    },
    // eslint-disable-next-line vue/require-prop-types
    value: { // 显示内容
      required: true,
    },
    len: { // 显示内容的长度
      type: Number,
      default: 20,
    },
    simpleProps: { // 显示简要内容属性
      type: Object,
      default() {
        return {};
      },
    },
    visibleArrow: {
      type: Boolean,
      default: true,
    },
    fixSimpleText: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      disable: true, // 默认不展示

    };
  },
  computed: {
    popClass: {
      get() {
        if (this.popoverClass) {
          return this.popoverClass;
        } if (this.type === 'Array') {
          return 'sa-fold-content-popper-array';
        }
        return 'sa-fold-content-popper';
      },
    },
    type: {
      get() {
        const str = Object.prototype.toString.call(this.value);
        // 格式化[object String] => String
        // [object Object] => Object

        return str.match(/\s(.*?)]/)[1];
      },
    },
    /**
     * 處理文字
     */
    simple: {
      get() {
        // String AND Number
        switch (this.type) {
          case 'Number':
          case 'String': {
            const str = String(this.value);// 轉字串
            // 固定popover 主文字
            if (this.fixSimpleText && str.length >= this.len) {
              this.setDisable(false);
              return this.fixSimpleText;
              // 超過長度 開啟 popover
            } if (str.length >= this.len) {
              this.setDisable(false);
              return `${str.substring(0, this.len)}...`;
              // 空直填 --
            } if (str === '') {
              return '--';
              // 一般顯示
            } if (this.type === 'String' && checkStringIsDate(str)) {
              const date = new Date(str);// 轉成日期 後面要做型別判斷
              return dateTimeFormat(date, 'yyy-MM-dd HH:mm:ss');
            }
            return str;

            // break;
          }
          case 'Object': {
            const arr = Object.entries(this.value);
            // 无数据
            if (arr.length === 0) {
              return '--';
            } if (arr.length === 1) {
              // 只有一个数据，转成String并判断长度
              const str = `${arr[0][0]} : ${this.json2str(arr[0][1]).replace(/"/g, '').replace(/,/g, ', ')}`;
              if (str > this.len) {
                this.setDisable(false);
                return `${str.substring(0, this.len)}...`;
              }
              return str;
            }
            // 超过两行
            this.setDisable(false);
            const str = `${arr[0][0]} : ${this.json2str(arr[0][1]).replace(/"/g, '').replace(/,/g, ', ')}`;
            return `${str.substring(0, this.len)}...`;
          }
          case 'Array': {
            if (this.value.length === 0) {
              return '--';
            }
            // 判断是否可Join ,或者用JOIN.string
            let is2strJoin = true;
            this.value.forEach((v) => {
              if (typeof v !== 'number' && typeof v !== 'string' && typeof v !== 'boolean') {
                is2strJoin = false;
              }
            });
            let str;
            if (is2strJoin) {
              str = this.value.join(', ');
            } else {
              str = this.json2str(this.value).replace(/"/g, '').replace(/,/g, ', ');
            }

            if (this.fixSimpleText) {
              this.setDisable(false);
              return this.fixSimpleText;
            }

            if (str.length > this.len) {
              this.setDisable(false);
              return `${str.substring(0, this.len)}...`;
            }
            return str;
          }
          case 'Boolean':
            return this.value ? '是' : '否';
          case 'Undefined':
          case 'Null':
            return '--';
          default: {
            const str = this.json2str(this.value).replace(/"/g, '').replace(/,/g, ', ');
            if (str.length > this.len) {
              // eslint-disable-next-line vue/no-side-effects-in-computed-properties
              this.disable = false;
              return `${str.substring(0, this.len)}...`;
            }
            return str;
          }
        }
      },
    },
  },
  methods: {
    json2str(obj) {
      if (obj === undefined || obj === null) return '';

      return JSON.stringify(obj);
    },
    setDisable(status = false) {
      this.disable = status;
    },
  },
};
</script>

<style lang="scss" scoped>
  .ex-row{
    /*background: #F4F4F4;*/
    .ex-item{
      margin-bottom: 8px;
    }
  }

  .sa-fold-content {

    .arr-content{
      overflow-y: auto;
    }

    .content-item{
      margin:4px;
      padding: 2px;
    }
  }

</style>
<style lang="scss">

  .sa-fold-content-popper {
    background: #464242E5;
    color: #F8F8F8;
    /*background: #D4D4D4F0;*/
    border-right: 1px solid #b8d4ae;
    border-left: 1px solid #b8d4ae;
    border-bottom: 1px solid #b8d4ae;
    .popper__arrow {
      &::after {
        border-bottom-color: #464242E5 !important;
      }
    }
  }

  .sa-fold-content-popper-array {
    background: #F8F8F8;
    color: #464242;
    padding: 6px 2px 4px 4px;

    .el-popover__title {
      font-weight: 600;
      padding: 4px 10px;
      margin: 2px 4px;
      border-bottom: 1px solid #e4e4d4;
    }
  }

</style>
