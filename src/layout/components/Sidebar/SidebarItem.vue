<template>
  <div
    v-if="!item.hidden"
    :class="{'menu-wrapper': layoutType === 'xuanya'}"
  >
    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">

        <el-tooltip v-if="layoutType === 'default'" class="item" effect="light" :content="onlyOneChild.meta.title" placement="right" :open-delay="delay">
          <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
            <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />
          </el-menu-item>
        </el-tooltip>

        <el-menu-item v-else :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
          <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />
        </el-menu-item>

      </app-link>
    </template>

    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import { isExternal } from '@/utils/validate'
import Item from './Item'
import AppLink from './Link'
import FixiOSBug from './FixiOSBug'
import { mapState } from 'vuex'

export default {
  name: 'SidebarItem',
  components: { Item, AppLink },
  mixins: [FixiOSBug],
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    this.onlyOneChild = null
    return {
      delay: 500
    }
  },
  computed: {
    ...mapState({
      layoutType: state => state.settings.layoutType
    })
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        }
        // Temp set(will be used if only has one showing child)
        this.onlyOneChild = item
        return true
      })

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-wrapper {
  position: relative;
  padding: 0px;
  >>> .el-menu-item{
    height: 36px;
    line-height: 36px;
    border-right: 1px solid #d9d9d9;
    &:hover{
      background-color: $Light-80 !important;
    }
    span {
      margin-right: 16px;
      margin-left: 16px;
    }
  }
  >>> .el-submenu__title {
    height: 36px;
    line-height: 36px;
    border-right: 1px solid #d9d9d9;
    &:hover{
      background-color: $Light-80 !important;
    }
    span {
      margin-right: 16px;
      margin-left: 16px;
    }
  }
  >>> .el-submenu__icon-arrow {
    position: absolute;
    right: 8px;
    line-height: 16px;
  }
}
</style>
