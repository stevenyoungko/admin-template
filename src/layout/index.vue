<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>
    <navbar />
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div class="fixed-header tab-wrapper">
        <tags-view />
        <div class="bread-wrapper">
          <i class="el-icon-caret-right"></i>
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
import Breadcrumb from '@/components/core/Breadcrumb'
import { AppMain, Navbar, Sidebar, TagsView } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import { mapState } from 'vuex'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    RightPanel: () => import('@/components/core/RightPanel'),
    Settings: () => import('./components/Settings/index'),
    Sidebar,
    TagsView,
    Breadcrumb
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      showSettings: state => state.settings.showSettings,
      fixedHeader: state => state.settings.fixedHeader
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    padding-top: 50px;
    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
    .tab-wrapper{
      background-color: #fff;
      height: 70px;
      &:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background-color: #d9d9d9;
      }
      .bread-wrapper{
        display: flex;
        align-items: center;
        height: calc(70px - 44px);
        padding-left: 4px;
        .el-icon-caret-right{
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
    width: calc(100% - 62px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
</style>
