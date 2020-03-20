<template>
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
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar-container {
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
</style>
