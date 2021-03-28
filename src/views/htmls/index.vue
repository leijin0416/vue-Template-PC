<template>
<div>
  <a-row type="flex" justify="space-around" align="middle">
    <a-col :span="4">
      <p class="height-100">
        col-4
      </p>
    </a-col>
    <a-col :span="4">
      <p class="height-50">
        col-4
      </p>
    </a-col>
    <a-col :span="4">
      <p class="height-120">
        col-4
      </p>
    </a-col>
    <a-col :span="4">
      <p class="height-80">
        col-4
      </p>
    </a-col>
  </a-row>
  <a-icon type="caret-right" />
</div>
</template>

<script>
import vue from 'vue'


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
	},
	
}
</script>

<style lang="scss" scoped></style>
