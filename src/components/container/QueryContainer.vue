<template>
  <el-form class="query-container" v-bind="$attrs">
    <div class="required">
      <slot name="priority"></slot>
      <el-button class="circle-btn" :icon="isCollapse ? 'el-icon-arrow-down' : 'el-icon-arrow-up'" circle @click="handle_collapse" />
    </div>
    <el-collapse-transition>
      <div v-show="!isCollapse" class="optional">
        <slot></slot>
      </div>
    </el-collapse-transition>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    }
  },
  created() {
    console.log(this.$attrs)
  },
  methods: {
    handle_collapse() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="scss" scoped>
.query-container {
  position: relative;
  width: 100%;
  & >>> .el-form-item{
    margin: 4px;
    background-color: #f5f5f5;
    padding: 0 12px;
    border-radius: 4px;
    position: relative;
      &.is-required:not(.is-no-asterisk) {
        .el-form-item__label:before {
          position: absolute;
          top: -4px;
          left: -4px;
          content: '必填';
          font-size: 12px;
          line-height: 1;
          padding: 2px 4px;
          border-radius: 4px;
          color: #fff;
          background-color: $Danger;
        }
    }
  }
  .required {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    // margin-bottom: 4px;
    // padding-right: 36px;
    .circle-btn {
      position: relative;
      margin-top: 4px;
      padding: 0;
      width: 28px;
      height: 28px;
      flex-shrink: 0;
    }
  }
  .optional {
    display: flex;
    flex-wrap: wrap;
    padding-top: 4px;
  }
}
</style>
