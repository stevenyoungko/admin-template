<template>
  <TableContainer class="dashboard" @tableHeight="tableHeight = $event">
    <template v-slot:query-group>
      <el-form :inline="true" :model="formInline" :rules="rules" class="demo-form-inline">
        <el-form-item label="审批人" class="filter-item" prop="user">
          <el-input v-model="formInline.user" size="mini" placeholder="审批人" />
        </el-form-item>
        <el-form-item label="活动区域" class="filter-item" prop="region">
          <el-select v-model="formInline.region" size="mini" placeholder="活动区域">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>
      </el-form>
    </template>
    <template v-slot:query-action>
      <el-button type="primary" size="mini" plain>查询</el-button>
    </template>
    <template v-slot:controller>
      <el-row type="flex" justify="end">
        <el-col>
          <el-pagination
            :current-page="pager.page"
            :page-sizes="[25, 50]"
            :page-size="pager.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="pager.total"
            @size-change="pagerEvent($event, 'sizeChange')"
            @current-change="pagerEvent($event,'pageChange')"
          />
        </el-col>
      </el-row>
    </template>
    <template #content>
      <el-table :data="tableData" style="width: 100%" border stripe :height="tableHeight">
        <el-table-column
          v-for="col in columns"
          :key="col.prop"
          :prop="col.prop"
          :label="col.label"
        />
      </el-table>
    </template>
  </TableContainer>
</template>

<script>
import { mapGetters } from 'vuex'
import TableContainer from '@/components/container/TableContainer'
export default {
  name: 'Dashboard',
  components: {
    TableContainer
  },
  data() {
    return {
      tableHeight: 0,
      formInline: {
        user: '',
        region: ''
      },
      rules: {
        user: [
          { required: true, message: '请输入user', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请输入地区', trigger: 'blur' }
        ]
      },
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
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
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
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
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
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
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
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
      pager: {
        page: 1,
        pageSize: 25,
        total: 100
      }
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
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
        return
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  .filter-item{
    background-color: #f5f5f5;
    padding: 0 8px;
    margin-bottom: 0;
  }
}
</style>
