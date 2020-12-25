<template lang="pug">
  Dialog(ref="dialog" :title="$t('withdrawalCondition')" width="80vw")
    template(v-slot:dialog-body)
      WithdrawalCondition(ref="WithdrawalCondition" :uuid="uuid")
</template>

<script>
import Dialog from '@/components/Dialog';
import WithdrawalCondition from '@/views/payment/withdrawal-list/components/WithdrawalCondition';
import { mapGetters } from 'vuex';
export default {
  components: {
    Dialog,
    WithdrawalCondition,
  },
  data() {
    return {
      uuid: null,
    };
  },
  computed: {
    ...mapGetters({ loading: 'app/loading' }),
  },
  mounted() {
    this.$watch(
      () => this.$refs.dialog.dialogVisible,
      val => !val || this.fetchData(),
    );
  },
  methods: {
    async fetchData() {
      await this.$refs.WithdrawalCondition.fetchData();
    },
    show({ uuid }) {
      this.uuid = uuid;
      this.$refs.dialog.show();
    },
  },
};
</script>
