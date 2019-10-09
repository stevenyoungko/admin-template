<template>
<div class="container">
    <el-row>
        <el-col :span="6" >
            <div class="header">
                <span class="demonstration">date picker</span>
            </div>
            <div class="block">
                <el-date-picker
                v-model="value2"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions">
                </el-date-picker>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="header">
                <span class="demonstration">drop down</span>
            </div>
            <div class="block">
                <el-select v-model="value" placeholder="Button">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                <el-select disabled v-model="value" placeholder="Disable" class="marL10">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </el-col>
        <el-col :span="4">
            <div class="header">
                <span class="demonstration">icon</span>
            </div>
            <div class="block">
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-off marL10"></i>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="header">
                <span class="demonstration">TabsButtonGroup</span>
            </div>
            <div class="block">
                <el-tabs v-model="activeName" type="card" class="marT10">
                    <el-tab-pane label="first" name="first">first</el-tab-pane>
                    <el-tab-pane label="second" name="second">second</el-tab-pane>
                    <el-tab-pane label="third" name="third">third</el-tab-pane>
                    <el-tab-pane label="fourth" name="fourth">fourth</el-tab-pane>
                </el-tabs>
            </div>
        </el-col>
        <el-col :span="2">
            <div class="header"></div>
            <div class="block"></div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="6" >
            <div class="header">
                <span class="demonstration">Base</span>
            </div>
            <div class="block">
                <el-button type="primary">Button</el-button>
                <el-button type="info" disabled class="marL10">Disable</el-button>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="header">
                <span class="demonstration">Outline</span>
            </div>
            <div class="block">
                <el-button type="primary" plain>Button</el-button>
                <el-button type="info" disabled plain class="marL10">Disable</el-button>
            </div>
        </el-col>
        <el-col :span="4">
            <div class="header"></div>
            <div class="block"></div>
        </el-col>
        <el-col :span="4">
            <div class="header"></div>
            <div class="block"></div>
        </el-col>
        <el-col :span="4">
            <div class="header"></div>
            <div class="block"></div>
        </el-col>
    </el-row>
</div>
</template>

<script>
import { getWeek, getMonth, getLastMonth, getLastWeek, getLastTwoWeek, getNextTwoWeek, getLast14Days, getNext14Days} from '@/utils/date'
export default {
     data() {
      return {
        options: [{
          value: '选项1',
          label: '1'
        }, {
          value: '选项2',
          label: '2'
        }, {
          value: '选项3',
          label: '3'
        }, {
          value: '选项4',
          label: '4'
        }, {
          value: '选项5',
          label: '5'
        }],
        pickerOptions: {
          shortcuts: [{
            text: '過去14天',
            onClick(picker) {
               picker.$emit('pick', getLast14Days());
            }
          },{
            text: '未來14天',
            onClick(picker) {
               picker.$emit('pick', getNext14Days());
            }
          },{
            text: '最近一周',
            onClick(picker) {
               picker.$emit('pick', getWeek());
            }
          }, {
            text: '過去一周',
            onClick(picker) {
              picker.$emit('pick', getLastWeek());
            }
          }, {
            text: '過去兩周',
            onClick(picker) {
              picker.$emit('pick', getLastTwoWeek());
            }
          }, {
            text: '未來兩周',
            onClick(picker) {
              picker.$emit('pick', getNextTwoWeek());
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              picker.$emit('pick', getMonth());
            }
          }, {
            text: '過去一個月',
            onClick(picker) {
              picker.$emit('pick', getLastMonth());
            }
          }]
        },
        value:'',
        value2: ''
      };
    }
}
</script>

<style lang="scss" scoped>
  .container {
      padding: 10px;
      .marL10 {
          margin-left:10px;
      }
      .el-select {
          width: 120px;
      }
      .marT10 {
          margin-top:10px;
      }
      .header {
          border-left: solid 1px #c9d1da;
          border-top: solid 1px #c9d1da;
          font-size: 12px;
          height: 28px;
          line-height: 18px;
          padding: 5px 10px;
          background-color: #f4f5f7;
      }
      .block {
          border-left: solid 1px #c9d1da;
          border-top: solid 1px #c9d1da;
          border-bottom: solid 1px #c9d1da;
          height: 60px;
          padding-left: 10px;
          display: flex;
          align-items: center;
      }
      .el-row {
          border-right: solid 1px #c9d1da;
          margin-bottom: 10px;
      }
  }
</style>