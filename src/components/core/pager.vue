<template>
  <el-pagination
    :current-page.sync="pager.page"
    :page-size.sync="pager.pageSize"
    :total="pager.total"
    v-bind="customAttr"
    @size-change="pagerEvent($event, 'sizeChange')"
    @current-change="pagerEvent($event, 'pageChange')"
  />
</template>

<script>
export default {
  props: {
    pager: {
      type: Object,
      required: true,
      default: function() {
        console.error(`Please set pagination "props: pager" in route.name: ${this.$parent.$route.name}`)
        return {
          page: 1,
          pageSize: 25,
          total: 0
        }
      }
    },
    getData: {
      type: Function,
      required: true,
      default: function() {
        console.error(`Please set pagination "props: getData" in route.name: ${this.$parent.$route.name}`)
      }
    }
  },
  computed: {
    customAttr() {
      return {
        small: false,
        'page-sizes': [25, 50],
        layout: 'total, sizes, prev, pager, next, jumper',
        ...this.$attrs
      }
    }
  },
  methods: {
    pagerEvent(e, type) {
      if (type === 'pageChange') {
        this.pager.page = e
      }
      if (type === 'sizeChange') {
        this.pager.page = 1
        this.pager.pageSize = e
      }
      this.getData()
    }
  }
}
</script>

<style lang="scss" scoped>
.ps-pager {
  & >>> {
    .el-input {

    }
  }
}
</style>
