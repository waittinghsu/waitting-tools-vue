<template lang="pug">
  Card(v-loading="loading" :header-title="$t('newDeposit')", svg-icon="plus", :closeable='false')
    NewDepositForm(ref="newDeposit" @postAdd="handleAdd")
</template>

<script>
import Card from '@/components/Card/index';
import NewDepositForm from '@/views/payment/new-deposit/components/NewDepositForm';
import { mapGetters } from 'vuex';
export default {
  name: 'NewDeposit',
  components: {
    Card,
    NewDepositForm,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ loading: 'app/loading' }),
  },
  methods: {
    handleAdd({ status }) {
      if (status) {
        this.$refs.newDeposit.initForm();
      }
    },
  },
};
</script>
