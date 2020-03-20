<template>
  <div>
    <div class="clock">系统时间: {{ time }}</div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      time: moment().add(1, 'seconds').format('YYYY-MM-DD HH:mm:ss')
    }
  },
  mounted() {
    setInterval(() => { this.tickTime() }, 1000)
  },
  methods: {
    tickTime() {
      this.time = moment().add(1, 'seconds').format('YYYY-MM-DD HH:mm:ss')
    }
  }
}
</script>

<style lang="scss" scoped>
  .clock{
    color: #fff;
    font-size: 14px;
    width: 210px;
  }
</style>
