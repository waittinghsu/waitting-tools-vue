<template lang="pug">
  Card(:header-title="$t('batchDeposit')", header-icon='el-icon-search', :closeable='false')
    .main__container
      .box__w100
        .block
          .demonstration.upload__file__btn
            div
              span.color__red *
              |  {{ $t('uploadFile') }}
            el-button(size="small" type="primary" @click="handleUploadFile") {{ $t('payment_batchDeposit_chooseFile') }}
          div
            p ( {{ $t('payment_batchDeposit_upload') }} CSV {{ $t('file') }}, {{ $t('payment_batchDeposit_columns') }}：{{ $t( 'payment_batchDeposit_username' ) }}, {{ $t('payment_batchDeposit_amount') }}. {{ $t( 'payment_batchDeposit_downloadSample') }}: <span class="handle__click" @click="handleClick">{{ $t ('payment_batchDeposit_clickHere') }}</span> )
      .box__w50
        .block
          .demonstration
            span.color__red *
            |  {{ $t('date') }}
          el-date-picker(v-model='date', type='datetime', placeholder='选择日期时间', default-time='12:00:00')
      .box__w50
        .block
          .demonstration
            span.color__red *
            |  {{ $t('byCollectionAccount') }}
          el-select(v-model='accountList.value', placeholder='请选择')
            el-option-group(v-for='group in accountList.options', :key='group.label', :label='group.label')
              el-option(v-for='item in group.options', :key='item.value', :label='item.label', :value='item.value')
      .box__w50
        .block
          .demonstration
            span.color__red *
            | {{ $t('internalNote') }}
          el-input(v-model='insideNote', type='textarea', :rows='6', placeholder='')
      .box__w50
        .block
          .demonstration
            span.color__red *
            | {{ $t('externalNote') }}
          el-input(v-model='outsideNote', type='textarea', :rows='6', placeholder='')
    .flex__box
      .radio__box
        .title
          span.color__red *
          |  {{ $t('status') }}
        el-radio(v-model='radio', label='1') {{ $t('pending') }}
        el-radio(v-model='radio', label='2') {{ $t('success') }}
      el-button(slot='reference', type='primary' @click="handleAdd()") {{ $t('add') }}
</template>

<script>
import Card from '@/components/Card';

export default {
  name: 'BatchDeposit',

  components: {
    Card,
  },

  data() {
    return {
      insideNote: '',
      outsideNote: '',
      radio: '1',
      bankAccountName: '',
      checked: true,
      date: '',
      playerAccountName: '',
      accountList: {
        options: [
          {
            label: 'HSBC',
            options: [
              {
                value: 'Shanghai',
                label: '21165xxx666',
              },
              {
                value: 'Beijing',
                label: '78555xxx444',
              },
            ],
          },
          {
            label: '第一銀行',
            options: [
              {
                value: 'Chengdu',
                label: '66661xxx456',
              },
              {
                value: 'Shenzhen',
                label: '12224xxx888',
              },
              {
                value: 'Guangzhou',
                label: '48694xxx888',
              },
              {
                value: 'Dalian',
                label: '56334xxx888',
              },
            ],
          },
        ],
        value: '',
      },
    };
  },
  mounted() {
    this.date = new Date();
  },
  methods: {
    handleUploadFile() {
      console.log('handleUploadFile');
    },

    handleClick() {
      console.log('handleClick');
    },

    handleAdd() {
      console.log('handleAdd');
    },
  },
};
</script>

<style lang="scss" scoped>
.el-date-editor.el-input {
  width: 100%;
}
.el-input,
.el-select {
  padding-top: 5px;
  padding-bottom: 5px;
}
.el-select {
  display: block;
}
.el-radio {
  margin-right: 10px;
}
.flex__box {
  display: flex;
  justify-content: flex-end;
  padding-right: 45px;
  padding-top: 20px;
  align-items: center;
}
.box__w50 {
  width: 48%;
  padding-left: 40px;
  padding-top: 40px;
}
.box__w100 {
  padding-left: 40px;
  padding-top: 40px;
  width: 96%;
}
.color__red {
  color: red;
}
.main__container {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  .tips__box {
    width: 100%;
    text-align: right;
    padding-right: 44px;
  }
}

.radio__box {
  display: flex;
  justify-content: flex-end;
  padding-right: 45px;
  .title {
    padding-right: 20px;
  }
}

.upload__file__btn {
  display: flex;
  flex-direction: column;

  button {
    width: 120px;
    margin-top: 20px;
  }
}

.handle__click {
  color: $menuActiveText;
}
</style>
