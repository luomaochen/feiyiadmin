<template>
    <div>
        <section class="item-messagebox">
            <el-form :inline="true" :model="project" class="demo-form-inline">
                <el-form-item label="项目名称：">
                    <el-input v-model="project.title"></el-input>
                </el-form-item>
                <el-form-item label="项目编号：">
                    <el-input v-model="project.number"></el-input>
                </el-form-item>
                <el-form-item label="项目地区：">
                    <el-select v-model="project.select" placeholder="请选择地区">
                        <el-option label="地区一" value="area1"></el-option>
                        <el-option label="地区二" value="area2"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </section>

        <section v-for="item in allueditor">
            <ueditor :myid="item.ueditor"  :tag="item.tag"  :lmcsubmit="lmcsubmit" style="width: 100%"></ueditor>
        </section>

        <el-button  style="margin-top: 200px" type="primary" @click="submit" >提交</el-button>
    </div>


</template>

<script>
    import VueCropper  from 'vue-cropperjs';

    import Ueditor from './quileditor.vue'
    export default {
        data: function () {
            return {
                lmcsubmit:true,
                allueditor:[{
                    ueditor:"ueditor1",
                    tag:"概述"
                },{
                    ueditor:"ueditor2",
                    tag:"历史沿革"
                },{
                    ueditor:"ueditor3",
                    tag:"设备器材"
                }
                ,{
                    ueditor:"ueditor4",
                    tag:"表演形式"
                },{
                    ueditor:"ueditor5",
                    tag:"传承与发展"
                },{
                    ueditor:"ueditor6",
                    tag:"传承人"
                },{
                    ueditor:"ueditor7",
                    tag:"文化产品"
                },{
                    ueditor:"ueditor8",
                    tag:"其他"
                }],
                project: {
                    title: '',
                    number: '',
                    select: '',
//                    value1: true,
//                    value2: true,
//                    content1: '',
//                    content2: '',
//                    image: './static/img/img.jpg',
//                    description: '描述1XXXXXX',
//                    author: '姓名1',
//                    time: '120`30"',
//                    shot_date: '2018-01-01 18:12',
//                    create_date: '2018-02-01 12:30',
//                    watch_times: '20'
                },

            }
        },
        components: {
            VueCropper,
            Ueditor
        },
        created() {

        },
        methods: {
            submit(){
                this.lmcsubmit=!this.lmcsubmit;
            }

        }
    }
</script>
<style>


</style>
