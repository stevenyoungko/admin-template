<template>
  <div class="navbar">
    <!-- <logo v-if="true" :collapse="false" /> -->
    <router-link to="/">
      <div class="logo-wrapper">
        <!-- <img class="logo-img" src="" alt=""> -->
        <svg class="logo-img" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Rectangle" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <rect fill="#FFFFFF" fill-rule="nonzero" x="0" y="0" width="100" height="100" rx="2" />
            <path id="P" d="M16.6666667,20.8333333 L36.6666667,20.8333333 C48.2882883,20.8333333 54.1666667,26.7973856 54.1666667,38.7254902 C54.1666667,50.7352941 48.2882883,56.7810458 36.5315315,56.7810458 L24.5720721,56.7810458 L24.5720721,79.1666667 L16.6666667,79.1666667 L16.6666667,20.8333333 Z M24.1666667,29.1666667 L24.1666667,50 L36.1197917,50 C39.7760417,50 42.4479167,49.1319444 44.1354167,47.5694444 C45.8229167,45.9201389 46.6666667,43.2291667 46.6666667,39.4965278 C46.6666667,35.7638889 45.7526042,33.1597222 44.0651042,31.5972222 C42.3776042,29.9479167 39.7057292,29.1666667 36.1197917,29.1666667 L24.1666667,29.1666667 Z" fill="#1991EB" fill-rule="nonzero" />
            <path id="S" d="M74.8519459,25 C78.4052453,25 81.1971235,25.7637017 83.1852792,27.3360288 C85.3003384,28.9982031 86.5270728,31.6037736 86.823181,35.1078167 L81.9162437,35.1078167 C81.4932318,33.131177 80.6895093,31.6936208 79.5896785,30.8400719 C78.4898477,29.9415993 76.7978003,29.5372866 74.5981387,29.5372866 C72.6945854,29.5372866 71.2563452,29.8068284 70.2411168,30.3908356 C68.9720812,31.06469 68.3798646,32.1877808 68.3798646,33.7151842 C68.3798646,35.0628931 69.0566836,36.1859838 70.4949239,36.9946092 C71.1294416,37.3539982 72.8637902,38.0278527 75.6556684,38.9712489 C79.7588832,40.3189578 82.3815567,41.3971249 83.5659898,42.115903 C86.1886633,43.7780773 87.5,46.0691824 87.5,49.034142 C87.5,51.9092543 86.4424704,54.2003594 84.3274112,55.8625337 C82.2123519,57.4797844 79.2089679,58.3333333 75.3595601,58.3333333 C71.6370558,58.3333333 68.7182741,57.5696316 66.6455161,56.0422282 C64.107445,54.1554358 62.7115059,51.1904762 62.5,47.1024259 L67.4069374,47.1024259 C67.7453469,49.5283019 68.5490694,51.2803235 69.8604061,52.3135669 C71.0448393,53.2120395 72.8637902,53.7061995 75.3595601,53.7061995 C77.5592217,53.7061995 79.3358714,53.3018868 80.6049069,52.5381851 C81.8739425,51.7295597 82.5507614,50.6963163 82.5507614,49.3486074 C82.5507614,47.6415094 81.5778342,46.2938005 79.7165821,45.3054807 C79.1243655,44.9910153 77.178511,44.2722372 73.8367174,43.1940701 C70.1142132,41.9362084 67.7876481,41.0377358 66.8993232,40.4986523 C64.572758,39.0161725 63.4306261,36.8598383 63.4306261,34.0296496 C63.4306261,31.1994609 64.5304569,28.9532794 66.8147208,27.3360288 C68.92978,25.7637017 71.5947547,25 74.8519459,25 Z" stroke="#1991EB" stroke-width="0.3" fill="#1991EB" fill-rule="nonzero" />
            <rect fill="#1991EB" fill-rule="nonzero" x="58.3333333" y="75" width="33.3333333" height="4.16666667" />
          </g>
        </svg>
        {{ logoName }}
      </div>
    </router-link>
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <svg-icon icon-class="user" class-name="user-avatar" fill="#fff" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <el-dropdown-item>
            <span style="display:block;" @click="logout">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import Logo from '../components/Sidebar/Logo'

export default {
  components: {
    // Logo
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ]),
    logoName() {
      return this.$store.state.settings.logoName
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
$navHeight: 48px;
.navbar {
  height: $navHeight;
  overflow: hidden;
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  right: 0;
  background: $navBarBg;
  padding-left: $sideBarWidth;
  .breadcrumb-container {
    float: left;
  }
  .logo-wrapper{
    min-width: $sideBarWidth;
    height: $navHeight;
    color: $logoColor;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 16px;
    font-weight: 400;
    .logo-img{
      width: 24px;
      height: 24px;
      display: inline-block;
      margin-right: 8px;
    }
  }
  .right-menu {
    float: right;
    height: 100%;
    line-height: $navHeight;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 15px;
      height: 100%;
      .avatar-wrapper {
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        .user-avatar {
          cursor: pointer;
          width: 30px;
          height: 30px;
          padding: 5px;
          border-radius: 50%;
          background-color: #fff;
          color: $navBarBg;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
          color: #fff;
        }
      }
    }
  }
}
</style>
