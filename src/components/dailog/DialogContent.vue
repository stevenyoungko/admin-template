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

  .content {
    padding-bottom: 12px;
    max-height: 55vh;
    overflow-y: auto;
  }
  .footer {
    // border-top: 1px solid #c9d1da;
    padding-top: 12px;
    position: relative;
    display: flex;

    &.is-right {
      justify-content: flex-end;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -20px;
      background: #c9d1da;
      width: 150%;
      height: 1px;
    }
  }
}

</style>
