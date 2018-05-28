<template>

    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-tickets"></i> 项目情况</el-breadcrumb-item>
        </el-breadcrumb>
        <section class="ranking-wrap" style="display: flex">
            <el-table
                :data="videoData"
                style="width: 40%"
            >
                <el-table-column
                    prop="title"
                    label="被浏览最多的视频"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="times"
                    label="浏览次数"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="belong"
                    label="所属项目"
                    width="180">
                </el-table-column>
            </el-table>

            <el-table
                :data="photoData"
                style="width: 40%"
                :default-sort="{prop: 'date', order: 'descending'}"
            >
                <el-table-column
                    prop="title"
                    label="被浏览最多的图片"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="times"
                    label="浏览次数"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="belong"
                    label="所属项目"
                    width="180">
                </el-table-column>
            </el-table>

        </section>
        <section class="ranking-more"><span>展示更多>></span></section>
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
                id: '',
                videoData: [
                    {
                    title: '视频标题1XXXX',
                    times: '155',
                    belong: '项目名称2XXXXXX',
                }, {
                    title: '视频标题1XXXX',
                    times: '155',
                    belong: '项目名称2XXXXXX',
                }, {
                    title: '视频标题1XXXX',
                    times: '155',
                    belong: '项目名称2XXXXXX',
                }, {
                    title: '视频标题1XXXX',
                    times: '155',
                    belong: '项目名称2XXXXXX',
                }, {
                    title: '视频标题1XXXX',
                    times: '155',
                    belong: '项目名称2XXXXXX',
                }, {
                    title: '视频标题1XXXX',
                    times: '155',
                    belong: '项目名称2XXXXXX',
                }, {
                    title: '视频标题1XXXX',
                    times: '155',
                    belong: '项目名称2XXXXXX',
                }, {
                    title: '视频标题1XXXX',
                    times: '155',
                    belong: '项目名称2XXXXXX',
                }, {
                    title: '视频标题1XXXX',
                    times: '155',
                    belong: '项目名称2XXXXXX',
                }],
                photoData: [
                    {
                    title: '图片标题1XXXX',
                    times: '155',
                    belong: '项目名称2XXXXXX',
                }, {
                    title: '图片标题1XXXX',
                    times: '155',
                    belong: '项目名称2XXXXXX',
                }, {
                    title: '图片标题1XXXX',
                    times: '155',
                    belong: '项目名称2XXXXXX',
                }, {
                    title: '图片标题1XXXX',
                    times: '155',
                    belong: '项目名称2XXXXXX',
                }, {
                    title: '图片标题1XXXX',
                    times: '155',
                    belong: '项目名称2XXXXXX',
                }, {
                    title: '图片标题1XXXX',
                    times: '155',
                    belong: '项目名称2XXXXXX',
                }, {
                    title: '图片标题1XXXX',
                    times: '155',
                    belong: '项目名称2XXXXXX',
                }, {
                    title: '图片标题1XXXX',
                    times: '155',
                    belong: '项目名称2XXXXXX',
                }, {
                    title: '图片标题1XXXX',
                    times: '155',
                    belong: '项目名称2XXXXXX',
                }]
            }
        },
        methods: {
            formatter(row, column) {
                return row.address;
            }
        },
        created() {

        },
        components: {}

    }
</script>

<style>
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
        width: 100%;

    }

    .ranking-more > span {
        float: right;
        color: #3a8ee6;
        cursor: pointer;
    }

    .ranking-more ~ hr {
        clear: both;
        margin-top: 150px;
        width: 100%;
    }


</style>
