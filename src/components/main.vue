<template>
  <div class="main-container">
    <el-container>
    <el-header>
            <el-row>
            <el-col :span="4">
                <div class="grid-content bg-purple">
                <img src="../assets/logo.png" alt>
                </div>
            </el-col>
            <el-col :span="18">
                <div class="grid-content bg-purple-light">电商后台管理系统</div>
            </el-col>
            <el-col :span="2">
                <div class="grid-content bg-purple">
                <el-button  @click="logout" type="primary">退出登录</el-button>
                </div>
            </el-col>
            </el-row>
    </el-header>
  <el-container>
    <el-aside width="200px">
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router>
            <el-submenu v-for="(item, index) in menuList" :key="item.id" :index="item.order+''">
            <template slot="title">
            <i class="el-icon-menu"></i>
            <span>{{item.authName}}</span>
            </template>
            <el-menu-item v-for="(it, i) in item.children" :key="it.id" :index="'/'+it.path">
                <i class="el-icon-location"></i>
                {{it.authName}}
                </el-menu-item>
            </el-submenu>
        </el-submenu>
        </el-menu>
    </el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>

  </div>
</template>

<script>
export default {
  name: "app",
  data() {
      return {
          menuList:[]
      }
  },
  beforeCreate() {
    let token = window.sessionStorage.getItem("token");
    if (token) {
    } else {
      this.$router.push("login");
    }
  },
  methods: {
    logout() {
      this.$confirm("正在退出登录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "退出成功!"
          });
          window.sessionStorage.removeItem("token");
          this.$router.push("login");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出"
          });
        });
    }
  },
  created() {
      this.$axios.get('menus',{
          headers:{
              Authorization: window.sessionStorage.getItem("token")
          }
      }).then(res=>{
          this.menuList = res.data.data
      })
  },
};
</script>

<style lang="scss">
.main-container {
  height: 100%;
  .el-container {
    height: 100%;
  }

  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
}
</style>
