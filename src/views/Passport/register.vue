<template>
<div class="container">
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :xs="24" :lg="22" :xl="13">
      <article class="v-form-box">
				<h2 class="v-h2">新注册</h2>
        <el-form
          :model="ruleForm"
          :rules="rules"
          label-width="120px"
          ref="ruleForm"
          class="demo-ruleForm"
          label-position="right"
        >
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="ruleForm.userName" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="名称" prop="fullName">
            <el-input v-model="ruleForm.fullName" placeholder="请输入名称"></el-input>
          </el-form-item>
          <el-form-item label="安置人" prop="parentUserName">
            <el-input v-model="ruleForm.parentUserName" placeholder="请输入安置人" @blur="onParentUserNameBlur"></el-input>
          </el-form-item>
          <el-form-item label="安置位置" prop="position">
            <el-select v-model="ruleForm.position" placeholder="请选择安置位置" style="width: 100%">
              <el-option
                v-for="item in optionsPlace"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="推荐人" prop="invitationUserName">
            <el-input v-model="ruleForm.invitationUserName" placeholder="请输入推荐人"></el-input>
          </el-form-item>
          <el-form-item label="手机号码" prop="phone">
            <el-row>
              <el-col :span="6">
                <el-select v-model="ruleForm.countryId" placeholder="请选择国家/区号" style="width: 95%">
                  <el-option
                    v-for="item in optionsCountry"
                    :key="item.countryId"
                    :label="item.countryAreaCode + ' ' + item.countryNameCh"
                    :value="item.countryId">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="18">
                <el-input v-model="ruleForm.phone" placeholder="请输入手机号码"></el-input>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="登录密码" prop="loginPassword">
            <el-input v-model="ruleForm.loginPassword" placeholder="请输入登录密码" show-password ></el-input>
          </el-form-item>
          <el-form-item label="确认登录密码" prop="confirmPassword">
            <el-input v-model="ruleForm.confirmPassword" placeholder="请输入确认登录密码" show-password ></el-input>
          </el-form-item>
          <el-form-item label="安全密码" prop="securityPassword">
            <el-input v-model="ruleForm.securityPassword" placeholder="请输入登录密码" show-password ></el-input>
          </el-form-item>
          <el-form-item label="确认安全密码" prop="confirmSecurityPassword">
            <el-input v-model="ruleForm.confirmSecurityPassword" placeholder="请输入确认登录密码" show-password ></el-input>
          </el-form-item>
          <el-form-item label="电邮" prop="email">
            <el-input v-model="ruleForm.email" placeholder="请输入电邮"></el-input>
          </el-form-item>
          <el-form-item label="配套" prop="contractId">
            <el-select v-model="ruleForm.contractId" placeholder="请选择配套" style="width: 100%">
              <el-option
                v-for="item in optionsMatching"
                :key="item.contractId"
                :label="item.contractName"
                :value="item.contractId">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" :disabled="disabledType" class="v-btn-box">注册</el-button>
          </el-form-item>
        </el-form>
      </article>
    </el-col>
  </el-row>
</div>
</template>

<script>
import md5 from 'js-md5';
import { mapActions, mapState } from 'vuex';
import { apiWebUserCheckParent, apiWebUserRegister } from "@/api/index";
import { sessionData } from '@/filters/storage';

export default {
	name: "",
	// 组件
	components: {
	},
	// 接收父组件传参
	props: {},
	data() {
    var validatePhone = (rule, value, callback) => {
      if (this.ruleForm.countryId === '') {
        callback(new Error('请选择国家/区号'))
      } else {
        callback()
      }
    }
    var validatePassword = (rule, value, callback) => {
      if (this.ruleForm.confirmPassword !== value) {
        callback(new Error('登录密码与确认登录密码不一致！'))
      } else {
        callback()
      }
    }
    var validateSecurityPassword = (rule, value, callback) => {
      if (this.ruleForm.securityPassword !== value) {
        callback(new Error('安全密码与确认安全密码不一致！'))
      } else {
        callback()
      }
    }
    var validateComfirmPwd = (rule, value, callback) => {
      if (this.ruleForm.loginPassword !== value) {
        callback(new Error('确认登录密码与登录密码不一致！'))
      } else {
        callback()
      }
    }
    var validateSecurityComfirmPwd = (rule, value, callback) => {
      if (this.ruleForm.securityPassword !== value) {
        callback(new Error('确认安全密码与安全密码不一致！'))
      } else {
        callback()
      }
    }
		return {
      disabledType: false,
      optionsPlace: [
        {
          value: '1',
          label: '左侧'
        },
        {
          value: '2',
          label: '右侧'
        }
      ],
      optionsCountry: [],
      optionsMatching: [],
      ruleForm: {
        userName: '',
        fullName: '',
        phone: '',
        parentUserName: '',
        position: '',
        invitationUserName: '',
        loginPassword: '',
        confirmPassword: '',
        countryId: '',
        securityPassword: '',
        confirmSecurityPassword: '',
        email: '',
        contractId: '',
      },
      rules: {
        userName: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          {
            required: true,
            pattern: /^\S*$/,
            message: '不能含有空格',
            trigger: 'blur'
          },
        ],
        fullName: [
          { required: true, message: '名称不能为空', trigger: 'blur' },
          {
            required: true,
            pattern: /^\S*$/,
            message: '不能含有空格',
            trigger: 'blur'
          },
        ],
        phone: [
          { required: true, message: '手机号码不能为空', trigger: 'blur' },
          {
            required: true,
            pattern: /^\S*$/,
            message: '不能含有空格',
            trigger: 'blur'
          },
          { validator: validatePhone, trigger: 'blur' }
        ],
        parentUserName: [
          { required: true, message: '安置人不能为空', trigger: 'blur' },
          {
            required: true,
            pattern: /^\S*$/,
            message: '不能含有空格',
            trigger: 'blur'
          },
        ],
        position: [
          { required: true, message: '安置人位置不能为空', trigger: 'blur' },
        ],
        invitationUserName: [
          { required: true, message: '推荐人不能为空', trigger: 'blur' },
          {
            required: true,
            pattern: /^\S*$/,
            message: '不能含有空格',
            trigger: 'blur'
          },
        ],
        loginPassword: [
          { required: true, message: '登录密码不能为空', trigger: 'blur' },
          {
            required: true,
            pattern: /^\S*$/,
            message: '不能含有空格',
            trigger: 'blur'
          },
          // { validator: validatePassword, trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, message: '确认登录密码不能为空', trigger: 'blur' },
          {
            required: true,
            pattern: /^\S*$/,
            message: '不能含有空格',
            trigger: 'blur'
          },
          { validator: validateComfirmPwd, trigger: 'blur' }
        ],
        securityPassword: [
          { required: true, message: '安全密码不能为空', trigger: 'blur' },
          {
            required: true,
            pattern: /^\S*$/,
            message: '不能含有空格',
            trigger: 'blur'
          },
          { validator: validateSecurityPassword, trigger: 'blur' }
        ],
        confirmSecurityPassword: [
          { required: true, message: '确认安全密码不能为空', trigger: 'blur' },
          {
            required: true,
            pattern: /^\S*$/,
            message: '不能含有空格',
            trigger: 'blur'
          },
          { validator: validateSecurityComfirmPwd, trigger: 'blur' }
        ],
        email: [
          { required: true, message: '电邮不能为空', trigger: 'blur' },
          {
            required: true,
            pattern: /\@/g,
            message: '请输入正确的邮箱地址',
            trigger: 'blur'
          }
        ],
        contractId: [
          { required: true, message: '配套不能为空', trigger: 'blur' },
        ],
      }
		}
	},
  computed:{
    ...mapState("localUser", ['getFindCountry', 'getUserContractFindCountry'])
  },
  watch: {
    'getFindCountry': {
      handler(newValue, oldValue) {
        this.optionsCountry = newValue;
        // console.log(newValue);
      },
      immediate: true
    },
    'getUserContractFindCountry': {
      handler(newValue, oldValue) {
        this.optionsMatching = newValue;
        // console.log(newValue);
      },
      immediate: true
    },
  },
	// 页面初始化
	mounted(){
    this.ActionsUserFindCountry({});
    this.ActionsUserContractFindCountry({});
	},
	// 监听click方法
	methods: {
    ...mapActions("localUser", ["ActionsUserFindCountry", "ActionsUserContractFindCountry"]),
    resetForm(formName) {
      const _that = this;
      const ref = _that.$refs[formName]; // 类型断言的用，定义一个变量等价ref
      ref.resetFields();
    },
    async onParentUserNameBlur() {
      let params = {
        parentUserName: this.ruleForm.parentUserName
      }
			let {data} = await apiWebUserCheckParent(params);
			// console.log(data);
			if(data.code !== 200) {
				this.$message({
					type: 'error',
					message: data.message,
					duration: 2000,
          onClose: ()=> {this.ruleForm.parentUserName = ''}
				});
			}
    },
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
    async submitFormClick() {
      let params = this.ruleForm;
			let {data} = await apiWebUserRegister(params);
			// console.log(params);
			// console.log(data);
			if(data.code === 200) {
				this.$message({
					type: "success",
					message: '注册成功',
					duration: 2000,
          onClose: ()=> {this.resetForm()}
				});
			}
    }
	},
}
</script>

<style lang="scss" scoped>
.container {
  padding: 100px 0 30px;
  background: url("../../assets/img/i_banner_bg.jpg") center center / cover no-repeat;
  .v-form-box {
    padding: 30px;
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
    margin: 0 250px;
  }
}
</style>
