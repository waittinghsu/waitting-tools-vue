<template>
  <vue-json-pretty :path="'res'" :data="JsonData" class="sa-json-pretty" show-length show-select-controller />
</template>

<script>
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';
import { isJson } from '@/utils/validate';

export default {
  name: 'SaJsonPretty',
  components: { VueJsonPretty },
  props: {
    data: {
      required: true,
      type: [String, Object],
      default: '',
    },
  },
  computed: {
    JsonData() {
      // 如果是string 先檢測字串是否為json格式
      if (isJson(this.data) && Object.prototype.toString.call(this.data)) {
        return JSON.parse(this.data);
      }
      return this.data;
    },
  },
};
</script>
<style lang="scss">
.sa-json-pretty {
  .vjs-key, {
    white-space: nowrap!important;
  }
  .vjs-tree__node.is-highlight, .vjs-tree__node:hover{
    background-color: #4a0202;
  }
}
</style>
