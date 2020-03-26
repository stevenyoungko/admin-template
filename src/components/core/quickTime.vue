<template>
  <el-row class="quick-time">
    <el-button
      v-for="(item, index) in activeList"
      :key="`dbtn-${index}`"
      size="mini"
      :type="activeType === item.type ? 'primary' : 'plain'"
      @click="updateTime(item.type)"
    >{{ item.name }}</el-button>
  </el-row>
</template>

<script>
import * as date from '@/utils/date.js'
export default {
  model: {
    prop: 'dayRange',
    event: 'setDate'
  },
  props: {
    defaultTime: {
      type: String,
      default: 'today'
    },
    list: {
      type: Array,
      default: function() {
        return [
          'today',
          'yestoday',
          'thisWeek',
          'lastWeek'
        ]
      }
    }
  },
  data() {
    return {
      activeType: 'today',
      btnList: {
        'today': {
          name: '今日',
          type: 'today'
        },
        'yestoday': {
          name: '昨日',
          type: 'yestoday'
        },
        'thisWeek': {
          name: '本週',
          type: 'thisWeek'
        },
        'lastWeek': {
          name: '上週',
          type: 'lastWeek'
        },
        'thisMonth': {
          name: '本月',
          type: 'thisMonth'
        },
        'lastMonth': {
          name: '上月',
          type: 'lastMonth'
        },
        '14daysAgo': {
          name: '前14天',
          type: '14daysAgo'
        },
        '14daysAfter': {
          name: '后14天',
          type: '14daysAfter'
        },
        'lastYear': {
          name: '去年',
          type: 'lastYear'
        },
        'nextYear': {
          name: '明年',
          type: 'nextYear'
        }
      }
    }
  },
  computed: {
    activeList() {
      return this.list.map(item => {
        if (this.btnList[item]) {
          return this.btnList[item]
        }
      })
    }
  },
  watch: {
    '$attrs.dayRange'(val, oldval) {
      this.isEqualType(val)
    }
  },
  created() {
    this.updateTime(this.defaultTime)
  },
  methods: {
    setTimeWithBtn(type) {
      switch (type) {
        case 'today':
          return date.getTodayRange()
        case 'yestoday':
          return date.getYesterdayRange()
        case 'thisWeek':
          return date.getWeek()
        case 'lastWeek':
          return date.getLastWeek()
        case 'thisMonth':
          return date.getMonth()
        case 'lastMonth':
          return date.getLastMonth()
        case '14daysAgo':
          return date.getLast14Days()
        case '14daysAfter':
          return date.getNext14Days()
        case 'lastYear':
          return date.getLastYear()
        case 'nextYear':
          return date.getNextYear()
        default:
          console.warn('Type Not Found')
      }
    },
    updateTime(type) {
      this.$emit('setDate', this.setTimeWithBtn(type))
    },
    isEqualType(val) {
      for (let i = 0; i < this.activeList.length; i++) {
        if (date.isEqualDateRange(val, this.setTimeWithBtn(this.activeList[i].type))) {
          this.activeType = this.activeList[i].type
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
