<template>
  <div class="container">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :xs="24" :md="20" :lg="20" :xl="13">
        <article class="v-article-box">
				  <h2 class="v-h2" v-if="type === '1'">注册分互转</h2>
				  <h2 class="v-h2" v-else-if="type === '2'">杠杆对冲钱包互转</h2>
				  <h2 class="v-h2" v-else-if="type === '3'">ME币钱包互转</h2>
				  <h2 class="v-h2" v-else>转账</h2>
          <div class="v-form-box">
            <el-form
              :model="ruleForm"
              :rules="rules"
              label-width="120px"
              ref="ruleForm"
              class="demo-ruleForm"
              label-position="right"
            >
              <el-form-item label="数额" prop="userName">
                <el-input type="number" v-model="ruleForm.userName" placeholder="请输入需要兑换的数额"></el-input>
              </el-form-item>
              <el-form-item label="安全密码" prop="securityPassword">
                <el-input v-model="ruleForm.securityPassword" placeholder="请输入安全密码" show-password></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')" :loading="loadingType" class="v-btn-box">提交</el-button>
              </el-form-item>
            </el-form>
          </div>
        </article>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';
import { apiWebUserRegister } from "@/api/index";
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
      type: this.$route.query.id,
      loadingType: false,
      disabledType: false,
      ruleForm: {
        userName: "",
        securityPassword: "",
      },
      rules: {
        userName: [
          { required: true, message: '兑换的数额不能为空', trigger: 'blur' },
          {
            required: true,
            pattern: /^\S*$/,
            message: '不能含有空格',
            trigger: 'blur'
          },
        ],
        securityPassword: [
          { required: true, message: '安全密码不能为空', trigger: 'blur' },
          {
            required: true,
            pattern: /^\S*$/,
            message: '不能含有空格',
            trigger: 'blur'
          },
        ],
      },
		}
	},
  computed:{
    ...mapState("localUser", ["getUserInfoTableList", ])
  },
  watch: {
    "getUserInfoTableList": {
      handler(newValue, oldValue) {
        // console.log(newValue);
      },
      immediate: true
    },
  },
  created() {
    // this.ActionsUserInfoTableList(this.param)
  },
	// 页面初始化
	mounted(){
  },
	// 监听click方法
	methods: {
    ...mapActions("localUser", ["ActionsUserInfoTableList"]),
    resetForm(formName) {
      const _that = this;
      const ref = _that.$refs[formName]; // 类型断言的用，定义一个变量等价ref
      ref.resetFields();
    },
    submitForm(formName) {
      let ref = this.$refs[formName]; // 类型断言的用，定义一个变量等价ref
      this.loadingType = true;
      ref.validate((valid) => {
        if (valid) {
          this.submitFormClick();
        } else {
          this.loadingType = false;
          console.log('error submit!!');
          return false;
        }
      });
    },
    // 按钮  -注册
    async submitFormClick() {
      let params = this.ruleForm;
			let {data} = await apiWebUserRegister(params);
			// console.log(params);
			// console.log(data);
			if(data.code === 200) {
				this.$message({
					type: "success",
					message: '提交成功',
					duration: 3000,
          onClose: ()=> {
            this.resetForm('ruleForm');
            this.loadingType = false;
          }
				});
			} else {
        this.$message({
          message: data.message,
          type: 'error',
          onClose: () => {
            this.loadingType = false;
          }
        });
      }
    }
	},
}
</script>

<style lang="scss" scoped>
.container {
  padding: 100px 0 30px;
  height: 100vh;
  background: url("../../assets/img/i_banner_bg.jpg") center center / cover no-repeat;
  .v-article-box {
    min-height: 400px;
    padding: 30px 30px 20px;
    box-shadow: 0 0 10px #eee;
    background-color: #fff;
  }
  .v-h2 {
    padding-bottom: 20px;
    margin-bottom: 30px;
    border-bottom: 1px solid #f1f1f1;
    color: #333;
  }
  .v-btn-box {
    width: 250px;
    margin: 20px 250px 0;
  }
}
</style>
