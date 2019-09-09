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
        mode="vertical"
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
import { mapGetters } from 'vuex'
// import Logo from './Logo'
import Hamburger from '@/components/core/Hamburger'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

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
  created() {
    console.log(this.$router)
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    flatMenu(menu) {
      console.log('flat it?', menu)
      const newMenu = []
      const flat = (menu) => {
        Object.keys(menu).forEach((key) => {
          if (menu[key].hidden === true) {
            console.log('hidden', menu[key])
            return
          }
          if (menu[key].children) {
            console.log('has child', menu[key])
            flat(menu[key].children)
          } else if (menu[key].path && menu[key].name) {
            newMenu.push(menu[key])
          } else if (menu[key].meta && menu[key].meta.icon === 'link') {
            console.error(`請輸入 ${menu[key].path || menu[key].name} rotuerName routerPath \n 如不需要請設定meta.icon === 'link'`)
          }
        })
      }
      flat(menu)
      console.log(newMenu)
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
    bottom: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #fff;
    border-top: 1px solid #d9d9d9;
    .quick-search {
      flex: 1;
      padding: 0 8px;
    }
    .hamburger-container {
      position: relative;
      width: 50px;
      height: 50px;
      line-height: 50px;
      cursor: pointer;
      transition: background .3s;
      -webkit-tap-highlight-color:transparent;
      border-left: 1px solid #d9d9d9;
      &:hover {
        background: rgba(0, 0, 0, .025)
      }
    }
  }
}
</style>
