<template>
  <!-- ::~::~::~::~::~::~::  **使用** v-permission  ::~::~::~::~::~::~::-->
  <div v-if="usePermission" class="sa-permission-button-group">
    <slot name="before" />
    <template v-for="(btn, key) in btnList">
      <template v-if="showBtn(btn)">
        <!--提示元件全透過 tooltipBind 來操作-->
        <el-tooltip
          :key="`tooltip_${btn.key}-${key}`" v-bind="tooltipBindProcess(btn.tooltipBind)"
          :disabled="tooltipBindProcess(btn.tooltipBind).disabled"
        >
          <!--確認視窗-->
          <sa-popover-dialog
            v-if="btn.popover" :key="`${btn.key}-${key}`"
            v-bind="popoverBindProcess(btn.popBind)"
            :disabled="buttonBindProcess(btn.bind).disabled"
            @confirm="handleButtonClick(btn.key || '', $event)"
          >
            <template slot="reference">
              <el-button v-permission="btn.key" v-bind="buttonBindProcess(btn.bind)">
                {{ btn.name }}
              </el-button>
            </template>
          </sa-popover-dialog>
          <!--上传组件 Start-->
          <sa-upload
            v-else-if="btn.upload" :key="`${btn.key}-${key}`"
            v-permission="btn.key" class="d-inline-block"
            :disabled="buttonBindProcess(btn.bind).disabled"
            @handleUpload="(form, fileObj)=>handleButtonClick(btn.key,{form, fileObj})"
          >
            <span slot="content">
              <el-button v-permission="btn.key" v-bind="buttonBindProcess(btn.bind)">{{ btn.name }}</el-button>
            </span>
          </sa-upload>
          <el-button :key="`${btn.key}-${key}`" v-permission="btn.key" v-bind="buttonBindProcess(btn.bind)" @click="handleButtonClick(btn.key || '')">
            {{ btn.name }}
          </el-button>
        </el-tooltip>
      </template>
    </template>
    <slot name="after" />
  </div>
  <!-- ::~::~::~::~::~::~::  **不使用** v-permission  ::~::~::~::~::~::~::-->
  <div v-else class="sa-permission-button-group">
    <slot name="before" />
    <template v-for="(btn, key) in btnList">
      <template v-if="showBtn(btn)">
        <el-tooltip
          :key="`tooltip_${btn.key}-${key}`" v-bind="tooltipBindProcess(btn.tooltipBind)"
          :disabled="tooltipBindProcess(btn.tooltipBind).disabled"
        >
          <!--確認視窗-->
          <sa-popover-dialog
            v-if="btn.popover" :key="`${btn.key}-${key}`"
            v-bind="popoverBindProcess(btn.popBind)"
            :disabled="buttonBindProcess(btn.bind).disabled"
            @confirm="handleButtonClick(btn.key || '', $event)"
          >
            <template slot="reference">
              <el-button v-bind="buttonBindProcess(btn.bind)">
                {{ btn.name }}
              </el-button>
            </template>
          </sa-popover-dialog>
          <!--上传组件 Start-->
          <sa-upload
            v-else-if="btn.upload" :key="`${btn.key}-${key}`"
            class="d-inline-block" :disabled="buttonBindProcess(btn.bind).disabled"
            @handleUpload="(form, fileObj)=>handleButtonClick(btn.key,{form, fileObj})"
          >
            <span slot="content">
              <el-button v-bind="buttonBindProcess(btn.bind)">{{ btn.name }}</el-button>
            </span>
          </sa-upload>
          <el-button v-else :key="`${btn.key}-${key}`" v-bind="buttonBindProcess(btn.bind)" @click="handleButtonClick(btn.key || '')">
            {{ btn.name }}
          </el-button>
        </el-tooltip>
      </template>
    </template>
    <slot name="after" />
  </div>
</template>

<script>
import SaPopoverDialog from '@/components/SaPopoverDialog';
import SaUpload from '@/components/SaUpload';
/**
 * 權限按鈕生成組件
 *
 * 說明
 * @param {Array<{key: String, name:String, popover: Boolean, bind: {}, popBind:{}}>} permissionList
 * @param {String} permissionList[0].key 按鈕對照menu的 key1
 * @param {String} permissionList[0].name 按鈕的文字
 * @param {Boolean} permissionList[0].popover 使否啟用 popover 效果
 * @param {Object} permissionList[0].bind btn props參數綁定
 * @param {Object} permissionList[0].popBind popover props參數綁定
 * @param {Object} permissionList[0].popBind popover props參數綁定
 */
export default {
  name: 'SaPermissionButtonGroup',
  components: { SaPopoverDialog, SaUpload },
  props: {
    // 過濾按鈕的key 是否為ＸＸＸ
    regexRule: {
      type: RegExp,
      // eslint-disable-next-line prefer-regex-literals
      default: () => new RegExp(''),
    },
    // 前綴
    prefixBtnList: {
      type: Array,
      default: () => [],
    },
    // 中段顯示  只有這條會受到 regexRule key 過濾
    permissionList: {
      type: Array,
      default: () => [],
    },
    // // 後綴 棄用
    // suffixBtnList: {
    //   type: Array,
    //   default: () => [],
    // },
    // 是否啟用 v-permissuin
    usePermission: {
      type: Boolean,
      default: false,
    },
    // 同步設定 按鈕樣式 Plain
    defaultPlain: {
      type: Boolean,
      default: false,
    },
    // 按鈕的可用參數 saTable-action,  ComOperational
    row: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    // permissionList 需要regex過濾
    btnList() {
      // 從權限取得按鈕列表
      const rule = new RegExp(this.regexRule);
      return [...this.prefixBtnList, ...this.permissionList.filter((item) => rule.test(item.key))];// ...this.suffixBtnList
    },
    // 從權限取得按鈕列表
    getPermissionList() {
      // 是否要使用權限按鈕 true: 去取 $permission button,  false: []
      return this.usePermission ? (this.$permission?.getRouterPermission()?.buttonList || []) : [];
    },
  },
  methods: {
    isFunction(val) {
      return Object.prototype.toString.call(val) === '[object Function]';
    },
    /**
     * 過濾button 會binding 的attribute
     * @param bindObject
     * @param { string, object } bindObject.className
     * @param { boolean, function } bindObject.disabled
     * @param { boolean } bindObject.loading
     *
     * @returns {{size, round, plain: boolean, nativeType, icon, className, disabled: *, type: string, loading, autofocus, circle}}
     */
    buttonBindProcess(bindObject = {}) {
      const {
        className: classNameOrigin, type, icon, size, nativeType, loading, disabled: disabledOrigin, plain, autofocus, round, circle,
      } = bindObject;
      const disabled = this.isFunction(disabledOrigin) ? disabledOrigin.call(this, this.row) : disabledOrigin;
      const className = this.isFunction(classNameOrigin) ? classNameOrigin.call(this, this.row) : classNameOrigin;
      return {
        class: className, type: type || 'primary', icon, size, nativeType, loading, disabled, plain: plain || this.defaultPlain, autofocus, round, circle,
      };
    },
    /**
     * 處理外部給的 popover 參數可以操控 組建 SaPopoverDialog
     * @param bindObject
     * @return {{width, popoverClass, confirmText, title, commentEnable, inputDescription}}
     */
    popoverBindProcess(bindObject = {}) {
      const {
        popoverClass, width, confirmText, title, commentEnable, inputDescription,
      } = bindObject;
      return {
        popoverClass, width, confirmText, title, commentEnable, inputDescription,
      };
    },
    /**
     * 過濾 tooltip 會binding 的attribute
     * 來源 btnList.tooltipBind
     * @param bindObject
     * @return {{effect: string, disabled: boolean, placement: string, class: string, content: string}}
     */
    tooltipBindProcess(bindObject = {}) {
      const {
        className: tooltipClass = 'item', effect = 'dark', content, placement = 'top-start', disabled = true,
      } = bindObject;

      return {
        class: tooltipClass, effect, content, placement, disabled,
      };
    },
    /**
     * 處理外部給的 button 參數可以操控 組建 el-button
     * @param {String} key 按鈕的key值，會被分解成function 名稱
     * @param otherParams 使用了 SaUpload 接收emit的 params = { form, fileObj } //uploadObj
     * @param otherParams 使用了 popover 接收emit的 params = { content }
     */
    handleButtonClick(key, otherParams = null) {
      const mainKey = key.split(/[-_]/).map((text) => `${text.slice(0, 1).toLocaleUpperCase()}${text.slice(1)}`).join('');
      const funcName = `handle${mainKey}`;
      const { row } = this;
      if (otherParams) {
        this.$emit('handleButtonClick', { funcName, row, otherParams });
      } else {
        this.$emit('handleButtonClick', { funcName, row });
      }
    },
    /**
     * button 的顯示與否 v-if
     * @param {Boolean, Function} btnObj.hidden default: undefined 表示不隱藏 true： 隱藏按鈕
     * @returns {boolean} true: 顯示按鈕 false: 不顯示按鈕
     */
    showBtn(btnObj) {
      if (this.isFunction(btnObj.hidden)) {
        return !btnObj.hidden.call(this, this.row);
      }
      return !btnObj.hidden;
    },
  },
};
</script>
