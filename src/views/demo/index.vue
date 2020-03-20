<template>
  <PSContainer v-loading="false" class="dashboard">
    <template v-slot:query-group>
      <QueryContainer ref="query" :inline="true" :model="formInline" :rules="rules" :inline-message="false">
        <template v-slot:priority>
          <el-form-item label="输入框" prop="user">
            <el-input v-model="formInline.user" size="mini" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="时间区间筛选" prop="daterange">
            <el-date-picker
              v-model="formInline.daterange"
              type="datetimerange"
              size="mini"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
            />
          </el-form-item>
          <el-form-item label="计数器" prop="count">
            <el-input-number v-model="formInline.count" size="mini" controls-position="right" :min="1" :max="10" />
          </el-form-item>
        </template>
        <template>
          <el-form-item label="活动区域" prop="region">
            <el-select v-model="formInline.region" size="mini" placeholder="活动区域" filterable>
              <el-option label="区域一" value="shanghai" />
              <el-option label="区域二" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="单选框" prop="radio">
            <el-radio-group v-model="formInline.radio">
              <el-radio :label="3">备选项1</el-radio>
              <el-radio :label="6">备选项2</el-radio>
              <el-radio :label="9">备选项3</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="单日筛选" prop="dateTime">
            <el-date-picker
              v-model="formInline.dateTime"
              size="mini"
              placeholder="请选择日期"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
            />
          </el-form-item>
          <el-form-item prop="checkList">
            <el-checkbox-group v-model="formInline.checkList">
              <el-checkbox label="复选框 A" />
              <el-checkbox label="禁用" disabled />
              <el-checkbox label="选中且禁用" disabled />
            </el-checkbox-group>
          </el-form-item>
        </template>
      </QueryContainer>
    </template>
    <template v-slot:query-action>
      <!-- <el-button type="primary" size="mini" @click="resetForm">重置</el-button> -->
      <el-button type="primary" size="small" icon="el-icon-search" @click="submitForm">查询</el-button>
    </template>
    <template v-slot:controller>
      <div>
        <el-button type="primary" size="mini" @click="operationDialog('', 'create')">新增</el-button>
        <el-button type="primary" size="mini" @click="openDailog()">header 及 footer 固定的彈窗</el-button>
      </div>
    </template>
    <template #content>
      <el-table :data="tableData" style="width: 100%" border stripe height="100%" size="mini">
        <el-table-column
          v-for="col in columns"
          :key="col.prop"
          :prop="col.prop"
          :label="col.label"
        />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div class="operation">
              <el-button type="primary" size="mini" icon="el-icon-edit" circle @click="operationDialog(scope, 'edit')" />
              <el-button type="danger" size="mini" icon="el-icon-delete" circle @click="DeleteDemo(scope)" />
            </div>
          </template>
        </el-table-column>
      </el-table>
    </template>
    <template v-slot:pager>
      <el-row type="flex" justify="end">
        <el-col>
          <el-pagination
            small
            :current-page="pager.page"
            :page-sizes="[25, 50]"
            :page-size="pager.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="pager.total"
            @size-change="pagerEvent($event, 'sizeChange')"
            @current-change="pagerEvent($event, 'pageChange')"
          />
        </el-col>
      </el-row>
    </template>
    <template>
      <el-dialog :title="opTitle" :visible.sync="showDiaLog" center width="400px">
        <dialog-content footer-right>
          <div>
            <el-form :model="editForm" label-width="auto">
              <el-form-item label="日期">
                <el-date-picker v-model="editForm.date" size="mini" type="date" placeholder="选择日期" style="width: 100%;" />
              </el-form-item>
              <el-form-item label="姓名">
                <el-input v-model="editForm.name" size="mini" />
              </el-form-item>
              <el-form-item label="地址">
                <el-input v-model="editForm.address" size="mini" />
              </el-form-item>
            </el-form>
          </div>
          <template #footer>
            <el-button type="primary" size="mini" plain @click="showDiaLog = false">取消</el-button>
            <el-button type="primary" size="mini" @click="showDiaLog = false">确认</el-button>
          </template>
        </dialog-content>
      </el-dialog>

      <el-dialog title="提示" :visible.sync="showDel" center width="400px">
        <dialog-content footer-right>
          <div>
            是否要删除
          </div>
          <template #footer>
            <el-button size="mini" plain @click="showDel = false">取消</el-button>
            <el-button type="danger" size="mini" @click="showDel = false">刪除</el-button>
          </template>
        </dialog-content>
      </el-dialog>

      <el-dialog title="測試標題" :visible.sync="showDia">
        <dialog-content>
          <div>
            <div style="height: 200px;">
              我是內容喔
            </div>
            <div style="height: 200px;">
              我是內容喔
            </div>
            <div style="height: 200px;">
              我是內容喔
            </div>
            <div style="height: 200px;">
              我是內容喔
            </div>
            <div style="height: 200px;">
              我是內容喔
            </div>
          </div>
          <template #footer>
            <el-button type="primary" size="mini" @click="showDia = false">取消</el-button>
            <el-button type="primary" size="mini" @click="showDia = false">确认</el-button>
          </template>
        </dialog-content>
      </el-dialog>
    </template>
  </PSContainer>
</template>

<script>
import PSContainer from '@/components/container/PSContainer'
import QueryContainer from '@/components/container/QueryContainer'
import DialogContent from '@/components/dailog/DialogContent'
export default {
  name: 'DemoDefault',
  components: {
    PSContainer,
    QueryContainer,
    DialogContent
  },
  data() {
    return {
      showDiaLog: false,
      showDia: false,
      showDel: false,
      opTitle: '',
      formInline: {
        user: '',
        daterange: ['', ''],
        count: 1,
        radio: 3,
        checkList: [],
        dateTime: '',
        region: ''
      },
      rules: {
        user: [
          {
            required: true,
            message: '请输入user',
            trigger: 'blur'
          }
        ],
        daterange: [
          {
            type: 'array',
            required: true,
            message: '请输入时间区间',
            trigger: 'blur',
            validator: function(rule, value, callback) {
              console.log(rule, value, callback)
              if (value == null || (value[0] === '' && value[1] === '')) {
                callback(new Error('请输入时间区间'))
              } else {
                callback()
              }
            }
          }
        ],
        region: [
          {
            required: false,
            message: '请输入地区',
            trigger: 'blur'
          }
        ]
      },
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      columns: [
        {
          prop: 'date',
          width: '180',
          label: '日期'
        },
        {
          prop: 'name',
          width: '180',
          label: '姓名'
        },
        {
          prop: 'address',
          width: '180',
          label: '地址'
        }
      ],
      editForm: {
        date: '',
        name: '',
        address: ''
      },
      pager: {
        page: 1,
        pageSize: 25,
        total: 100
      }
    }
  },
  mounted() {

  },
  methods: {
    pagerEvent(e, type) {
      if (type === 'pageChange') {
        this.pager.page = e
        return
      }
      if (type === 'sizeChange') {
        this.pager.page = 1
        this.pager.pageSize = e
      }
    },
    DeleteDemo() {
      this.showDel = true
    },
    getList() {
      alert('submit')
    },
    openDailog() {
      this.showDia = true
    },
    submitForm() {
      this.$refs.query.submitForm(this.getList)
      // this.$refs.query.$refs.form.validate(valid => {
      //   if (valid) {
      //     alert('submit')
      //   } else {
      //     return false
      //   }
      // })
    },
    resetForm() {
      this.$refs.query.resetForm()
      // this.formInline = {
      //   user: '',
      //   daterange: ['', ''],
      //   radio: 3,
      //   checkList: [],
      //   dateTime: '',
      //   region: ''
      // }
    },
    operationDialog(scope, type) {
      type === 'edit' ? this.opTitle = '编辑列表' : this.opTitle = '新增列表'
      if (type === 'edit') {
        this.editForm = {
          date: scope.row.date,
          name: scope.row.name,
          address: scope.row.address
        }
      } else if (type === 'create') {
        this.editForm = {
          date: '',
          name: '',
          address: ''
        }
      } else {
        console.warn('请确认type 是否为 edit || create')
      }
      this.showDiaLog = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
