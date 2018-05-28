<template>

<div>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-tickets"></i> 项目情况</el-breadcrumb-item>
    </el-breadcrumb>
    <section class="ranking-wrap">
        <article class="ranking-box1">
            <p>被浏览最多的项目</p>
            <div v-for="n in 10" class="ranking-item">
                <span>项目名称1XXXX</span>
                <span>(155)</span>
            </div>

        </article>
        <article class="ranking-box2">
            <p>被编辑最多的项目</p>
            <div v-for="n in 10"  class="ranking-item">
                <span>项目名称1XXXX</span>
                <span>(155)</span>
            </div>

        </article>

    </section>
    <section class="ranking-more" ><span>展示更多>></span></section>
    <hr>
    <p style="margin-top: 15px">
        统计数据上次于2018-2-1 17:39 被更新,下次将于2018-2-1 20:39进行更新
    </p>
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
.ranking-wrap {
    display: flex;
}


.ranking-box1 {
    margin-top: 50px;
    margin-left: 20px;
}

.ranking-box2 {
    margin-top: 50px;
    margin-left: 100px;
}


.ranking-item {
    margin-top: 15px;
    color: #3a8ee6;
    cursor: pointer;
}

.ranking-more {
    margin-top: 100px;
    width: 50%;

}

.ranking-more>span {
    float: right;
    color: #3a8ee6;
    cursor: pointer;
}

.ranking-more~hr {
    clear:both;
    margin-top: 150px;
    width: 50%;
}


</style>
