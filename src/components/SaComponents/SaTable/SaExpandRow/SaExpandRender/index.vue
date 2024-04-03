<script>
export default {
  name: 'SaExpandRender',
  props: {
    attrs: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
  data() {
    return {
      aaa: {},
    };
  },
  render(h) {
    const { col = {}, row } = this.attrs;
    const label = typeof col?.label === 'function' ? col.label() : col?.label;
    // const attrs = { ...omit(col, ['expandRender']), label };
    // const scopedSlots = {};
    // console.log(1, label, this.attrs, (scope) => attrs.render(h, scope, this));
    // if (attrs.render) {
    //   scopedSlots.default = (scope) => attrs.render(h, scope, this);
    // }
    return h(
      'div',
      { class: 'd-flex flex-row' },
      [
        h('span', { class: 'exp-name' }, `${label}:`),
        col.expandRender ? col.expandRender(h, { row, column: col }, this) : '',
      ],
    );
  },
};
</script>
