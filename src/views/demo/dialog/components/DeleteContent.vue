<template>
  <PSDialogContainer>
    確定要刪除？
    <template #footer>
      <el-row type="flex" justify="end">
        <el-button size="mini" @click="$emit('closeDialog')">取消</el-button>
        <el-button type="danger" size="mini" @click="$emit('closeDialog')">删除</el-button>
      </el-row>
    </template>
  </PSDialogContainer>
</template>

<script>
import PSDialogContainer from '@/components/container/PSDialogContainer'

export default {
  name: 'DeleteContent',
  components: {
    PSDialogContainer
  },
  props: {
    mode: {
      type: String,
      default: 'delete'
    }
  },
  data() {
    return {

    }
  }
}
</script>
