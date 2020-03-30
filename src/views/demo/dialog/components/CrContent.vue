<template>
  <PSDialogContainer>
    <el-form label-width="90px">
      <el-form-item label="Demo 名称" prop="name">
        <el-input />
      </el-form-item>
      <el-form-item label="Demo 密码" prop="name">
        <el-input />
      </el-form-item>
      <el-form-item label="Demo 地址" prop="name">
        <el-input />
      </el-form-item>
      <el-form-item label="Demo 电话" prop="name">
        <el-input />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-row type="flex" justify="end">
        <PSButton type="primary" outline @click="$emit('closeDialog')">取消</PSButton>
        <PSButton type="primary" @click="$emit('closeDialog')">{{ mode === 'create' ? '确认' : '保存' }}</PSButton>
      </el-row>
    </template>
  </PSDialogContainer>
</template>

<script>
import PSDialogContainer from '@/components/container/PSDialogContainer'
import PSButton from '@/components/core/PSButton/PSButton'

export default {
  name: 'CrContent',
  components: {
    PSDialogContainer, PSButton
  },
  props: {
    mode: {
      type: String,
      default: 'create'
    }
  },
  data() {
    return {

    }
  }
}
</script>
