<template>
<div class="container">
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :xs="24" :md="20" :lg="20" :xl="13">
      <article class="v-article-box">
				<h2 class="v-h2">
					欢迎回来
					<span @click="onSignOutClick"> <i class="el-icon-switch-button"></i> 退出登录</span>
				</h2>
			</article>
    </el-col>
  </el-row>
</div>
</template>

<script>
import { sessionData } from '@/filters/storage';

export default {
	name: "",
	//组件
	components: {
	},
	//接收父组件传参
	props: {},
	data() {
		return {
			bdTokenUrl: 'http://www.ethexc.io/pdf/whitepaper_en.pdf'
		}
	},
	//页面初始化
	mounted(){

	},
	//监听click方法
	methods: {
		onSignOutClick() {
			sessionData('clean', 'StateSessionToken');
			this.$message({
				message: '退出成功，正在跳转...',
				type: 'success',
				duration: 3000,
        onClose: ()=> {window.location.reload();}
			});
		}
	},
	
}
</script>

<style lang="scss" scoped>
.container {
	height: 100vh;
  padding: 100px 0 30px;
  background: url("../../assets/img/i_banner_bg.jpg") center center / cover no-repeat;
	.v-article-box {
		padding: 30px;
    box-shadow: 0 0 10px #eee;
		background-color: #fff;
	}
	.v-h2 {
		position: relative;
    padding-bottom: 20px;
    margin-bottom: 30px;
    border-bottom: 1px solid #f1f1f1;
    color: #333;
		span {
      cursor: pointer;
			position: absolute;
			right: 0;
			top: 50%;
			font-size: 14px;
			font-weight: initial;
			color: #409eff;
			transform: translateY(-50%);
		}
	}
}
</style>
