<template>
	<div class="nav-box">
		<div class="nav-content">
			<div class="container-wd">
				<Row>
					<Col :xs="24" :md="24" :lg="24">
						<div class="m-row">
							<div class="logo-box">
								<img class="img" src="@/assets/img/hk/logo.png" alt="logo.png">
							</div>
							<div class="v-nav-list" v-if="orIPhone == true">
								<ul class="m-navbar-list" v-if="navDataList == true" >
									<!-- 导航栏
									*    router-link :to="" - 也，页面间的路由跳转
									* 	 a 做锚点、跳外链等 -->
									<li v-for="(item , index) in navDataList" :index="index" >
										<router-link tag="a" :to="item.herf">
											<span class="navbar-text">{{item.name}}</span>
										</router-link>
									</li>
								</ul>
								<ul class="m-navbar-list" v-else>
									<li v-for="(item , index) in navDataListHf" :index="index" >
										<a :href="item.herf" :class="{onactive : index === navIndexs}">
											<span class="navbar-text"  @click="onShowClick(index)">{{item.name}}</span>
										</a>
									</li>
									<li>
										<!-- <RadioGroup @on-change="onLocaleClick" v-model="valLocale" type="button">
											<Radio label="zh-CN">CN</Radio>
											<Radio label="en-US">EN</Radio>
										</RadioGroup> -->
										<div class="m-switch-box">
											<Dropdown trigger="click" @on-click="onLocaleClick">
												<a href="javascript:void(0)">
													<Icon type="md-globe" />
													<span>{{valLocale === 'en-US'　?　'EN'　:　'CN'　}}</span>
													<Icon type="ios-arrow-down" />
												</a>
												<DropdownMenu slot="list">
													<DropdownItem name="zh-CN">CN</DropdownItem>
													<DropdownItem name="en-US">EN</DropdownItem>
												</DropdownMenu>
											</Dropdown>
										</div>
									</li>
								</ul>
							</div>
							<div class="icon-box" v-else>
								<div class="nav-icon-3" @click="onDrawerClick">
									<span></span>
									<span></span>
									<span></span>
								</div>
							</div>
						</div>
					</Col>
				</Row>
				
			</div>
		</div>
		<Drawer placement="left" :closable="false" v-model="valueDrawer" v-if="navDataList == false" >
			<div class="m-drawer-ip">
				<Row>
					<Col :xs="24" :md="24" :lg="24">
						<div class="logo-box">
							<img class="img" src="@/assets/img/hk/logo.png" alt="logo.png">
						</div>
						<ul class="m-navbar-list" v-if="navDataList == true" >
							<!-- 导航栏
							*    router-link :to="" - 也，页面间的路由跳转
							* 	 a 做锚点、跳外链等 -->
							<li v-for="(item , index) in navDataList" :index="index" >
								<router-link tag="a" :to="item.herf">
									<span class="navbar-text">{{item.name}}</span>
								</router-link>
							</li>
						</ul>
						<ul class="m-navbar-list" v-else>
							<li v-for="(item , index) in navDataListHf" :index="index" >
								<a :href="item.herf" :class="{onactive : index === navIndexs}">
									<span class="navbar-text"  @click="onShowClick(index)">{{item.name}}</span>
								</a>
							</li>
							<li style="padding-top: 15px;">
								<!-- <RadioGroup @on-change="onLocaleClick" v-model="valLocale" type="button">
									<Radio label="zh-CN">CN</Radio>
									<Radio label="en-US">EN</Radio>
								</RadioGroup> -->
								<Menu @on-select="onLocaleClick">
									<Submenu name="1">
										<template slot="title">
											<Icon type="md-globe" />
											<span>{{valLocale === 'en-US'　?　'EN'　:　'CN'　}}</span>
										</template>
										<MenuItem name="zh-CN">CN</MenuItem>
										<MenuItem name="en-US">EN</MenuItem>
									</Submenu>
								</Menu>
							</li>
						</ul>
					</Col>
				</Row>

			</div>
		</Drawer>
	</div>
</template>

<script>
import Vue from 'vue'
import { setStore, getStore } from '@/common/localUtil'
	
export default {
	name: "navs",
	//组件
	components: {
	},
	//接收父组件传参
	props: {
		navDataList: {
			type: Array,
			required: true
		},    
		navDataListHf: {
			type: Array,
			required: true
		},
	},
	data() {
		return {
			valLocale: 'en-US',
			orIPhone: true,
			valueDrawer: false,
			navIndexs: null,
			UserImg: require('@/assets/img/hk/banner.png'),
		}
	},
	//页面初始化
	created(){
		let that = this
		that.onIPhone()
		that.onHomeLocale()
	},
	watch: {
		"orIPhone": {
			handler: function(newer, older) {
				if (newer == null) {
					return
				} else {
					let _that = this;
					_that.orIPhone = newer;
					//this.getList(); // methods中定义好的获取数据列表的方法
					//alert(newer)
				}
			},
	　　　　deep: true
		}
	},
	//监听click方法
	methods: {
		onShowClick(i) {
			let _that = this;
			_that.navIndexs = i;
		},
		onDrawerClick() {
			let _that = this;
			_that.valueDrawer = true;
		},
		onIPhone() {
			let _that = this;
			//location.reload();
			if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
				_that.orIPhone = false;
				//console.log('手机');
				//window.location.href = 'https://www.baidu.com'
			} else {
				_that.orIPhone = true;
				//console.log('PC');
				//window.location.href = 'https://www.sohu.com'
			}
		},
		onLocaleClick (val) {
			setStore('localeCut', val);
			location.reload();
		},
		onHomeLocale() {
			let that = this
			let name = getStore('localeCut')
			if (name) {
				that.valLocale = name
			}
			//console.log(name);
		}
	},
	destroyed () {

    }
}
</script>

<style lang="scss" scoped>
.icon-box {
	position: absolute;
	right: 5px;
	top: 5px;
}
// 语言选择
/deep/.ivu-radio-group-button .ivu-radio-wrapper-checked {
	background: #ddd;
    border-color: #ddd;
	font-weight: bold;
	box-shadow: none;
}
.nav-icon-3 {
    width: 35px;
    height: 30px;
    margin: 10px 10px;
    position: relative;
    cursor: pointer;
	display: inline-block;
	span {
		background-color: #fff;
		position: absolute;
		border-radius: 2px;
		transition: .3s cubic-bezier(.8, .5, .2, 1.4);
		&:nth-child(1) {
			width: 100%;
			height: 4px;
			display: block;
			top: 0px;
			left: 0px;
		}
		&:nth-child(2) {
			width: 100%;
			height: 4px;
			display: block;
			top: 13px;
			left: 0px;
		}
		&:nth-child(3) {
			width: 100%;
			height: 4px;
			display: block;
			bottom: 0px;
			left: 0px;
		}
	}
}
// 中英切换
.m-switch-box {
	// position: absolute;
	// top: 50%;
	// right: 0;
	// transform: translateY(-50%);
	/deep/.ivu-dropdown {
		text-align: center;
		.ivu-dropdown-rel {
			a {
				color: #eee !important;
			}
			span {
				display: inline-block;
				padding: 0 5px 0 3px;
				font-size: 14px;
			}
		}
	}
}

.nav-box {
	position: relative;
	// 导航栏
	.nav-content {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 99;
		//background-color: $color-white;
	}
	.container-wd {
		.m-row {
			position: relative;
			min-height: 60px;
		}
		//垂直居中
		.logo-box {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
		//logo
		.logo-box {
			left: 0;
			width: 65px;
			box-sizing: content-box;
			padding-left: 1.25rem;
			overflow: hidden;
			line-height: 0;
			.img {
				width: 100%;
			}
		}
		//导航栏内容
		.m-navbar-list {
			padding-left: $lg-pd-c;
			font-size: 0;
			text-align: right;
			>li {
				display: inline-block;
				padding: 0 1.6rem;
				vertical-align: middle;
				a {
					display: block; 
					font-size: 16px;
					&:hover {
						span {
							color: #55A0FF;
						}
						
					}
				}
			}
			.navbar-text {
				position: relative;
				display: block;
				padding: 25px 0;
				color: $color-white;
				&::before {
					content: ' ';
					position: absolute;
					bottom: 15px;
					left: 50%;
					display: block;
					width: 0;
					height: 2px;
					background: $color-body-c;
					transform: translateX(-50%);
					transition: all .3s linear;
				}
				// &:hover::before {
				// 	width: 75%;
				// }
			}
			.dropdowns {
				position: relative;
				font-size: $font-size-base;
				color: $color-white;
			}
			.onactive span {
				color: $color-body-c;
				&::before {width: 75%;}
			}
		}
		//右侧
		.nav-login-r {
			text-align: center;
			/deep/.ivu-dropdown-rel a {
				color: $color-white;
			}
			li {
				display: block;
				min-width: $md-pd-c;
				padding: 0 1.25rem;
				.a-hover {
					display: block;
					padding: 1.25rem 0;
					font-size: $font-size-mini;
					border-bottom: 1px solid #eee;
					color: $color-black;
				}
			}
		}
	}
	
}

/deep/.ivu-drawer-body {
	padding: 0;
	.logo-box {
		padding: 10px;
		background-color: #101010;
		.img {width: 65px;}
	}
	.m-navbar-list {
		padding: 10px;
		li a {
			display: block;
			padding: 5px 0;
			line-height: 2;
			font-size: 14px;
			color: #333;
		}
	}
}

//小于1024
@media only screen and (max-width: 1024px) {
	.nav-box {
		.m-navbar-list {
			display: none;
			padding: 0;
		}
	}
}
</style>
