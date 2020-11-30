<template>
  <el-dropdown trigger="click" @command="handleCommand">
    <el-button size="small" type="primary">{{ $t('action') }}</el-button>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="item in dropItems" :key="item.command" :class="item.class" :command="item.command">
        <el-avatar :size="item.avatarSize" :class="item.avatarClass">
          <svg-icon :icon-class="item.svgIcon" :class="item.svgClass" :width="item.svgWidth" :height="item.svgNHeight"></svg-icon>
        </el-avatar>
        <span class="pl-16">{{ item.label() }}</span>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import _ from 'lodash';
export default {
  name: 'IconDropdown',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    filter: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      initDropItems: [
        {
          command: 'confirm',
          class: 'd-flex flex-row justify-center align-center',
          avatarSize: 22,
          avatarClass: 'green--bg bg--accent-4',
          svgClass: 'mt-1',
          svgIcon: 'checked',
          svgWidth: 20,
          svgNHeight: 20,
          label: () => this.$t('g_btn_confirm'),
        },
        {
          command: 'reject',
          class: 'd-flex flex-row justify-center align-center',
          avatarSize: 22,
          avatarClass: 'red--bg bg--accent-3',
          svgClass: 'mt-1',
          svgIcon: 'close',
          svgWidth: 20,
          svgNHeight: 20,
          label: () => this.$t('g_btn_reject'),
        },
        {
          command: 'remark',
          class: 'd-flex flex-row justify-center align-center',
          avatarSize: 22,
          avatarClass: 'blue--bg bg--lighten-1',
          svgClass: 'mt-1',
          svgIcon: 'note-add',
          svgWidth: 20,
          svgNHeight: 20,
          label: () => this.$t('g_btn_remark'),
        },
      ],
    };
  },
  computed: {
    dropItems() {
      const items = this.items.length === 0 ? _.cloneDeep(this.initDropItems) : this.items;
      return _.filter(items, o => !this.filter.includes(o.command));
    },
  },
  methods: {
    handleCommand(command) {
      this.$emit('command', command);
    },
  },
};
</script>
