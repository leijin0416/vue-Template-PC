<template>
  <div class="v-form">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm"
      label-position="left"
    >
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="ruleForm.userName" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" placeholder="请输入密码" show-password ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" :disabled="disabledType">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import md5 from 'js-md5';
import { sessionData } from '@/filters/storage';

export default {
	name: "",
	// 组件
	components: {
	},
	// 接收父组件传参
	props: {},
	data() {
		return {
      disabledType: false,
      ruleForm: {
        userName: '',
        password: '',
      },
      rules: {
        userName: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
        ],
      }
		}
	},
	// 页面初始化
	mounted(){

	},
	// 监听click方法
	methods: {
    submitForm(formName) {
      let ref = this.$refs[formName]; // 类型断言的用，定义一个变量等价ref
      ref.validate((valid) => {
        if (valid) {
          this.submitFormClick();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    submitFormClick() {

    }
	},
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #f1f1f1;
}
</style>
