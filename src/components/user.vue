<template>
    <div class="user-container">
        <el-row>
            <el-col :span="24">
                <myBreadcrumb class="grid-content bg-purple-dark" title2="二级列表" title3="三级列表"></myBreadcrumb>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <el-input placeholder="请输入内容" v-model="pageData.query">
                        <template slot="append"><i class="el-icon-search"></i></template>
                    </el-input>
                </div>
            </el-col>
            <el-col :span="16">
                <el-button  type="success" plain>添加用户</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-table
                    :data="userList"
                    border
                    style="width: 100%">
                    <el-table-column
                    label="#"
                    type="index"
                    width="30">
                    </el-table-column>
                    <el-table-column
                    prop="username"
                    label="姓名"
                    width="200">
                    </el-table-column>
                    <el-table-column
                    prop="email"
                    label="邮箱"
                    width="300">
                    </el-table-column>
                    <el-table-column
                    prop="mobile"
                    label="电话"
                    width="200">
                    </el-table-column>
                    <el-table-column
                    prop="mg_state"
                    label="用户状态"
                    width="100">
                    <template slot-scope="scope">
                        <el-switch
                        v-model="scope.row.mg_state"
                        active-color="#13ce66"
                        inactive-color="#ff4949"
                        ></el-switch>
                    </template>
                            </el-table-column>
                    <el-table-column
                    label="操作">
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
       
    </div>
    
</template>
<script>
export default {
  data() {
    return {
      pageData: {
        query: "",
        pagenum: 1,
        pagesize: 10
      },
      userList: [],
      total: 0
    };
  },
  created() {
    this.$axios.get("users", { params: this.pageData }).then(res => {
      this.userList = res.data.data.users;
      this.total = res.data.data.total;
    });
  }
};
</script>

<style lang="scss" scoped>
</style>


