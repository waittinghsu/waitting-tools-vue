<template>
  <span class="tag-wrap" :style="{ background: tagData.tagColor, color: fontColor }">
    {{ tagData.tagName }}
  </span>
</template>

<script>
import { getForegroundColor } from '@/utils';

export default {
  name: 'Tag',
  props: {
    tagData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    fontColor() {
      return getForegroundColor(this.tagData.tagColor);
    },
  },
};
</script>

<style lang="scss" scoped>
.tag-wrap {
  display: inline-block;
  padding: 5px;
  margin: 5px;
}
</style>
