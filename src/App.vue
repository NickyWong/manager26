<template>
  <div class="login-container">
    <div class="form-container">
      <h2>用户登录</h2>
      <el-form label-position="top" label-width="80px" :model="formData">
        <el-form-item label="用户名">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formData.password"></el-input>
        </el-form-item>
        <el-button class="login-btn" type="primary">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      formData:{
        name:'',
        password:''
      }
    }
  },
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
  // height: 400px;
  width: 580px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
}
.login-btn{
  width: 100%;
}

h2 {
  margin-top: 0;
}
</style>
