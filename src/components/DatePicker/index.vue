<template lang="pug">
  el-date-picker(
    v-model="inputValue"
    :end-placeholder="$t('endDate')"
    :range-separator="$t('timeTo')"
    :start-placeholder="$t('startDate')"
    :default-time="defaultTime"
    :type="format"
    :size="size"
    clearable=false
    :picker-options="getPickerOptions()"
    :style="{ width: '400px' }"
    @change="change"
  )
</template>
<script>
import {
  getStartOfToday,
  getEndOfToday,
  getStartOfYesterday,
  getEndOfYesterday,
  getStartOfThisWeek,
  getEndOfThisWeek,
  getStartOfThisMonth,
  getStartOfLastWeek,
  getEndOfLastWeek,
  getEndOfThisMonth,
  getStartOfLastMonth,
  getEndOfLastMonth,
  formatToRFC3339,
  getTodayRFC3339,
} from '@/utils/date';

export default {
  model: {
    prop: 'date',
    event: 'update',
  },
  props: {
    date: {
      type: Array,
      default: () => [],
    },
    format: {
      type: String,
      default: 'yyyy-MM-dd',
    },
    options: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'small',
    },
    defaultTime: {
      type: Array,
      default: () => ['00:00:00', '23:59:59'],
    },
  },
  data() {
    return {
      dateStart: getTodayRFC3339(),
      dateEnd: getTodayRFC3339(),
    };
  },
  computed: {
    inputValue: {
      get() {
        return this.date;
      },
      set(value) {
        if (typeof value === 'object') {
          this.$emit('update', value !== null ? value : []);
        }
      },
    },
  },
  methods: {
    getPickerOptions(disableFuture = false) {
      if (!this.options) {
        return {};
      }
      return {
        shortcuts: [
          {
            text: window.i18n.t('today'),
            onClick(picker) {
              const start = getStartOfToday();
              const end = getEndOfToday();
              picker.$emit('pick', [start, end]);
            },
          },
          {
            text: window.i18n.t('yesterday'),
            onClick(picker) {
              const start = getStartOfYesterday();
              const end = getEndOfYesterday();
              picker.$emit('pick', [start, end]);
            },
          },
          {
            text: window.i18n.t('thisWeek'),
            onClick(picker) {
              const start = getStartOfThisWeek();
              const end = getEndOfThisWeek();
              picker.$emit('pick', [start, end]);
            },
          },
          {
            text: window.i18n.t('lastWeek'),
            onClick(picker) {
              const start = getStartOfLastWeek();
              const end = getEndOfLastWeek();
              picker.$emit('pick', [start, end]);
            },
          },
          {
            text: window.i18n.t('thisMonth'),
            onClick(picker) {
              const start = getStartOfThisMonth();
              const end = getEndOfThisMonth();
              picker.$emit('pick', [start, end]);
            },
          },
          {
            text: window.i18n.t('lastMonth'),
            onClick(picker) {
              const start = getStartOfLastMonth();
              const end = getEndOfLastMonth();
              picker.$emit('pick', [start, end]);
            },
          },
        ],
        firstDayOfWeek: 1,
        disabledDate: dateTime => {
          const now = new Date();
          return disableFuture ? dateTime > now : '';
        },
      };
    },
    change(event) {
      this.$emit('change', event);
    },
  },
};
</script>
