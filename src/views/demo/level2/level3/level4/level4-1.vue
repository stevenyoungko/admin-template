<template>
  <div class="dashboard-container">
    <div class="dashboard-text">{{ this.$route.name }}</div>
  </div>
</template>

<script>
export default {
  name: 'Level4of1'
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
