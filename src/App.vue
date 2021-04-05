<template>
	<div id="app">
		<HeaderNavBar  v-if="$route.meta.displayNavBar" />
		<Layout>
			<router-view v-wechat-title="$route.meta.title" />
		</Layout>
	</div>
</template>

<script>
import { mapState } from 'vuex';
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
  computed:{
    ...mapState(['errorMessage'])
  },
  watch: {
    // 处理 axios 报错
    'errorMessage': {
      handler(newValue, oldValue) {
        if(newValue !== '1') {
          this.$message({
            message: newValue,
            type: 'error',
            onClose: () => {
              this.$store.dispatch('changeErrorMessage', '1')
            },
            duration: 3000
          });
        }
        // console.log(newValue);
      },
      immediate: true
    },
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
