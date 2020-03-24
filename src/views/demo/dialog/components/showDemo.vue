<template>
  <div class="show-demo-container">
    <div class="show-demo-content">
      <slot></slot>
    </div>
    <div class="show-demo-explain__content" :style="{'height': explainH}">
      <div ref="explainContent">
        <slot name="explain"></slot>
      </div>
    </div>
    <div class="show-demo-explain__toggle" @click="showExplain = !showExplain">
      <span>
        <i :class="{'el-icon-caret-bottom': !showExplain, 'el-icon-caret-top': showExplain}"></i> {{ showExplain ? '隐藏说明' : '展开说明' }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowDemo',
  data() {
    return {
      showExplain: false
    }
  },
  computed: {
    explainH() {
      return this.showExplain ? `${this.$refs.explainContent.clientHeight}px` : '0'
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.show-demo {
  &-container {
    margin: 20px;
    border: solid #ebebeb 1px;
    border-radius: 3px;
  }

  &-content {
    padding: 24px;
  }

  &-explain {
    &__toggle {
      border-top: 1px solid #eaeefb;
      height: 44px;
      line-height: 44px;
      box-sizing: border-box;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      text-align: center;
      margin-top: -1px;
      color: #d3dce6;
      cursor: pointer;
      position: relative;
      transition: 0.3s;

      &:hover {
        color: $Primary;
      }
    }

    &__content {
      background-color: #fafafa;
      border-top: 1px solid #eaeefb;
      overflow: hidden;
      transition: height .2s;
    }
  }
}
</style>
