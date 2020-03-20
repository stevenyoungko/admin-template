<template>
  <div class="ps-dialog-container">
    <div class="ps-dialog-container__content">
      <slot></slot>
    </div>

    <div v-if="$slots.footer" class="ps-dialog-container__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PSDialogContainer',
  data() {
    return {

    }
  },
  computed: {

  },
  watch: {

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

.ps-dialog-container {
  position: relative;
  margin: -12px -12px 0 -12px;

  &__content {
    padding: 12px;
    max-height: 55vh;
    overflow-x: hidden;
    overflow-y: auto;
    @include scrollBar;
  }

  &__footer {
    padding: 12px 14px 0 14px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background: #c9d1da;
      width: 100%;
      height: 1px;
    }
  }
}

</style>
