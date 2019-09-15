<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews" :max="8">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>
<script>

export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  height: calc(100vh - 120px);
  width: 100%;
  position: relative;
  background-color: #fff;
  padding: 0;
  overflow-x: hidden;
  overflow-x: auto;
  @include scrollBar;
}

</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
