<template>
  <PSDialogContainer>
    確定要刪除？
    <template #footer>
      <el-row type="flex" justify="end">
        <PSButton outline @click="$emit('closeDialog')">取消</PSButton>
        <PSButton type="danger" @click="$emit('closeDialog')">删除</PSButton>
      </el-row>
    </template>
  </PSDialogContainer>
</template>

<script>
import PSDialogContainer from '@/components/container/PSDialogContainer'
import PSButton from '@/components/core/PSButton/PSButton'

export default {
  name: 'DeleteContent',
  components: {
    PSDialogContainer,
    PSButton
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
