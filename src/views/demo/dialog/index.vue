<template>
  <div>
    <show-demo>
      <PSButton type="primary" @click="showScrollDialog('start')">header 及 footer 固定，content 滚动</PSButton>
      <template #explain>
        <div style="margin: 10px">
          <el-card class="box-card">
            彈窗 Layout 都是使用 el-dialog 內層放置 PSDialogContainer 元件，
            內容直接寫在 PSDialogContainer 元件裡，
            footer 部分使用 template #footer 注入。
          </el-card>
        </div>

        <pre>
          <code v-text="scrollExplainText"></code>
        </pre>
      </template>
    </show-demo>

    <show-demo>
      <PSButton type="primary" @click="showScrollDialog('center')">footer 置中</PSButton>
      <PSButton type="primary" @click="showScrollDialog('end')">footer 靠右</PSButton>
      <template #explain>
        <div style="margin: 10px">
          <el-card class="box-card">
            在 footer 裡面使用 el-row 的 flex 排版，justify="center" 置中，justify="end" 靠右。
          </el-card>
        </div>

        <pre>
          <code v-text="positionExplainText"></code>
        </pre>
      </template>
    </show-demo>

    <show-demo>
      <PSButton icon="el-icon-circle-plus-outline" type="primary" @click="showCrdDialog('create')">
        <template #left-icon>
          <i class="el-icon-circle-plus-outline"></i>
        </template>
        新增
      </PSButton>
      <PSButton icon="el-icon-edit" type="primary" @click="showCrdDialog('update')">
        <template #left-icon>
          <i class="el-icon-edit"></i>
        </template>
        修改
      </PSButton>
      <PSButton icon="el-icon-delete" type="danger" @click="showCrdDialog('delete')">
        <template #left-icon>
          <i class="el-icon-delete"></i>
        </template>
        删除
      </PSButton>

      <template #explain>
        <div style="margin: 10px">
          <el-card class="box-card">
            單一頁面中如果多個彈窗需求，可把 PSDialogContainer 包成元件，只要確定外層是 el-dialog 就好。
          </el-card>
        </div>

        <pre>
          <code v-text="crdExplainText"></code>
        </pre>
      </template>
    </show-demo>

    <!-- header 及 footer 固定，content 滚动，footer 置中靠右 -->
    <el-dialog title="測試標題" :visible.sync="showScroll">
      <PSDialogContainer>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
          </div>
          <div v-for="o in 30" :key="o" class="text item" style="padding: 8px 0">
            {{ '列表内容 ' + o }}
          </div>
        </el-card>
        <template #footer>
          <el-row type="flex" :justify="footerPosition">
            <PSButton outline @click="showScroll = false">取消</PSButton>
            <PSButton type="primary" @click="showScroll = false">确认</PSButton>
          </el-row>
        </template>
      </PSDialogContainer>
    </el-dialog>

    <!-- 新增刪除修改 -->
    <el-dialog :title="crdTitle" :visible.sync="showCrd" width="350px">
      <cr-content v-if="crdMethod !== 'delete'" :mode="crdMethod" @closeDialog="showCrd = false" />
      <delete-content v-if="crdMethod === 'delete'" :mode="crdMethod" @closeDialog="showCrd = false" />
    </el-dialog>
  </div>
</template>

<script>
import ShowDemo from './components/showDemo'
import PSDialogContainer from '@/components/container/PSDialogContainer'
import CrContent from './components/CrContent'
import DeleteContent from './components/DeleteContent'
import PSButton from '@/components/core/PSButton/PSButton'

export default {
  name: 'DialogDemo',
  components: {
    ShowDemo, PSDialogContainer, CrContent, DeleteContent, PSButton
  },
  data() {
    return {
      showScroll: false,
      showCrd: false,
      crdMethod: 'create',
      footerPosition: 'start',
      scrollExplainText: `
        <PSButton type="primary" @click="showScroll = true">header 及 footer 固定，content 滚动</PSButton>

        <el-dialog title="測試標題" :visible.sync="showScroll">
          <PSDialogContainer>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>卡片名称</span>
                <PSButton style="float: right; padding: 3px 0" type="text">操作按钮</PSButton>
              </div>
              <div v-for="o in 30" :key="o" class="text item" style="padding: 8px 0">
                {{ '列表内容 ' + o }}
              </div>
            </el-card>
            <template #footer>
              <PSButton type="primary" outline @click="showScroll = false">取消</PSButton>
              <PSButton type="primary" @click="showScroll = false">确认</PSButton>
            </template>
          </PSDialogContainer>
        </el-dialog>
      `,
      positionExplainText: `
        <template #footer>
          <el-row type="flex" justify="center">
            <PSButton type="primary" outline @click="showScroll = false">取消</PSButton>
            <PSButton type="primary" @click="showScroll = false">确认</PSButton>
          </el-row>
        </template>

        <template #footer>
          <el-row type="flex" justify="end">
            <PSButton type="primary" outline @click="showScroll = false">取消</PSButton>
            <PSButton type="primary" @click="showScroll = false">确认</PSButton>
          </el-row>
        </template>
      `,
      crdExplainText: `
        <!-- 父層 -->
        <el-dialog :title="crdTitle" :visible.sync="showCrd" width="350px">
          <cr-content v-if="crdMethod !== 'delete'" :mode="crdMethod" @closeDialog="showCrd = false" />
          <delete-content v-if="crdMethod === 'delete'" :mode="crdMethod" @closeDialog="showCrd = false" />
        </el-dialog>

        <!-- cr-content 元件 -->
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
                <PSButton type="primary" @click="$emit('closeDialog')">
                  {{ mode === 'create' ? '确认' : '保存' }}
                </PSButton>
              </el-row>
            </template>
          </PSDialogContainer>
        </template>
      `
    }
  },
  computed: {
    crdTitle() {
      switch (this.crdMethod) {
        case 'create':
          return '新增標題'
        case 'update':
          return '修改標題'
        case 'delete':
          return '删除標題'
        default:
          return '新增標題'
      }
    }
  },
  methods: {
    showScrollDialog(position) {
      this.footerPosition = position
      this.showScroll = true
    },
    showCrdDialog(method) {
      this.crdMethod = method
      this.showCrd = true
    }
  }
}
</script>
