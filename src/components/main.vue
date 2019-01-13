<template>
  <div class="container">
    <el-button  @click="logout" type="primary">退出登录</el-button>
  </div>
</template>

<script>
export default {
  name: "app",
  beforeCreate() {
      let token = window.sessionStorage.getItem('token');
      if(token){

      }else{
          this.$router.push('login');
      }
  },
  methods: {
      logout(){
          window.sessionStorage.removeItem('token');
          this.$router.push('login');
      }
  },
};
</script>

<style lang="scss">
</style>
