<template>
  <PSContainer v-loading="false" class="tabTable">
    <template v-slot:query-group>
      <QueryContainer ref="query" :inline="true" :model="formInline" :rules="rules">
        <!-- <template v-slot:priority>
          <el-form-item label="输入框" prop="user">
            <el-input v-model="formInline.user" size="mini" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="时间区间筛选" porp="daterange">
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
        </template> -->
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
        </template>
      </QueryContainer>
    </template>
    <template v-slot:query-action>
      <!-- <el-button type="primary" size="mini" @click="resetForm">重置</el-button> -->
      <el-button type="primary" size="small" icon="el-icon-search">查询</el-button>
    </template>
    <template v-slot:controller>
      <!-- <div>Controller</div> -->
    </template>
    <template #content>
      <div class="tab-demo">
        <div class="tab-demo-controll">
          <el-radio-group v-model="tab.activeName" size="mini" @change="tabChange">
            <el-radio-button label="锺飞膝" />
            <el-radio-button label="萧咪咪" />
            <el-radio-button label="林赛米尔" />
          </el-radio-group>
        </div>
        <div class="tab-demo-table">
          <el-table :data="tab.activeData" style="width: 100%" border stripe height="100%" size="mini">
            <el-table-column
              v-for="col in columns"
              :key="col.prop"
              :prop="col.prop"
              :label="col.label"
            />
            <el-table-column label="操作">
              <template slot-scope="scope">
                <div class="operation">
                  <el-button type="text" size="mini" icon="el-icon-pie-chart" @click="changeChartDiaLog('圓餅圖', 'PieChart')">圓餅圖</el-button>
                  <el-button type="text" size="mini" icon="el-icon-data-line" @click="changeChartDiaLog('折線圖', 'LineChart')">折線圖</el-button>
                  <el-button type="text" size="mini" icon="el-icon-data-analysis" @click="changeChartDiaLog('柱狀圖', 'BarChart')">柱狀圖</el-button>
                  <el-button type="text" size="mini" icon="el-icon-s-data" @click="changeChartDiaLog('雷達圖', 'RaddarChart')">雷達圖</el-button>
                  <el-button type="text" size="mini" icon="el-icon-delete" @click="DeleteDemo(scope)">删除</el-button>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
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
      <el-dialog :title="activeDiaLog.title" :visible.sync="showDiaLog" center>
        <components :is="activeDiaLog.chart" />
      </el-dialog>
    </template>
  </PSContainer>
</template>

<script>
import { mapGetters } from 'vuex'
import PSContainer from '@/components/container/PSContainer'
import QueryContainer from '@/components/container/QueryContainer'
export default {
  name: 'DemoTabTable',
  components: {
    PieChart: () => import('./charts/PieChart'),
    LineChart: () => import('./charts/LineChart'),
    RaddarChart: () => import('./charts/RaddarChart'),
    BarChart: () => import('./charts/BarChart'),
    PSContainer,
    QueryContainer
  },
  data() {
    return {
      showDiaLog: false,
      activeDiaLog: {
        title: '',
        chart: 'PieChart'
      },
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
      tableDataChung: [
        {
          date: '2016-05-03',
          name: '锺飞膝',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '锺飞膝',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '锺飞膝',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '锺飞膝',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      tableDataXiao: [
        {
          date: '2016-05-03',
          name: '萧咪咪',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '萧咪咪',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '萧咪咪',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '萧咪咪',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      tableDataLin: [
        {
          date: '2016-05-03',
          name: '林赛米尔',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '林赛米尔',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '林赛米尔',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '林赛米尔',
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
      },
      tab: {
        activeName: '锺飞膝',
        activeData: []
      }
    }
  },
  created() {
    this.tab.activeData = this.tableDataChung
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
    },
    tabChange(value) {
      console.log(value)
      switch (value) {
        case '锺飞膝':
          this.tab.activeData = this.tableDataChung
          break
        case '萧咪咪':
          this.tab.activeData = this.tableDataXiao
          break
        case '林赛米尔':
          this.tab.activeData = this.tableDataLin
          break
        default:
          console.warn('value mapping error')
      }
    },
    changeChartDiaLog(title, chart) {
      this.showDiaLog = true
      this.activeDiaLog.title = title
      this.activeDiaLog.chart = chart
    }
  }
}
</script>

<style lang="scss" scoped>
.tabTable {
  .tab-demo {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    .tab-demo-controll {
      margin-bottom: 8px;
    }
    .tab-demo-table {
      flex: 1;
    }
    .operation{
      & >>> .el-button {
        margin-left: 5px;
      }
      & >>> .el-button + .el-button{
        margin-left: 5px;
        margin-right: 5px
      }
    }
  }
}
</style>
