<template>
  <div class="dialog-layout">
    <div class="content">
      <slot></slot>
    </div>

    <div v-if="$slots.footer" class="footer" :class="{'is-right': footerRight}">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DialogContent',
  props: {
    footerRight: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: this.show
    }
  },
  computed: {

  },
  watch: {
    show() {
      this.visible = this.show
    }
  },
  created() {
    // console.log(this.$attrs)
    // console.log(this.$slots)
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

.dialog-layout {
  position: relative;
  margin: -12px -12px 0 -12px;

  .content {
    padding: 12px;
    max-height: 55vh;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .footer {
    padding: 12px 14px 0 14px;
    position: relative;
    display: flex;

    &.is-right {
      justify-content: flex-end;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      // left: -14px;
      left: 0;
      background: #c9d1da;
      // width: calc(100% + 26px);
      width: 100%;
      height: 1px;
    }
  }
}

</style>
