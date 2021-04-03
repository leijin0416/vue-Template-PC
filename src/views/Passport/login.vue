<template>
  <div class="container">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="6">
        <article class="v-article-box">
          <h2 class="v-h2"><span>登录</span></h2>
          <div class="v-form">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              class="demo-ruleForm"
              label-position="left"
            >
              <el-form-item prop="userName">
                <el-input v-model="ruleForm.userName" prefix-icon="el-icon-user" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="ruleForm.password" placeholder="请输入密码" prefix-icon="el-icon-mobile-phone" show-password ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')" :disabled="disabledType">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </article>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import md5 from 'js-md5';
import { mapActions, mapState, mapMutations } from 'vuex';
import { apiWebUserLogin } from "@/api/index";
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
  computed:{
    ...mapState({}),
  },
	// 页面初始化
	mounted(){},
	// 监听click方法
	methods: {
    ...mapMutations("localUser", ["ActionsDispatch"]),
    submitForm(formName) {
      let ref = this.$refs[formName]; // 类型断言的用，定义一个变量等价ref
      this.disabledType = true;
      ref.validate((valid) => {
        if (valid) {
          this.submitFormClick();
        } else {
          this.disabledType = false;
          console.log('error submit!!');
          return false;
        }
      });
    },
    async submitFormClick() {
			let { data } = await apiWebUserLogin(this.ruleForm);
      // console.log(data);
      if (data.code === 200) {
			  sessionData('set', 'StateSessionToken', data.data.token);
        this.$message({
          message: '登录成功，正在跳转...',
          type: 'success',
          onClose: () => {
            this.disabledType = false;
            this.$router.push({path: '/'});
          }
        });
      } else {
        this.$message({
          message: data.message,
          type: 'error',
          onClose: () => {
            this.disabledType = false;
          }
        });
      }
      // console.log(data);
    }
	},
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  background: url("../../assets/img/i_banner_bg.jpg") center center / cover no-repeat;
  .v-article-box {
    padding: 30px 30px 20px;
    margin-top: 200px;
    box-shadow: 0 0 10px #eee;
    background-color: #fff;
    .v-h2 {
      position: relative;
      margin-bottom: 30px;
      text-align: center;
      font-weight: bold;
      color: #40485b;
      &::before {
        z-index: 1;
        content: ' ';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 1px;
        background-color: #f1f1f1;
        transform: translate(-50%, -50%);
      }
      span {
        z-index: 9;
        position: relative;
        display: inline-block;
        background-color: #fff;
        padding: 5px 20px;
      }
    }
    /deep/.el-button {
      width: 100%;
      margin-top: 15px;
    }
  }
}
</style>
