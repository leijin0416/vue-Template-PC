<template>
  <div class="container">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :xs="24" :md="20" :lg="20" :xl="13">
        <article class="v-article-box">
				  <h2 class="v-h2">用户列表</h2>
          <div class="v-table-mian">
            <!-- 表格 -->
            <ElTable :tableData="tableData"
              :tableColumnData="tableColumnData"
              :totalCount="totalCount"
              @handleSelectionChange="handleSelectionChange"
              @handleCurrentChange="handleCurrentChange">
              <!-- 内容部分-操作 -->
              <el-table-column slot="slotPosition" label="安置位置" width="120" align="center">
                <template slot-scope="scope">
                  <el-tag size="mini">{{scope.row.position === 1 ? "左侧" : "右侧"}}</el-tag>
                </template>
              </el-table-column>

              <el-table-column slot="createTime" label="注册时间" width="180" align="center">
                <template slot-scope="scope">
                  {{scope.row.createTime | timeFilter}}
                </template>
              </el-table-column>
            </ElTable>
          </div>
        </article>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';
import { apiWebUserList } from "@/api/index";
import { sessionData } from '@/filters/storage';

import ElTable from "@/components/ElTable/index.vue";

export default {
	name: "",
	// 组件
	components: {
    ElTable,
	},
	// 接收父组件传参
	props: {},
	data() {
		return {
      param: {
        page: 1,
        pageSize: 12,
      },
      totalCount: 1,
      tableColumnData: [
        {
          type: 'selection',
        },
        {
          prop: 'userId',
          label: '用户ID',
          width: '200',
        },
        {
          prop: 'userName',
          label: '用户名',
          width: 'auto',
        },
        {
          prop: 'inviteCode',
          label: '用户邀请码',
          width: 'auto',
        },
        {
          prop: 'parentName',
          label: '安置人',
          width: 'auto',
        },
        {
          slot: "slotPosition"
        },
        {
          slot: 'createTime'
        },
      ],
      tableData: [],
		}
	},
  computed:{
    ...mapState("localUser", ["getUserInfoTableList", ])
  },
  watch: {
    "getUserInfoTableList": {
      handler(newValue, oldValue) {
        let list = newValue.list;
        this.tableData = list;
        this.totalCount = newValue.total;
        // console.log(newValue);
      },
      immediate: true
    },
  },
  created() {
    this.ActionsUserInfoTableList(this.param)
  },
	// 页面初始化
	mounted(){
  },
	// 监听click方法
	methods: {
    ...mapActions("localUser", ["ActionsUserInfoTableList"]),
    // 复选框
    handleSelectionChange(val) {
      console.log(val);
    },
    // 分页
    handleCurrentChange(val) {
      const _that = this;
      _that.$nextTick(() => {
        _that.param.page = val
      })
      _that.ActionsUserInfoTableList(_that.param);
    },
	},
}
</script>

<style lang="scss" scoped>
.container {
  padding: 100px 0 30px;
  height: 100vh;
  background: url("../../assets/img/i_banner_bg.jpg") center center / cover no-repeat;
  .v-article-box {
    min-height: 400px;
    padding: 30px 30px 20px;
    box-shadow: 0 0 10px #eee;
    background-color: #fff;
  }
  .v-h2 {
    padding-bottom: 20px;
    margin-bottom: 30px;
    border-bottom: 1px solid #f1f1f1;
    color: #333;
  }
}
</style>
