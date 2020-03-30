<template>
  <div class="side-bar">
    <!-- <logo v-if="showLogo" :collapse="isCollapse" /> -->
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        :mode="menuMode"
        :class="{'sidebar--flex': menuMode === 'horizontal'}"
      >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
    <div class="quick-side-bar">
      <div v-if="sidebar.opened" class="quick-search">
        <el-select
          v-model="searchBarValue"
          filterable
          reserve-keyword
          placeholder="请输入关键词"
          size="mini"
          @change="$router.push({name: $event})"
        >
          <el-option
            v-for="menuItem in quickMenu"
            :key="menuItem.name"
            :label="menuItem.meta && menuItem.meta.title"
            :value="menuItem.name"
          />
        </el-select>
      </div>
      <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
// import Logo from './Logo'
import Hamburger from '@/components/core/Hamburger'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'
import { isExternal } from '@/utils/validate'

export default {
  components: {
    SidebarItem,
    Hamburger
    // Logo
  },
  data() {
    return {
      searchBarValue: ''
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    ...mapState({
      layoutType: state => state.settings.layoutType
    }),
    menuMode() {
      switch (this.layoutType) {
        case 'default':
          return 'vertical'
        case 'xuanya':
          return 'horizontal'
        default:
          console.error('请带 default 或 xuanya')
          return 'vertical'
      }
    },
    routes() {
      return this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    },
    quickMenu() {
      return this.flatMenu(this.routes)
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    flatMenu(menu) {
      const newMenu = []
      const flat = (menu) => {
        Object.keys(menu).forEach((key) => {
          if (menu[key].hidden === true) {
            return
          }
          if (menu[key].children) {
            flat(menu[key].children)
          } else if (!menu[key].component) {
            return
          } else if (menu[key].path && menu[key].name && !isExternal(menu[key].path)) {
            newMenu.push(menu[key])
          } else if (!isExternal(menu[key].path) || !menu[key].path || !menu[key].meta || !menu[key].meta.title) {
            console.error(`${menu[key].path} 請輸入 name, meta.title`)
          }
        })
      }
      flat(menu)
      return newMenu
    }
  }
}
</script>
<style lang="scss" scoped>
.side-bar{
  .quick-side-bar {
    position: absolute;
    left: 0;
    bottom: 48px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 36px;
    background-color: #fff;
    border-top: 1px solid #d9d9d9;
    .quick-search {
      border-right: 1px solid #d9d9d9;
      flex: 1;
      height: 100%;
      padding: 0 8px;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      & >>> .el-input--mini {
        .el-input__inner {
          height: 24px;
          line-height: 24px;
        }
       .el-input__icon {
          line-height: 24px;
          height: 24px;
        }
      }
      & >>> .el-input--suffix .el-input__inner {
        padding-left: 8px;
      }
    }
    .hamburger-container {
      position: relative;
      width: 36px;
      height: 36px;
      line-height: 36px;
      margin: 0 auto;
      cursor: pointer;
      transition: background .3s;
      -webkit-tap-highlight-color:transparent;
      &:hover {
        background: rgba(0, 0, 0, .025)
      }
    }
  }
}
.sidebar--flex {
  display: flex;
  overflow-x: inherit;
}
</style>
