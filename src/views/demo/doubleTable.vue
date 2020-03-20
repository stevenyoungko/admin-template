<template>
  <PSContainer v-loading="false" class="doubleTable">
    <template v-slot:query-group>
      <QueryContainer ref="query" :inline="true" :model="formInline" :rules="rules">
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
      <el-button type="primary" size="small" icon="el-icon-search">查询</el-button>
    </template>
    <template v-slot:controller>
      <div>Controller</div>
    </template>
    <template #content>
      <el-row :gutter="8" style="height: 100%;overflow: auto;">
        <el-col :span="24" style="padding-bottom: 8px;height: 100%">
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
                  <el-button type="primary" size="mini" @click="showDiaLog = true">编辑</el-button>
                  <el-button type="danger" size="mini" @click="DeleteDemo(scope)">删除</el-button>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="24" class="pagi-wrap">
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
        <el-col :span="12" style="height: 40%">
          <el-table :data="gridData" height="100%" border stripe size="mini">
            <el-table-column property="date" label="日期" width="150" />
            <el-table-column property="name" label="姓名" width="200" />
            <el-table-column property="address" label="地址" />
          </el-table>
        </el-col>
        <el-col :span="12" style="height: 40%">
          <el-table :data="gridData" height="100%" border stripe size="mini">
            <el-table-column property="date" label="日期" width="150" />
            <el-table-column property="name" label="姓名" width="200" />
            <el-table-column property="address" label="地址" />
          </el-table>
        </el-col>
      </el-row>
    </template>
    <template v-slot:pager>

    </template>
    <template>
      <el-dialog title="收货地址" :visible.sync="showDiaLog" center>
        <dialog-content>
          <div style="height: 40vh;">
            <el-table :data="gridData" height="100%" border stripe>
              <el-table-column property="date" label="日期" width="150" />
              <el-table-column property="name" label="姓名" width="200" />
              <el-table-column property="address" label="地址" />
            </el-table>
          </div>
          <template #footer>
            <el-row type="flex" justify="end">
              <el-button type="primary" size="mini" plain @click="showDiaLog = false">取消</el-button>
              <el-button type="primary" size="mini" @click="showDiaLog = false">确认</el-button>
            </el-row>
          </template>
        </dialog-content>
      </el-dialog>
    </template>
  </PSContainer>
</template>

<script>
import PSContainer from '@/components/container/PSContainer'
import QueryContainer from '@/components/container/QueryContainer'
import DialogContent from '@/components/dailog/PSDialogContent'
export default {
  name: 'DemoDoubleTable',
  components: {
    PSContainer,
    QueryContainer,
    DialogContent
  },
  data() {
    return {
      showDiaLog: false,
      formInline: {
        user: '',
        daterange: ['', ''],
        radio: 3,
        checkList: [],
        dateTime: '',
        region: ''
      },
      rules: {
        user: [{ required: true, message: '请输入user', trigger: 'blur' }],
        region: [{ required: false, message: '请输入地区', trigger: 'blur' }]
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
      gridData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
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
      this.$confirm('是否要删除', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // confirm
      }).catch(() => {
        // cancel
      })
    },
    resetForm() {
      this.formInline = {
        user: '',
        daterange: ['', ''],
        radio: 3,
        checkList: [],
        dateTime: '',
        region: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pagi-wrap{
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 8px;
}
</style>
