<template>
  <el-tooltip v-if="content" :content="content" :placement="placement" :effect="effect">
    <el-button :class="btnClass" :icon="icon" :size="size" :type="type" :round="round" :circle="circle" @click="click">
      <slot></slot>
    </el-button>
  </el-tooltip>
  <el-button v-else :icon="icon" :size="size" :type="type" :circle="circle" @click="click">
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: 'ActionTipButton',
  props: {
    content: {
      type: [String, Number],
      default: '',
    },
    placement: {
      type: String,
      default: 'top',
    },
    effect: {
      type: String,
      default: 'dark',
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: true,
    },
    icon: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'small',
    },
    type: {
      type: String,
      default: '',
    },
    btnClass: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isOpen: true,
    };
  },
  methods: {
    click() {
      this.$emit('click', 1);
    },
  },
};
</script>
