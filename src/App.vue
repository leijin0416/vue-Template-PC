<template>
	<div id="app">
		<HeaderNavBar  v-if="$route.meta.displayNavBar" />
		<Layout>
			<router-view v-wechat-title="$route.meta.title" />
		</Layout>
	</div>
</template>

<script>
import Layout from "@/layouts";
import HeaderNavBar from "@/layouts/HeaderNavBar";

export default {
	name: "App",
	components: {
		Layout,
		HeaderNavBar,
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
#app {
	background-color: #f1f1f1;
}
</style>
