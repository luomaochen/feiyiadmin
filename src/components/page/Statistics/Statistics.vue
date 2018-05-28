<template>
<div>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-tickets"></i> 基本情况</el-breadcrumb-item>
    </el-breadcrumb>
    <section class="statistics-wrap">
        <el-tag>用户统计</el-tag>
        <div class="statistics-box">用户数量：5</div>
        <div class="statistics-box">项目管理员数：5</div>
    </section>
    <section class="statistics-wrap">
        <el-tag>项目统计</el-tag>
        <div class="statistics-box">分类数：9</div>
        <div class="statistics-box">项目总数：5</div>
        <div class="statistics-box">项目版本总数：1200</div>
    </section>
    <section style="margin-top: 100px"><p>统计数据上次于2018-2-1 17:39 被更新,下次将于2018-2-1 20:39进行更新</p></section>

</div>

</template>

<script type="text/ecmascript-6">

    export default{
        data() {
            return {
                datas: [],
                id: ''
            }
        },
        methods: {},
        created() {

        },
        components: {}

    }
</script>

<style >
.statistics-wrap {
    margin-top: 30px;
}

.statistics-box {
    margin-top: 20px;
    font-size: 20px;
}

</style>
