<template>
	<div id="app">
		<Layout>
			<router-view v-wechat-title="$route.meta.title" />
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
