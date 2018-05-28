<template>
<div>
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-tickets"></i> 列表设置</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div>审核项目</div>
    <div class="radio-box">
        <span> 创建或编辑过的项目经过审核后才能在前台显示 </span>
        <el-radio v-model="radio" label="1">是</el-radio>
        <el-radio v-model="radio" label="2">否</el-radio>
    </div>
</div>

</template>

<script type="text/ecmascript-6">

    export default{
        data() {
            return {
                datas: [],
                id: '',
                radio:"1"
            }
        },
        methods: {},
        created() {

        },
        components: {}

    }
</script>

<style >


</style>
