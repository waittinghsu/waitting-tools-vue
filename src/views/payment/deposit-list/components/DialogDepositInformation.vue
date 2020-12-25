<template lang="pug">
  Dialog(ref="dialog" :title="$t('depositInfo')" width="80vw")
    template(v-slot:dialog-body)
      DepositInformation(ref="DepositInformation" :uuid="uuid")
</template>

<script>
import Dialog from '@/components/Dialog';
import DepositInformation from '@/views/payment/deposit-list/components/DepositInformation';
import { mapGetters } from 'vuex';
export default {
  name: 'DialogDepositInformation',
  components: {
    Dialog,
    DepositInformation,
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
      await this.$refs.DepositInformation.fetchData();
    },
    show({ uuid }) {
      this.uuid = uuid;
      this.$refs.dialog.show();
    },
  },
};
</script>
