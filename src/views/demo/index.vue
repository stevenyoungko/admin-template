<template>
  <PSContainer v-loading="false" class="dashboard">
    <template v-slot:query-group>
      <QueryContainer :inline="true" :model="formInline" :rules="rules">
        <template v-slot:priority>
          <el-form-item label="输入框" prop="user">
            <el-input v-model="formInline.user" size="mini" placeholder="审批人" />
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
            />
            <!-- <div style="height: 20px; width: 20px;background-color: red"></div> -->
          </el-form-item>
        </template>
        <template>
          <el-form-item label="活动区域" prop="region">
            <el-select v-model="formInline.region" size="mini" placeholder="活动区域">
              <el-option label="区域一" value="shanghai" />
              <el-option label="区域二" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="单选框">
            <el-radio-group v-model="formInline.radio">
              <el-radio :label="3">备选项1</el-radio>
              <el-radio :label="6">备选项2</el-radio>
              <el-radio :label="9">备选项3</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="单日筛选">
            <el-date-picker
              v-model="formInline.dateTime"
              size="mini"
              placeholder="请选择日期"
              format="yyyy-MM-dd"
            />
          </el-form-item>
          <el-form-item>
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
      <!-- <el-button type="primary" size="mini" plain>重置</el-button> -->
      <el-button type="primary" size="mini" icon="el-icon-search">查询</el-button>
    </template>
    <template v-slot:controller>
      <div>Controller</div>
    </template>
    <template #content>
      <el-table :data="tableData" style="width: 100%" border stripe height="100%">
        <el-table-column
          v-for="col in columns"
          :key="col.prop"
          :prop="col.prop"
          :label="col.label"
        />
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
  </PSContainer>
</template>

<script>
import { mapGetters } from 'vuex'
import PSContainer from '@/components/container/PSContainer'
import QueryContainer from '@/components/container/QueryContainer'
export default {
  name: 'DemoDefault',
  components: {
    PSContainer,
    QueryContainer
  },
  data() {
    return {
      formInline: {
        user: 'Billy',
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
      pager: {
        page: 1,
        pageSize: 25,
        total: 100
      }
    }
  },
  computed: {
    ...mapGetters(['name'])
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
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
