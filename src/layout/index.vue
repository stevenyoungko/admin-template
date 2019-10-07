<template>
  <div
    v-loading.fullscreen.lock="globalLoading"
    :class="classObj"
    class="app-wrapper"
    element-loading-text="加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.7)"
  >
    <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <navbar />
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div class="fixed-header tab-wrapper">
        <tags-view />
        <div v-if="!noBreadcrumb" class="bread-wrapper">
          <i class="el-icon-caret-right" />
          <breadcrumb class="breadcrumb-container" />
        </div>
      </div>
      <app-main />
      <right-panel v-if="showSettings">
        <settings />
      </right-panel>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { AppMain, Navbar, Sidebar, TagsView } from './components';
import ResizeMixin from './mixin/ResizeHandler';

export default {
  name: 'Layout',
  components: {
    AppMain,
    Breadcrumb: () => import('@/components/core/Breadcrumb'),
    Navbar,
    RightPanel: () => import('@/components/core/RightPanel'),
    Settings: () => import('./components/Settings/index'),
    Sidebar,
    TagsView,
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      showSettings: state => state.settings.showSettings,
      fixedHeader: state => state.settings.fixedHeader,
      noBreadcrumb: state => state.settings.noBreadcrumb,
      globalLoading: state => state.app.globalLoading,
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile',
        noBreadcrumb: this.noBreadcrumb,
      };
    },
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  padding-top: 50px;
  .main-container {
    position: relative;
    padding: 64px 4px 0 4px;
    background-color: $Intermediate;
    min-height: 100%;
    transition: margin-left 0.28s;
    margin-left: $sideBarWidth;
  }
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
  .tab-wrapper {
    height: 64px;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background-color: $Intermediate;
    }
    .bread-wrapper {
      display: flex;
      align-items: center;
      height: calc(70px - 44px);
      padding-left: 4px;
      background-color: #fff;
      .el-icon-caret-right {
        color: #666;
      }
    }
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 50px;
  padding-top: 4px;
  right: 4px;
  z-index: 100;
  width: calc(100% - #{$sideBarWidth} - 8px);
  transition: width 0.28s;
  // box-shadow: 0 1px 4px rgba(0,21,41,.08);
  border-bottom: 1px solid #d9d9d9;
}

.hideSidebar .fixed-header {
  width: calc(100% - 62px);
}
.noBreadcrumb {
  .main-container {
    padding-top: 41px;
  }
  .tab-wrapper {
    height: 44px;
  }
  .fixed-header {
    border-bottom: none;
  }
}
.mobile .fixed-header {
  width: 100%;
}
</style>
