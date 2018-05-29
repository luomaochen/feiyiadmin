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

        <section v-for="(item, index) in allueditor">
            <ueditor @ready="editorReady($event,index)" :tag="item.tag" style="width: 100%"></ueditor>
        </section>


        <el-button style="margin-top: 200px" type="primary" @click="submit">提交</el-button>
    </div>


</template>

<script>
    import VueCropper  from 'vue-cropperjs';

    import Ueditor from './test.vue'
    export default {
        data: function () {
            return {
                lmcsubmit: true,
                ue1:'',
                ue2:'',
                ue3:'',
                ue4:'',
                ue5:'',
                ue6:'',
                ue7:'',
                ue8:'',
                content1:'',
                content2:'',
                content3:'',
                content4:'',
                content5:'',
                content6:'',
                content7:'',
                content8:'',
                allueditor: [{
                    ueditor: "ueditor1",
                    tag: "概述"
                }, {
                    ueditor: "ueditor2",
                    tag: "历史沿革"
                }, {
                    ueditor: "ueditor3",
                    tag: "设备器材"
                }, {
                    ueditor: "ueditor4",
                    tag: "表演形式"
                }, {
                    ueditor: "ueditor5",
                    tag: "传承与发展"
                }, {
                    ueditor: "ueditor6",
                    tag: "传承人"
                }, {
                    ueditor: "ueditor7",
                    tag: "文化产品"
                }, {
                    ueditor: "ueditor8",
                    tag: "其他"
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
                this.content1=this.ue1.getContent();
                console.log('我是内容1'+this.content1);
                this.content2=this.ue2.getContent();
                console.log('我是内容2'+this.content2);
            },

            editorReady (instance, index) {
                switch(index)
                {
                    case 0:
                        this.ue1=instance;
                        instance.setContent('1');
                        break;
                    case 1:
                        this.ue2=instance;
                        instance.setContent('2');
                        break;
                    case 2:
                        this.ue3=instance;
                        instance.setContent('3');
                        break;
                    case 3:
                        this.ue4=instance;
                        instance.setContent('4');
                        break;
                    case 4:
                        this.ue5=instance;
                        instance.setContent('5');
                        break;
                    case 5:
                        this.ue6=instance;
                        instance.setContent('6');
                        break;
                    case 6:
                        this.ue7=instance;
                        instance.setContent('7');
                        break;
                    case 7:
                        this.ue8=instance;
                        instance.setContent('8');
                        break;
                    default:
                        instance.setContent('aaa');
                }

            },

        }
    }
</script>
<style>


</style>
