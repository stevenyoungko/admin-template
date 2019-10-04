<template>
  <div class="ps-container">
    <div class="ps-query">
      <div class="query-item-wrap">
        <slot name="query-group"></slot>
      </div>
      <div class="query-action">
        <el-button style="margin-bottom: 8px;" plain size="mini">{{ '收起' }}</el-button>
        <slot name="query-action"></slot>
      </div>
    </div>
    <div class="ps-controller">
      <slot name="controller"></slot>
    </div>
    <div ref="table" class="ps-content">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import _debounce from 'lodash.debounce'
export default {
  data() {
    return {
      tableHeight: 0
    }
  },
  mounted() {
    window.addEventListener('resize', this.handle_tableResize())
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handle_tableResize)
  },
  methods: {
    handle_tableResize: _debounce(function() {
      this.tableHeight = this.$refs.table.clientHeight
      this.$emit('tableHeight', this.tableHeight)
    }, 250)
  }
}
</script>

<style lang="scss" scoped>
.ps-container{
  position: relative;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .ps-query{
    padding: 8px;
    position: relative;
    display: flex;
    .query-item-wrap{
      flex: 1;
      display: flex;
      flex-wrap: wrap;
    }
    .query-action{
      display: flex;
      flex-direction: column;
      width: 120px;
      flex-shrink: 0;
      padding: 8px;
    }
  }
  .ps-controller{
    padding: 8px;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
    position: relative;
  }
  .ps-content{
    position: relative;
    flex: 1;
    padding: 8px;
  }
}
</style>
