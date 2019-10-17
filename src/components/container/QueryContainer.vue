<template>
  <el-form ref="form" class="query-container" v-bind="$attrs">
    <div v-if="haspriority" class="priority">
      <slot name="priority"></slot>
      <el-button class="circle-btn" :icon="isCollapse ? 'el-icon-arrow-down' : 'el-icon-arrow-up'" @click="handle_collapse" />
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
  computed: {
    haspriority() {
      return this.$slots.priority && (this.$slots.priority).length > 0
    }
  },
  created() {
    // console.log(this.$attrs)
    // console.log(this.$slots)
  },
  methods: {
    handle_collapse() {
      this.isCollapse = !this.isCollapse
    },
    resetForm() {
      this.$refs.form.resetFields()
    },
    submitForm(cb) {
      this.$refs['form'].validate(valid => {
        if (valid) {
          cb()
        } else {
          return
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.query-container {
  position: relative;
  width: 100%;
  & >>> .el-form-item {
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
    .el-form-item__error{
      padding-top: 0;
      margin-top: -2px;
    }
  }
  & >>> .el-form-item__label{
    font-weight: 500;
  }
  & >>> .el-form-item__content{
    display: inline-flex;
    align-items: center;
    height: 40px;
    .el-form-item__error--inline{
      flex-shrink: 0;
      margin-top: 0;
    }
  }
  .priority {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    // margin-bottom: 4px;
    // padding-right: 36px;
    .circle-btn {
      position: absolute;
      right: 4px;
      top: 8px;
      // margin-top: 11px;
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
