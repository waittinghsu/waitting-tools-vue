<template lang="pug">
  Card(v-loading="loading" :header-title="$t('newWithdrawal')", svg-icon='minus', :closeable='false')
    NewWithdrawalForm(ref="NewWithdraw"  @postAdd="handleAdd")
</template>

<script>
import Card from '@/components/Card/index';
import NewWithdrawalForm from '@/views/payment/new-withdrawal/components/NewWithdrawalForm';
import { mapGetters } from 'vuex';
export default {
  name: 'NewWithdraw',
  components: {
    Card,
    NewWithdrawalForm,
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
        this.$refs.NewWithdraw.initForm();
      }
    },
  },
};
</script>
