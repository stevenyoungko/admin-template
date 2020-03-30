<template>
  <div
    v-loading.fullscreen.lock="globalLoading"
    :class="classObj"
    class="app-wrapper"
    element-loading-text="加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.7)"
  >
    <Default v-if="layoutType === 'default'" />
    <XuanYa v-if="layoutType === 'xuanya'" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Layout',
  components: {
    Default: () => import ('./type/default'),
    XuanYa: () => import('./type/xuanya')
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      noBreadcrumb: state => state.settings.noBreadcrumb,
      globalLoading: state => state.app.globalLoading,
      layoutType: state => state.settings.layoutType
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile',
        noBreadcrumb: this.noBreadcrumb
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  padding-top: 48px;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

// .drawer-bg {
//   background: #000;
//   opacity: 0.3;
//   width: 100%;
//   top: 0;
//   height: 100%;
//   position: absolute;
//   z-index: 999;
// }

// .fixed-header {
//   position: fixed;
//   top: 48px;
//   padding-top: 4px;
//   z-index: 100;
//   width: calc(100% - #{$sideBarWidth} - 4px);
//   transition: width 0.28s;
//   // box-shadow: 0 1px 4px rgba(0,21,41,.08);
//   border-bottom: 1px solid #d9d9d9;
// }

// .hideSidebar .fixed-header {
//   width: calc(100% - 54px - 4px);
// }
// .mobile .fixed-header {
//   width: 100%;
// }
// .noBreadcrumb {
//   .main-container {
//     padding-top: 36px;
//   }
//   // .tab-wrapper {
//   //   // height: 36px;
//   // }
//   .fixed-header {
//     border-bottom: none;
//   }
// }
// // .mobile .fixed-header {
// //   // width: 100%;
// // }
</style>
