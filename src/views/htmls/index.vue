<template>
<div class="container">
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :xs="24" :md="20" :lg="20" :xl="13">
      <article class="v-article-box reveal-top">
				<h2 class="v-h2">
					欢迎回来
					<span @click="onSignOutClick"> <i class="el-icon-switch-button"></i> 退出登录</span>
				</h2>
        <el-row :gutter="15">
          <el-col :span="12">
            <div class="v-text-box">
              <p>
                <span>用户ID： </span>
                <span>{{userInfoList.userId}}</span>
              </p>
              <p>
                <span>用户名： </span>
                <span>{{userInfoList.userName}}</span>
              </p>
              <p>
                <span>注册时间： </span>
                <span>{{userInfoList.createTime | timeFilter}}</span>
              </p>
            </div>
          </el-col>
          <el-col :span="12">
            <router-link :to="{ path: '/user/password', query: { id: '1' }}" class="v-ahover" tag="a">修改登录密码</router-link>
            <router-link :to="{ path: '/user/password', query: { id: '2' }}" class="v-ahover">修改安全密码</router-link>
          </el-col>
        </el-row>
        <div class="v-wallet-main" v-if="getUserAssets.length > 0">
          <ul class="v-list-box">
            <li v-for="(item, index) in getUserAssets" :key="index" class="v-list">
              <p>{{item.assetsAvailable}}</p>
              <p v-if="item.assetsName === 'LEVERAGE_WALLET'">杠杆对冲钱包</p>
              <p v-else-if="item.assetsName === 'REGISTER_POINT'">注册分</p>
              <p v-else-if="item.assetsName === 'ME_COIN'">ME币钱包</p>
              <p v-else-if="item.assetsName === 'CASH_WALLET'">现金钱包</p>
              <p v-else-if="item.assetsName === 'ACTIVITY_WALLET'">活动钱包</p>
              <p v-else>奖金钱包</p>
            </li>
          </ul>
        </div>
			</article>
    </el-col>
  </el-row>
</div>
</template>

<script>
import scrollReveal from 'scrollreveal';
import { scrollRevealEffect } from "@/filters/Common";
import { mapActions, mapState, mapMutations } from 'vuex';
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
      scrollReveal: scrollReveal(),
			userInfoList: {},
      getUserAssets: []
		}
	},
  computed:{
    ...mapState("localUser", ["getUserInfoSession", ])
  },
  watch: {
    "getUserInfoSession": {
      handler(newValue, oldValue) {
        // console.log(newValue);
      },
      immediate: true
    },
  },
	//页面初始化
	mounted(){
    let revealTop = scrollRevealEffect(500, 'right', false, false, '200px');
    this.scrollReveal.reveal('.reveal-top', revealTop);

    let UserAssets = sessionData('get', 'StateUserAssetsSession', '');
    let UserInfo = sessionData('get', 'StateUserInfoSession', '');   // 用户信息
    if(UserInfo !== null) {
      this.getUserAssets = UserAssets.assets;
      this.userInfoList = UserInfo;
    }
    // console.log(UserAssets);
    // console.log(UserInfo);
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
    min-height: 400px;
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
  .v-text-box {
    padding: 20px 0 40px;
    p {
      padding-bottom: 15px;
    }
    span {
      display: inline-block;
      min-width: 80px;
      vertical-align: middle;
      &:nth-child(1) {color: #999;}
    }
  }
  .v-ahover {
    display: inline-block;
    vertical-align: middle;
    padding: 15px;
    text-decoration: initial;
    color: #333;
  }
  .v-wallet-main {
    padding: 40px 0 10px;
    border-top: 1px solid #f1f1f1;
    .v-list-box {
      font-size: 0;
    }
    .v-list {
      display: inline-block;
      width: 33.333%;
      padding: 20px 15px;
      vertical-align: middle;
      font-size: 14px;
      text-align: center;
      p {
        color: #666;
        &:nth-child(1) {
          padding-bottom: 15px;
          font-size: 26px;
          font-weight: bold;
          color: #333;
        }
      }
    }
  }
}
</style>
