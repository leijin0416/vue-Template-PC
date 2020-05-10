<template>
	<div class="page">
		<!-- 手机导航栏 -->
		<div class="m-drawer-l">
			<div class="m-drawer">
				<Button @click="value2 = true" class="btn" type="primary">Open</Button>
			</div>
			<Drawer title="" placement="left" :closable="false" v-model="value2">
				<ul class="m-navbar-list">
					<li class="navbar-img">
						<img src="@/assets/img/hk/logo.png" alt="logo.png" class="img">
					</li>
					<!-- 导航栏 -->
					<li v-for="(item , index) in navList" :index="index" :key="index" >
						<a :href="item.herf" :class="{onactive:item.id === 1}">
							<span class="navbar-item" >{{item.name}}</span>
						</a>
					</li>
					<!-- 下拉菜单 -->
					<!-- <li class="m-dropdowns-list">
						<div class="span" @click="onshow = !onshow">切换语言</div>
						<transition name="fade">
							<div class="switch-list" v-if="onshow">
								<router-link tag="a" to="/" >
									<span href="">English</span>
								</router-link>
								<router-link tag="a" to="/index" >
									<span href="">简体中文</span>
								</router-link>
								<router-link tag="a" to="/zh-tw" >
									<span href="">繁体中文</span>
								</router-link>
							</div>
						</transition>
					</li> -->
				</ul>
			</Drawer>
		</div>

		<m-nav v-bind:navList="navList" />
		<!-- 页面容器 -->
		<slot name="container"></slot>
		<m-footer 
			v-bind:FooterName="FooterName" 
			v-bind:FooterCourse="FooterCourse" 
			v-bind:FooterStore="FooterStore" 
			v-bind:FooterAndroid="FooterAndroid" />
	</div>

</template>

<script>
import VueDrawerLayout from "@/components/VueDrawerLayout/VueDrawerLayout"
import NavBar from "@/components/NavBar"
import FooterBox from "@/components/FooterBox"

export default {
	name: "rukou",
	//组件
	components: {
		'm-container-fluid': VueDrawerLayout,
		'm-nav': NavBar,
		'm-footer': FooterBox,
	},
	//接收父组件传参
	props: {
		'navList': null,
		'FooterCourse': null,
		'FooterName': null,
		'FooterStore': null,
		'FooterAndroid': null,
	},
	data() {
		return {
			value2: false,
			onshow: false,
		}
	},
	//页面初始化
	mounted(){},
	//监听click方法
	methods: {
	},
	
}
</script>

<style lang="scss" scoped>
/deep/.ivu-drawer-body {
	padding: 0;
	.m-navbar-list {
		
		.navbar-img {
			display: block;
			padding: 1.25rem;
			border-bottom: 0;
			background-color: rgba(51, 51, 51, .8);
			.img {width: 10rem;height: auto;}
		}
		li {
			padding: 1rem 0;
			border-bottom: 1px solid #eee;
			a {display: block;padding: 0 1.25rem;font-size: 14px;color: $color-black;}
			.onactive {
				color: $color-body-c;
			}
		}
		.m-dropdowns-list {
			font-size: 14px;
			border: 0;
			color: $color-black;
			.span {
				position: relative;
				display: block;
				cursor: pointer;
				padding: 0 1.25rem 1.25rem;
				&::after {
					content: ' ';
					position: absolute;
					top: .5rem;
					right: 1.25rem;
					display:inline-block;
					border-style:solid;
					width: 12px;
					height: 12px;
					border-width:2px 2px 0 0;
					border-color:#ddd;
					transform: matrix(0.71,0.71,-0.71,0.71,0,0)
				}
			}
			.switch-list {
				a {
					display: block;
					padding: .8rem 1rem .8rem 2rem;
					font-size: 1rem;
					border-top: 1px solid #eee;
				}
			}
		}
	}
}
.m-drawer {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: transparent;
	//打开按钮
	.btn {
		position: fixed;
		z-index: 999;
		top: 15px;
		left: 15px;
		width: 60px;
		height: 45px;
		display: none;
		font-size: 0;
		border: none;
		border-radius: .416rem;
		background: rgba(0, 0, 0, .2);
	}
	.btn:before {
		content: " ";
		position: absolute;
		left: 8px;
		top: 6px;
		opacity: 1;
		display: block;
		width: 45px;
		height: 5px;
		background: $color-body-c;
		border-radius: 10px;
		/* 利用阴影制作中间的那根线，当鼠标hover时隐藏 */
		box-shadow: 0 14px $color-body-c;
	}
	.btn:after {
		content: " ";
		position: absolute;
		left: 8px;
		bottom: 5px;
		display: block;
		width: 45px;
		height: 5px;
		background: $color-body-c;
		border-radius: 10px;
	}
}
//小于1024
@media only screen and (max-width: 1024px) {
	//显示点击框
	.m-drawer {
		.btn {display: block;}
	}
}
</style>
