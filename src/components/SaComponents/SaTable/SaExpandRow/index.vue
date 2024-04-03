<template>
  <el-row class="sa-expand">
    <el-col v-for="(col, key) in columns" :key="`ExpandRow_${key}`" :span="colSpan" class="exp-item">
      <div v-if="col.expandDefine === true">
        <slot :name="col.prop" :param="{row, col, key}" />
      </div>
      <sa-expand-render v-else-if="col.expandRender !== undefined" :attrs="{row, col, key}" />
      <div v-else>
        <span class="exp-name">{{ col.label }}:</span>
        <sa-fold-content :value="handleSaContentValue(row, col, key)" :len="len" />
      </div>
    </el-col>
  </el-row>
</template>

<script>
import SaFoldContent from '@/components/SaFoldContent';
import SaExpandRender from '@/components/SaExpandRow/SaExpandRender';

export default {
  name: 'SaExpandRow',
  components: { SaFoldContent, SaExpandRender },
  props: {
    columns: {
      type: Array,
      required: true,
    },
    row: {
      type: Object,
      required: true,
    },
    len: {
      type: Number,
      default: 50,
    },
    colSpan: {
      type: Number,
      default: 8,
    },
    choices: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {
    handleSaContentValue(row, column, index) {
      if (Object.prototype.toString.call(column.formatter) === '[object Function]') {
        return column.formatter.call(this, row, column, index);
      }
      return row[column.prop];
    },
  },
};
</script>

<style lang="scss">
.sa-expand{
  background: #F8F8F8;
  padding: 6px;
  border: 1px solid #dee3e4;
  border-radius: 2px;
  .exp-item{
    margin-bottom: 8px;
  }
  .exp-name{
    font-weight: bold;
    padding-right: 4px;
    margin:2px 6px;
    min-width: 60px;
    display: inline-block;
  }
}
</style>
