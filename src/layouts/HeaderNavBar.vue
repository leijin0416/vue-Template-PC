<template>
<Header class="v-header">
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :xs="24" :md="20" :lg="20" :xl="13">
      <div class="v-nav-header">
        <div class="v-img">
          <img src="@/assets/img/logo.png" alt="">
        </div>
        <div class="v-el-menu">
          <el-menu class="el-menu-demo" unique-opened 
            :default-active="$route.path" 
            @select="handleSelect" 
            mode="horizontal" 
            text-color="#333333" 
            active-text-color="#66b1ff">
            <template v-for="(item,i) in submenuList">
                <!-- 二级导航 -->
                <el-submenu :index="item.path" v-if="item.menuList">
                  <template slot="title">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.title}}</span>
                  </template>
                  <el-menu-item :index="li.path" v-for="(li, index) in item.menuList" :key="index">
                      {{li.title}}
                  </el-menu-item>
                </el-submenu>  
                <!-- 一级导航 -->
                <el-menu-item :index="item.path" v-else>
                  <i :class="item.icon"></i>
                  <span slot="title">{{item.title}}</span>
                </el-menu-item>
            </template>
          </el-menu>
        </div>
      </div>
    </el-col>
  </el-row>
</Header>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: "",
	//组件
	components: {
	},
	//接收父组件传参
	props: {},
	data() {
		return {
      activeIndex: '/',
			submenuList:[
        {
          id: '1',
          title:'首页',
          path:'/',
          icon:'el-icon-s-home'
        },
        {
          id: '2',
          title:'团队管理',
          icon:'el-icon-s-custom',
          menuList:[
            {
              id: '2-1',
              title:'新注册',
              path:'/register',
            },
            {
              id: '2-2',
              title:'用户列表',
              path:'/user/list',
            },
            {
              id: '2-3',
              title:'推荐图',
              path:'/user/recommend',
            },
          ]
        },
      ]
		}
	},
	//页面初始化
	mounted(){

	},
	//监听click方法
	methods: {
    ...mapActions("localUser", [""]),
    handleSelect(key, keyPath) {
      this.$router.push({path: key, query: {}})
      // console.log(key, keyPath);
    }
	},
	
}
</script>

<style lang="scss" scoped>
.v-header {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 6px 8px #f5f5f5;
  background-color: #fff;
}
.v-nav-header {
  position: relative;
  min-height: 60px;
  .v-img {
    display: inline-block;
    width: 60px;
  }
  .v-el-menu {
    position: absolute;
    left: 100px;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    .el-menu-li {
      display: inline-block;
    }
  }
  /deep/.el-menu {
    border-bottom: none; 
    background-color: initial;
    .el-menu-item, .el-submenu__title {
      min-width: 120px;
      text-align: center;
    }
    .el-menu-item:focus, .el-menu-item:hover, .el-submenu__title:focus, .el-submenu__title:hover {
      background-color: initial;
    }
    .is-active i:nth-child(1) {color: #66b1ff;}
  }
}
:focus  {
  outline: initial;
}
</style>
