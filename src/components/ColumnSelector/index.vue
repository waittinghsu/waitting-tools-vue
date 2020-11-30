<template>
  <el-popover>
    <div class="reset-container">
      <a class="reset-button" @click="reset(defaultColumns)">{{ $t('reset') }}</a>
    </div>
    <div v-for="(column, index) in updatedColumns" :key="index">
      <el-checkbox v-model="column.visible" :label="column.label" @change.native="change">
        {{ column.label }}
      </el-checkbox>
      <br />
    </div>

    <el-button slot="reference" size="small">{{ $t('ColumnSelector') }}</el-button>
  </el-popover>
</template>

<script>
import { mapGetters } from 'vuex';
import _ from 'lodash';
/**
 * 表格可調式欄位
 * props
 * columns：表格header資訊 物件組
 * columnsKey： 同路由複數表格可以定義 暫存的key名
 *
 * */
export default {
  name: 'ColumnSelector',
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    columnsKey: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      collectionKey: this.columnsKey ? `${this.$route.path}/${this.columnsKey}` : this.$route.path,
      defaultColumns: [],
      updatedColumns: [],
      unselectableColumns: [],
      columnSelectorCollection: {},
    };
  },
  computed: {
    ...mapGetters({ locale: 'i18n/locale' }),
  },
  watch: {
    locale: {
      handler(now) {
        this.reset(this.columns);
      },
    },
  },
  created() {
    // 原本的deepCopy會影響function轉出改用lodash
    this.defaultColumns = _.cloneDeep(this.columns);

    this.columnSelectorCollection = JSON.parse(localStorage.getItem('columnSelectorCollection')) || {};
    // 檢查localstorage 有無資料
    if (this.columnSelectorCollection[this.collectionKey]) {
      // console.log('cache');
      // 檢查暫存的當前語系
      if (_.find(this.columnSelectorCollection[this.collectionKey], column => column.prop)?.locale === this.locale) {
        this.updatedColumns = _.cloneDeep(this.columnSelectorCollection[this.collectionKey].filter(column => !!column.prop));
      } else {
        const columns = [...this.unselectableColumns, ...this.updatedColumns];
        this.setColumnVisible(columns);
        this.makeUpdatedColumns(this.columns);
      }
    } else {
      // console.log('local');
      this.makeUpdatedColumns(this.columns);
    }

    this.change();
  },
  methods: {
    reset(columns) {
      this.makeUpdatedColumns(columns);
      this.change();
    },
    change() {
      const columns = [...this.unselectableColumns, ...this.updatedColumns];
      this.$emit('column-change', columns);
      this.columnSelectorCollection[this.collectionKey] = columns;
      localStorage.setItem('columnSelectorCollection', JSON.stringify(this.columnSelectorCollection));
      this.setColumnVisible(columns);
    },
    // 調整column 狀態（ visible ）＠todo 原先外部使用的emit function可以拔掉
    setColumnVisible(columns) {
      for (const emitColumn of columns) {
        const currentColumn = this.columns.find(column => column.prop === emitColumn.prop);
        if (currentColumn == null) {
          return;
        }
        currentColumn.visible = emitColumn.visible;
      }
    },
    // 處理column物件 加入語系判斷 label轉 string
    makeUpdatedColumns(columns) {
      this.unselectableColumns = this.columns.filter(column => !column.prop);
      this.updatedColumns = _.cloneDeep(columns)
        .reduce((acc, cur) => {
          if (cur.prop) {
            acc.push({ ...cur });
          }
          return acc;
        }, [])
        .map(obj => {
          obj.locale = this.locale;
          if (typeof obj.label === 'function') {
            obj.label = obj.label();
          }
          return obj;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
$reset-button: #169bd5;

.reset-container {
  text-align: right;
  .reset-button {
    color: $reset-button;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}
.el-button {
  margin: 0 10px;
}
</style>
