<template>
  <div class="defualt-layout">
    <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    ></div>
    <navbar />
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div class="fixed-header tab-wrapper">
        <tags-view />
        <div v-if="!noBreadcrumb" class="bread-wrapper">
          <i class="el-icon-caret-right"></i>
          <breadcrumb class="breadcrumb-container" />
        </div>
      </div>
      <app-main />
      <right-panel v-if="showSettings" button-top="50%">
        <settings />
      </right-panel>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { AppMain, Navbar, Sidebar, TagsView } from '@/layout/components'
import ResizeMixin from '@/layout/mixin/ResizeHandler'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Breadcrumb: () => import('@/components/core/Breadcrumb'),
    Navbar,
    RightPanel: () => import('@/components/core/RightPanel'),
    Settings: () => import('@/layout/components/Settings/index'),
    Sidebar,
    TagsView
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      showSettings: state => state.settings.showSettings,
      fixedHeader: state => state.settings.fixedHeader,
      noBreadcrumb: state => state.settings.noBreadcrumb
    })
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
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
  .main-container {
    position: relative;
    padding: 63px 0 0 4px;
    background-color: $Intermediate;
    min-height: 100%;
    transition: margin-left 0.28s;
    margin-left: $sideBarWidth;
    overflow: hidden;
  }
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
  .tab-wrapper {
    // height: 64px;
    overflow: hidden;
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
      position: relative;
      z-index: 1;
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
  top: 48px;
  padding-top: 4px;
  z-index: 100;
  width: calc(100% - #{$sideBarWidth} - 4px);
  transition: width 0.28s;
  // box-shadow: 0 1px 4px rgba(0,21,41,.08);
  border-bottom: 1px solid #d9d9d9;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px - 4px);
}
.mobile .fixed-header {
  width: 100%;
}
.noBreadcrumb {
  .main-container {
    padding-top: 36px;
  }
  // .tab-wrapper {
  //   // height: 36px;
  // }
  .fixed-header {
    border-bottom: none;
  }
}
// .mobile .fixed-header {
//   // width: 100%;
// }
</style>
