<template>
	<div id="app" class="g-content-box">
		<Layout>
			<router-view v-wechat-title="$route.meta.title" />
			<v-footer />
    		<BackTop></BackTop>
		</Layout>
	</div>
</template>

<script>
import Layout from "@/layouts"
import FooterBox from "@/components/FooterBox"
export default {
	name: "App",
	components: {
		Layout,
		'v-footer': FooterBox,
	},
	data() {
		return {
		}
	},
	methods: {
	}
};
</script>

<style lang="scss" scoped>
	
</style>
