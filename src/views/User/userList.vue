<template>
  <div class="container">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :xs="24" :lg="22" :xl="13">
        <article class="v-article-box">
				  <h2 class="v-h2">用户列表</h2>
          <div>
            <!-- 表格 -->
            <ElTable :tableData="tableData"
              :tableColumnData="tableColumnData"
              :totalCount="totalCount"
              @handleSelectionChange="handleSelectionChange"
              @handleCurrentChange="handleCurrentChange">
              <!-- 内容部分-操作 -->

              <!-- <el-table-column slot="operateTagRegister" label="注册方式" width="150" align="center">
                <template slot-scope="scope">
                  <el-tag>{{scope.row.registerType === 1 ? '个人注册' : '邮箱注册'}}</el-tag>
                </template>
              </el-table-column> -->
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
          prop: 'userName',
          label: '用户名',
          width: 'auto',
        },
        {
          prop: 'userId',
          label: '用户ID',
          width: 'auto',
        },
        {
          prop: 'fullName',
          label: '用户名称',
          width: 'auto',
        },
        {
          prop: 'inviteCode',
          label: '用户邀请码',
          width: 'auto',
        },
        {
          prop: 'phone',
          label: '用户电话',
          width: 'auto',
        },
        {
          prop: 'invitationUserCode',
          label: '推荐人码',
          width: 'auto',
        },
        {
          prop: 'email',
          label: '用户邮箱',
          width: 'auto',
        },
      ],
      tableData: [],
		}
	},
  computed:{
    ...mapState({}),
  },
  created() {
    this.ActionsUserLists(this.param)
  },
	// 页面初始化
	mounted(){
    this.onActionsUserList(this.param)
  },
	// 监听click方法
	methods: {
    ...mapMutations("localUser", ["ActionsUserLists"]),
    async onActionsUserList(addValue) {
			let {data} = await apiWebUserList(addValue);
      let list = data.data.list;
      this.tableData = list;
      this.totalCount = data.data.total;
			// console.log(data);
    },
    // 复选框
    handleSelectionChange(val) {},
    // 分页
    handleCurrentChange(val) {
      const _that = this;
      _that.$nextTick(() => {
        _that.param.page = val
      })
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
