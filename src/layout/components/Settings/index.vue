<template>
  <div class="drawer-container">
    <div>
      <h3 class="drawer-title">Page style setting</h3>

      <div class="drawer-item">
        <span>Theme Color</span>
        <theme-picker style="float: right;height: 26px;margin: -3px 8px 0 0;" @change="themeChange" />
      </div>
      <div class="drawer-item">
        <span>No Breadcrumb</span>
        <el-switch v-model="noBreadcrumb" size="mini" class="drawer-switch" />
      </div>
      <div class="drawer-item ">
        <span>Layout</span>
        <el-select v-model="layoutChange" placeholder="请选择" :popper-append-to-body="false" size="small" class="drawer-switch" style="width: 160px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          /></el-select>
      </div>
    </div>
  </div>
</template>

<script>
import ThemePicker from '@/components/core/ThemePicker'

export default {
  components: { ThemePicker },
  data() {
    return {
      options: [
        {
          value: 'default',
          label: 'default (橫式)'
        },
        {
          value: 'xuanya',
          label: 'xuanya (直式)'
        }
      ]
    }
  },
  computed: {
    noBreadcrumb: {
      get() {
        return this.$store.state.settings.noBreadcrumb
      },
      set(value) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'noBreadcrumb',
          value: value
        })
      }
    },
    layoutChange: {
      get() {
        return this.$store.state.settings.layoutType
      },
      set(value) {
        localStorage.setItem('layoutStatus', value)
        this.$store.dispatch('settings/setLayoutType', value)
      }
    }
  },
  methods: {
    themeChange(val) {
      this.$store.dispatch('settings/changeSetting', {
        key: 'theme',
        value: val
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer-container {
  padding: 12px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  .drawer-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, .85);
    font-size: 14px;
    line-height: 22px;
  }

  .drawer-item {
    color: rgba(0, 0, 0, .65);
    font-size: 14px;
    padding: 12px 0;
    >>> .el-select-dropdown {
      left: 87px !important;
    }
  }

  .drawer-switch {
    float: right
  }
}
</style>
