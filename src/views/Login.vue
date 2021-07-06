<template>
  <a-form-model
    class="login-from"
    ref="loginForm"
    :model="loginForm"
    :rules="rules"
    v-bind="layout"
  >
    <a-form-model-item has-feedback label="邮箱" prop="email">
      <a-input v-model="loginForm.email" />
    </a-form-model-item>
    <a-form-model-item has-feedback label="密码" prop="password">
      <a-input v-model="loginForm.password" type="password" autocomplete="off" />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="submitForm('loginForm')">
        登录
      </a-button>
      <a-button style="margin-left: 10px" @click="resetForm('loginForm')">
        注册
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
import api from '../api/user';

export default {
  data() {
    const emailReg = /^[\w-]+@[\w.-]+.com$/;
    const checkEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入邮箱账号'));
      }
      if (emailReg.test(value)) {
        return callback(); // return callback()就是继续下面的操作
      }
      return callback(new Error('邮箱格式不正确'));
    };
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码!'));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        password: '',
        email: '',
      },
      rules: {
        password: [{ validator: validatePass, trigger: 'change' }],
        email: [{ validator: checkEmail, trigger: 'change' }], // 这里的change 意思是当我修改的时候才进行校验
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api
            .login(this.loginForm)
            .then((res) => {
              console.log(res);
              this.$store.dispatch('setUserInfo', res);
              // 如果正确，则跳转到home页面
              this.$router.push({
                name: 'Home',
              });
            })
            .catch((error) => {
              this.$message.error(error);
            });
          return true;
        }
        console.log('error submit!!');
        return false;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.login-from {
  max-width: 500px;
  margin: 100px auto;
  border: 1px solid #eee;
  padding: 40px 0 16px 50px;
  border-radius: 20px;
}
</style>
