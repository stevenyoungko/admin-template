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
        <el-button type="primary" size="mini" plain @click="$emit('closeDialog')">取消</el-button>
        <el-button type="primary" size="mini" @click="$emit('closeDialog')">{{ mode === 'create' ? '确认' : '保存' }}</el-button>
      </el-row>
    </template>
  </PSDialogContainer>
</template>

<script>
import PSDialogContainer from '@/components/container/PSDialogContainer'

export default {
  name: 'CrContent',
  components: {
    PSDialogContainer
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
