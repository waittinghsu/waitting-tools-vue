<script>
export default {
  name: 'SaTableColumn',
  inject: {
    pageProvideComponent: {
      default: {},
    },
    parentPageChoices: {
      default: {},
    },
  },
  props: {
    attrs: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
  render(h) {
    const { label: labelTemp, render: renderFunction, ...other } = this.attrs;
    const label = typeof labelTemp === 'function' ? labelTemp() : labelTemp;

    const attrs = { ...other, label };
    const scopedSlots = {};
    if (renderFunction) {
      scopedSlots.default = (scope) => renderFunction(h, scope, this);
    }
    return h(
      'el-table-column',
      {
        attrs,
        scopedSlots,
      },
      // attrs.isGroupHeader ? [attrs.render(h)] : null,
    );
  },
};
</script>
