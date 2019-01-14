<template>
    <el-breadcrumb class="my-el-breadcrumb" separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>{{title2}}</el-breadcrumb-item>
    <el-breadcrumb-item>{{title3}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    props:['title2','title3']
}
</script>
<style>
    .my-el-breadcrumb {
        height: 45px;
        line-height: 45px;
        padding-left: 10px;
    }
</style>

