<template>
  <PSContainer v-loading="false" class="dashboard">
    <template v-slot:query-group>
      <QueryContainer
        ref="query"
        :inline="true"
        :model="formInline"
        :rules="rules"
        :inline-message="false"
      >
        <template v-slot:priority>
          <el-form-item label="时间区间筛选" prop="daterange">
            <QuickRangeTimer
              v-model="formInline.daterange"
              :list="deteOptions"
              type="monthrange"
              size="mini"
              range-separator="至"
              start-placeholder="開始"
              end-placeholder="结束"
            />
          </el-form-item>
          <el-form-item label="输入框" prop="user">
            <el-input v-model="formInline.user" size="mini" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="计数器" prop="count">
            <el-input-number
              v-model="formInline.count"
              size="mini"
              controls-position="right"
              :min="1"
              :max="10"
            />
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
      <!-- <el-button type="primary" size="small" icon="el-icon-search" @click="submitForm">查询</el-button> -->
      <PSButton type="primary" @click="submitForm">
        <i class="el-icon-search"></i>查询
      </PSButton>
    </template>
    <template v-slot:controller>
      <div>
        <PSButton type="primary" @click="operationDialog('', 'create')">
          <i class="el-icon-search"></i>查询
        </PSButton>
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
              <!-- <el-button type="primary" size="mini" icon="el-icon-edit" circle @click="operationDialog(scope, 'edit')" /> -->
              <!-- <el-button type="danger" size="mini" icon="el-icon-delete" circle @click="DeleteDemo(scope)" /> -->
              <PSButton type="primary" circle @click="operationDialog(scope, 'edit')">
                <i class="el-icon-edit"></i>
              </PSButton>
              <PSButton type="danger" circle @click="DeleteDemo(scope)">
                <i class="el-icon-delete"></i>
              </PSButton>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </template>
    <template v-slot:pager>
      <el-row type="flex" justify="end">
        <el-col>
          <el-pagination
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
        <PSDialogContainer>
          <div>
            <el-form :model="editForm" label-width="auto">
              <el-form-item label="日期">
                <el-date-picker
                  v-model="editForm.date"
                  size="mini"
                  type="date"
                  placeholder="选择日期"
                  style="width: 100%;"
                />
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
            <el-row type="flex" justify="end">
              <!-- <el-button type="primary" size="mini" plain @click="showDiaLog = false">取消</el-button> -->
              <!-- <el-button type="primary" size="mini" @click="showDiaLog = false">确认</el-button> -->
              <PSButton outline @click="showDiaLog = false">取消</PSButton>
              <PSButton type="primary" @click="showDiaLog = false">确认</PSButton>
            </el-row>
          </template>
        </PSDialogContainer>
      </el-dialog>

      <el-dialog title="提示" :visible.sync="showDel" center width="400px">
        <PSDialogContainer>
          <div>是否要删除</div>
          <template #footer>
            <el-row type="flex" justify="end">
              <!-- <el-button size="mini" plain @click="showDel = false">取消</el-button> -->
              <!-- <el-button type="danger" size="mini" @click="showDel = false">刪除</el-button> -->
              <PSButton outline @click="showDel = false">取消</PSButton>
              <PSButton type="danger" @click="showDel = false">刪除</PSButton>
            </el-row>
          </template>
        </PSDialogContainer>
      </el-dialog>
    </template>
  </PSContainer>
</template>

<script>
import PSContainer from '@/components/container/PSContainer'
import QueryContainer from '@/components/container/QueryContainer'
import PSDialogContainer from '@/components/container/PSDialogContainer'
import PSButton from '@/components/core/PSButton/PSButton'
import QuickRangeTimer from '@/components/core/quickRangeTimer'

export default {
  name: 'DemoDefault',
  components: {
    PSContainer,
    QueryContainer,
    PSDialogContainer,
    PSButton,
    QuickRangeTimer
  },
  data() {
    return {
      showDiaLog: false,
      showDel: false,
      opTitle: '',
      formInline: {
        user: '',
        daterange: ['', ''],
        count: 1,
        radio: 3,
        checkList: [],
        dateTime: '',
        region: '',
        quickDaterange: ['', '']
      },
      deteOptions: [
        'today',
        'yestoday',
        'thisWeek',
        'lastWeek',
        '14daysAgo',
        '14daysAfter',
        'lastYear',
        'nextYear'
      ],
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
              // console.log(rule, value, callback)
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
  mounted() {},
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
      type === 'edit'
        ? (this.opTitle = '编辑列表')
        : (this.opTitle = '新增列表')
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
