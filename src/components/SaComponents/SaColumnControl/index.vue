<!-- eslint-disable no-lonely-if -->
<template>
  <el-popover
    ref="SaColumnVisiblePopover" placement="bottom"
    popper-class="sa-col-control-pop" width="240"
    trigger="click"
    @hide="show(false)"
  >
    <el-row v-for="item in columns" :key="item.label" class="sa-col-control-item pa-1">
      <a :key="item.label" :class="isVisible(item.prop)?'blue--text text--darken-5':'red--text text--darken-2'" @click="changeCol(item.prop)">
        <el-col :span="22" style="min-height:22px">{{ item.label }}</el-col>
        <el-col v-if="isVisible(item.prop)" class="font-normal blue--text text--darken-1" :span="2">
          <i class="el-icon-check" />
        </el-col>
      </a>
    </el-row>
    <el-row v-if="clearable" class="pt-2">
      <el-col class="d-flex justify-end" :span="24">
        <el-button type="danger" plain @click="handleClear">
          重置
        </el-button>
      </el-col>
    </el-row>
    <template #reference>
      <el-button size="mini" type="primary" plain icon="el-icon-menu">
        选列
      </el-button>
    </template>
  </el-popover>
</template>

<script>
export default {
  name: 'SaColumnVisible',
  filters: {},
  props: {
    columns: {
      type: Array, // 格式如： [{label:"", prop:""}]
      required: true,
    },
    colVisible: {
      type: Array, // 格式如: ["prop1", "prop2", "prop3"]
      required: true,
    },
    minLength: {
      type: Number, // 列长度，最大值
      default: 1,
    },
    maxLength: {
      type: Number, // 列长度, 最小值
      default: 14,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      resetEnable: false,
    };
  },
  computed: {
    columnVisible: {
      get() {
        return this.colVisible;
      },
      set(arrayData) {
        this.$emit('update:colVisible', arrayData);
      },
    },
  },
  methods: {
    show(flat) {
      if (!flat && this.resetEnable === false) this.$emit('hide');
      this.resetEnable = true;
    },
    changeCol(value) {
      const index = this.colVisible.indexOf(value);
      if (index >= 0) {
        // delete 大于才可以删除
        if (this.colVisible.length > this.minLength) {
          const tempColVisible = [...this.colVisible];
          tempColVisible.splice(index, 1);
          this.columnVisible = tempColVisible;
        } else {
          this.$notify.warning({
            title: '提示',
            message: `至少需要${this.minLength}列数显示`,
          });
        }
      } else {
        // add
        // eslint-disable-next-line no-lonely-if
        if (this.colVisible.length < this.maxLength) {
          // eslint-disable-next-line vue/no-mutating-props
          const tempColVisible = [...this.colVisible];
          tempColVisible.push(value);
          this.columnVisible = tempColVisible;
        } else {
          this.$notify.warning({
            title: '提示',
            message: `不可超过${this.maxLength}列数显示`,
          });
        }
      }
    },
    isVisible(prop) {
      return this.colVisible.indexOf(prop) > -1;
    },
    handleClear() {
      this.resetEnable = true;
      this.$refs.SaColumnVisiblePopover.doClose();
      this.$emit('handleClear');
    },
  },
};
</script>

<style lang="scss">
.sa-col-control-pop {
  background: #f8f8f8;
  max-height: 360px;
  overflow: auto;
}
</style>
<style lang="scss" scoped>
.sa-col-control-item {
  /*background: #F8F8F4;*/
  border-bottom: 1px solid #e2eef9;

  .select-col {
    width: 160px;
  }
  &:hover {
    background: #dde4f4;
  }
}
</style>
