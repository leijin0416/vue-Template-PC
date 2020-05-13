<template>
	<div id="app" class="g-content-box">
		<Layout>
			<router-view v-wechat-title="$route.meta.title" />
    		<BackTop></BackTop>
		</Layout>
	</div>
</template>

<script>
import Layout from "@/layouts"

export default {
	name: "App",
	components: {
		Layout,
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
