<template>
  <div class="login-container">
    <div class="form-container">
      <h2>用户登录</h2>
      <el-form label-position="top" label-width="80px" :rules="rules" ref="formData" :model="formData">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="formData.password"></el-input>
        </el-form-item>
        <el-button class="login-btn" @click="submitForm('formData')" type="primary">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      formData: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "change" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "change"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          {
            min: 6,
            max: 12,
            message: "长度在 6 到 12 个字符",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 成功
          // axios 调用接口
          this.$axios.post("login", this.formData).then(res => {
            // console.log(res);
            if (res.data.meta.status === 400) {
              // 错误
              // this.$message.error(res.data.meta.msg);
            } else if (res.data.meta.status == 200) {
              // 正确
              // this.$message.success(res.data.meta.msg);
                window.sessionStorage.setItem('token',res.data.data.token);
                this.$router.push('/');
            }
          });
        } else {
          // 失败
          // 弹框提示
          this.$message.error("请正确输入用户名和密码 ^_^");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
.login-container {
  height: 100%;
  background-color: #324151;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  width: 580px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
}
.login-btn {
  width: 100%;
}

h2 {
  margin-top: 0;
}
</style>
