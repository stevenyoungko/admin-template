<template>
  <button
    class="ps-button"
    :disabled="disabled || loading"
    :class="[
      colorClass,
      outlineClass,
      roundClass,
      circleClass,
      {'ps-icon--left': !iconPosition},
      {'ps-icon--right': iconPosition},
    ]"
    @click="handleClick"
  >
    <slot name="left-loading">
      <i v-if="!loadingRight && loading && !loadingIcon" class="el-icon-loading"></i>
      <svg-icon v-if="!loadingRight && loading && loadingIcon" :icon-class="loadingIcon" />
    </slot>
    <slot name="left-icon">
      <svg-icon v-if="icon && !iconPosition" :icon-class="icon" />
    </slot>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
    <slot name="right-icon">
      <svg-icon v-if="icon && iconPosition" :icon-class="icon" />
    </slot>
    <slot name="right-loading">
      <i v-if="loadingRight && loading && !loadingIcon" class="el-icon-loading"></i>
      <svg-icon v-if="loadingRight && loading && loadingIcon" :icon-class="loadingIcon" />
    </slot>
  </button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    outline: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'primary'
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loadingIcon: {
      type: String,
      default: ''
    },
    loadingRight: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    iconPosition: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      colors: [
        'primary', 'success', 'warning', 'danger', 'intermediate'
      ]
    }
  },
  computed: {
    colorClass() {
      // if (this.colors.includes(this.type.toLowerCase())) {
      //   const className = `ps-button--${this.type.toLowerCase()}`
      //   return className
      // }
      // return 'ps-button--intermediate'
      return this.colors.includes(this.type.toLowerCase()) ? `ps-button--${this.type.toLowerCase()}` : 'ps-button--intermediate'
    },
    outlineClass() {
      if (this.outline) {
        if (this.colors.includes(this.type.toLowerCase())) {
          const className = `ps-button--outline--${this.type.toLowerCase()}`
          return className
        }
      }
      return false
    },
    roundClass() {
      if (this.round) {
        if (this.colors.includes(this.type.toLowerCase())) {
          const className = `ps-button--round--${this.type.toLowerCase()}`
          return className
        }
      }
      return false
    },
    circleClass() {
      if (this.circle) {
        return 'ps-button--circle'
      }
      return false
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
<style lang="scss" scoped>
.ps-button {
  color: $white;
  font-size: 12px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  background: $white;
  border: 1px solid #DCDFE6;
  box-sizing: border-box;
  outline: none;
  margin: 2px;
  padding: 8px 16px;
  transition: 300ms;
  &--primary {
    background-color: $Primary;
    &:hover{
      background-color: $Primary-hover;
    }
    &:active{
      background-color: $Primary-active;
    }
    &:disabled {
      background-color: $Primary-light10;
      cursor: not-allowed;
      color: $Black-40;
    }
  }
  &--success {
    background-color: $Success;
    &:hover{
      background-color: $Success-hover;
    }
    &:active{
      background-color: $Success-active;
    }
    &:disabled {
      background-color: $Success-light10;
      cursor: not-allowed;
      color: $Black-40;
    }
  }
  &--warning {
    background-color: $Warning;
    &:hover{
      background-color: $Warning-hover;
    }
    &:active{
      background-color: $Warning-active;
    }
    &:disabled {
      background-color: $Warning-light10;
      cursor: not-allowed;
      color: $Black-40;
    }
  }
  &--danger {
    background-color: $Danger;
    &:hover{
      background-color: $Danger-hover;
    }
    &:active{
      background-color: $Danger-active;
    }
    &:disabled {
      background-color: $Danger-light10;
      cursor: not-allowed;
      color: $Black-40;
    }
  }
  &--intermediate {
    background-color: $Intermediate;
    &:hover{
      background-color: $Intermediate-hover;
    }
    &:active{
      background-color: $Intermediate-active;
    }
    &:disabled {
      background-color: $Intermediate-light10;
      cursor: not-allowed;
      color: $Black-40;
    }
  }
  &--outline {
    &--primary {
      color: $Primary;
      background: $white;
      border: 1px solid $Primary;
      &:hover {
        color: $white;
        background: $Primary;
      }
    }
    &--success {
      color: $Success;
      background: #fff;
      border: 1px solid $Success;
      &:hover {
        color: $white;
        background: $Success;
      }
    }
    &--warning {
      color: $Warning;
      background: #fff;
      border: 1px solid $Warning;
      &:hover {
        color: $white;
        background: $Warning;
      }
    }
    &--danger {
      color: $Danger;
      background: #fff;
      border: 1px solid $Danger;
      &:hover {
        color: $white;
        background: $Danger;
      }
    }
    &--intermediate {
      color: $Intermediate;
      background: #fff;
      border: 1px solid $Intermediate;
      &:hover {
        color: $white;
        background: $Intermediate;
      }
    }
  }
  &--circle {
    border-radius: 50%;
    padding: 6px;
    font-size: 16px;
    svg {
      margin: 0px  !important;
    }
    span > i, svg{
      margin: 0px  !important;
    }
  }
  .ps-button--round {
    &--primary {
      color: $Primary;
      background: $white;
      border: 1px solid $Primary;
      border-radius: 24px;
      &:hover {
        color: $white;
        background: $Primary;
      }
    }
    &--success {
      color: $Success;
      background: #fff;
      border: 1px solid $Success;
      border-radius: 24px;
      &:hover {
        color: $white;
        background: $Success;
      }
    }
    &--warning {
      color: $Warning;
      background: #fff;
      border: 1px solid $Warning;
      border-radius: 24px;
      &:hover {
        color: $white;
        background: $Warning;
      }
    }
    &--danger {
      color: $Danger;
      background: #fff;
      border: 1px solid $Danger;
      border-radius: 24px;
      &:hover {
        color: $white;
        background: $Danger;
      }
    }
    &--intermediate {
      color: $Intermediate;
      background: #fff;
      border: 1px solid $Intermediate;
      border-radius: 24px;
      &:hover {
        color: $white;
        background: $Intermediate;
      }
    }
  }
}
.ps-icon {
  &--left {
    i, svg {
      margin-right: 4px;
    }
  }
  &--right {
    i, svg {
      margin-left: 4px;
    }
  }
}
</style>
