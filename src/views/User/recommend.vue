<template>
<div class="container">
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :xs="24" :md="20" :lg="20" :xl="13">
      <article class="v-article-box">
				<h2 class="v-h2">推广图</h2>
        <ElTree :lazyType="lazyType" />
			</article>
    </el-col>
  </el-row>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { sessionData } from '@/filters/storage';

import ElTree from '@/components/ElTree';

export default {
	name: "",
	//组件
	components: {
    ElTree,
	},
	//接收父组件传参
	props: {},
	data() {
		return {
      lazyType: true,
		}
	},
  computed:{
    ...mapState("localUser", ["getUserGoOrganizationList", ])
  },
  watch: {
    "getUserGoOrganizationList": {
      handler(newValue, oldValue) {
        // console.log(newValue);
      },
      deep: true
    },
  },
  created() {
    let UserInfo = sessionData('get', 'StateUserInfoSession', '')
    // if(UserInfo !== null) this.ActionsUserGoOrganizationList({userId: UserInfo.userId})
  },
	//页面初始化
	mounted(){

	},
	//监听click方法
	methods: {
    ...mapActions("localUser", ["ActionsUserGoOrganizationList"]),
	},
	
}
</script>

<style lang="scss" scoped>
.container {
	height: 100vh;
  padding: 100px 0 30px;
  background: url("../../assets/img/i_banner_bg.jpg") center center / cover no-repeat;
	.v-article-box {
    min-height: 400px;
		padding: 30px;
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
