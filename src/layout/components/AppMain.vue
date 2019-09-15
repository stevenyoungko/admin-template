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
  },
  watch: {
    $route: {
      handler: function(route) {
        // keep-alive 驗證
        if (process.env.NODE_ENV !== 'development') return
        if (route.meta && !route.meta.noTagViews) {
          if ((route.meta && route.meta.noCache) && !route.matched[route.matched.length - 1].components.default.name) {
            console.warn(`[${route.path}]\nLayout下的views 請設置 component name\n如不需要cache 請設置route.meta.noCache`)
          }
          if (route.name !== route.matched[route.matched.length - 1].components.default.name) {
            console.error(`[${route.path}]\nLayout下的views component name 請與 router nameㄧ致,\n如不需要cache 請設置route.meta.noCache`)
          }
        }
      },
      immediate: true
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
