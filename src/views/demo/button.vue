<template>
  <PSContainer v-loading="false" class="dashboard">
    <template #content>
      <table>
        <thead>
          <tr>
            <td>名称</td>
            <td>参数</td>
            <td>类型</td>
            <td>可选值</td>
            <td>预设</td>
            <td>展示</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>实心按钮</td>
            <td>type</td>
            <td>String</td>
            <td>primary / success / warning / danger / intermediate</td>
            <td>primary</td>
            <td>
              <PSButton type="primary">按钮文字</PSButton>
              <PSButton type="success">按钮文字</PSButton>
              <PSButton type="warning">按钮文字</PSButton>
              <PSButton type="danger">按钮文字</PSButton>
              <PSButton type="intermediate">按钮文字</PSButton>
            </td>
          </tr>
          <tr>
            <td>外匡按钮</td>
            <td>outline</td>
            <td>Boolean</td>
            <td>true / false</td>
            <td>false</td>
            <td>
              <PSButton type="primary" outline>按钮文字</PSButton>
              <PSButton type="success" outline>按钮文字</PSButton>
              <PSButton type="warning" outline>按钮文字</PSButton>
              <PSButton type="danger" outline>按钮文字</PSButton>
              <PSButton type="intermediate" outline>按钮文字</PSButton>
            </td>
          </tr>
          <tr>
            <td>禁用按钮</td>
            <td>disabled</td>
            <td>Boolean</td>
            <td>true / false</td>
            <td>false</td>
            <td>
              <PSButton type="primary" disabled>按钮文字</PSButton>
              <PSButton type="success" disabled>按钮文字</PSButton>
              <PSButton type="warning" disabled>按钮文字</PSButton>
              <PSButton type="danger" disabled>按钮文字</PSButton>
              <PSButton type="intermediate" disabled>按钮文字</PSButton>
            </td>
          </tr>
          <tr>
            <td>圆角按钮</td>
            <td>round</td>
            <td>Boolean</td>
            <td>true / false</td>
            <td>false</td>
            <td>
              <PSButton type="primary" round>按钮文字</PSButton>
              <PSButton type="success" round>按钮文字</PSButton>
              <PSButton type="warning" round>按钮文字</PSButton>
              <PSButton type="danger" round>按钮文字</PSButton>
              <PSButton type="intermediate" round>按钮文字</PSButton>
            </td>
          </tr>
          <tr>
            <td>圆形按钮</td>
            <td>circle</td>
            <td>Boolean</td>
            <td>true / false</td>
            <td>false</td>
            <td>
              <PSButton type="primary" circle icon="user" />
              <PSButton type="primary" circle>
                <i class="el-icon-edit"></i>
              </PSButton>
              <PSButton type="warning" circle>
                <i class="el-icon-share"></i>
              </PSButton>
              <PSButton type="danger" circle>
                <i class="el-icon-delete"></i>
              </PSButton>
            </td>
          </tr>
          <tr>
            <td>加载效果</td>
            <td>loading</td>
            <td>Boolean</td>
            <td>true / false</td>
            <td>false</td>
            <td>
              <!-- https://samherbert.net/svg-loaders/ -->
              <PSButton type="primary" :loading="status">按钮文字</PSButton>
              <PSButton type="success" :loading="status">按钮文字</PSButton>
              <PSButton type="warning" :loading="status">按钮文字</PSButton>
              <PSButton type="intermediate" :loading="status">按钮文字</PSButton>
            </td>
          </tr>
          <tr>
            <td>加载的icon</td>
            <td>loading-icon</td>
            <td>String</td>
            <td>@/icons/svg/*.svg</td>
            <td>elementUI</td>
            <td>
              <PSButton type="primary" :loading="status" loading-icon="grid">按钮文字</PSButton>
              <PSButton type="success" :loading="status" loading-icon="audio">按钮文字</PSButton>
              <PSButton type="warning" :loading="status" loading-icon="three-dots">按钮文字</PSButton>
            </td>
          </tr>
          <tr>
            <td>加载icon的位置</td>
            <td>loading-right</td>
            <td>Boolean</td>
            <td>true / false</td>
            <td>false</td>
            <td>
              <PSButton
                type="warning"
                :loading="status"
                loading-icon="three-dots"
                loading-right
              >按钮文字</PSButton>
              <button @click="loadingStatus">按我</button>
            </td>
          </tr>
          <tr>
            <td>icon</td>
            <td>icon</td>
            <td>String</td>
            <td>@/icons/svg/*.svg</td>
            <td>''</td>
            <td>
              <PSButton type="primary">
                <template #left-icon>
                  <i class="el-icon-share"></i>
                </template>按钮文字
              </PSButton>
              <PSButton type="success" icon="user">按钮文字</PSButton>
            </td>
          </tr>
          <tr>
            <td>icon位置</td>
            <td>iconPosition</td>
            <td>Boolean</td>
            <td>true / false</td>
            <td>false</td>
            <td>
              <PSButton type="primary" icon="user">按钮文字</PSButton>
              <PSButton type="primary" icon="user" icon-position>按钮文字</PSButton>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </PSContainer>
</template>

<script>
import PSContainer from '@/components/container/PSContainer'
import PSButton from '@/components/core/PSButton/PSButton'

export default {
  name: 'DemoButton',
  components: {
    PSContainer,
    PSButton
  },
  data() {
    return {
      columns: [
        {
          prop: 'value',
          label: '名稱'
        }
      ],
      tableData: [
        { value: '实心按钮' },
        { value: '外匡按钮' },
        { value: '禁用按钮' }
      ],
      colorTheme: ['primary', 'success', 'warning', 'danger', 'intermediate'],
      status: false
    }
  },
  methods: {
    loadingStatus() {
      this.status = !this.status
    },
    open() {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          })
        }
      })
    }
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border-spacing: 2px;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-all;
  line-height: 23px;
  padding-left: 10px;
  padding-right: 10px;
}
td {
  padding: 12px 0;
  box-sizing: border-box;
  text-overflow: ellipsis;
  vertical-align: middle;
  position: relative;
  text-align: left;
  border-bottom: 1px solid #ebeef5;
}
thead {
  color: #909399;
  font-weight: 500;
}
</style>
