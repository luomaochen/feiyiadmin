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

        <section class="map-container">
            <div class="address-input">
                <el-input style="width: 250px" v-model="address" placeholder="请输入地址"></el-input>
                <el-button style="margin-left: 20px" size="mini" type="success" icon="el-icon-plus" circle ></el-button>
                <el-switch
                    style="margin-left: 40px"
                    v-model="radio"
                    active-text="锁定"
                    inactive-text="不锁定">
                </el-switch>
            </div>
            <div class="map-container">
               <mymap></mymap>
            </div>

        </section>


        <el-button style="margin-top: 60px" type="primary" @click="submit">提交</el-button>
    </div>


</template>

<script>
    import VueCropper  from 'vue-cropperjs';

    import Ueditor from './quileditor.vue'
    import Mymap from './map.vue'
    export default {
        data: function () {
            return {
                points: [],
                options: [{
                    value: '选项1',
                    lng:[117.062428,92.189283,114.108656,107.422244,97.782061,121.036244],
                    lat:[43.591892,39.773329,22.479338,33.708425,34.762749,30.991434],
                    label: '武术类'
                }, {
                    value: '选项2',
                    lng:[117.062428,92.189283,114.108656,107.422244,112.83105],
                    lat:[43.591892,39.773329,22.479338,33.708425,30.816924],
                    label: '球类'
                }, {
                    value: '选项3',
                    lng:[117.062428,92.189283,114.108656,107.422244],
                    lat:[43.591892,39.773329,22.479338,33.708425],
                    label: '摔跤类'
                }],
                value: '',
                sizes:{
                    width: 20,
                    height: 10
                },
                lmcsubmit: true,
                address:'',
                radio:true,
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
                allueditor: [
                    {
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
            Ueditor,
            Mymap
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
.item-messagebox {
    margin-bottom: -50px;
}

.map-container {
    width: 80%;
    height: 500px;
    background-color: yellow;
    margin-top: 50px;
}

.address-input {
    width: 100%;
    height: 40px;
    background-color: red;
    display: flex;
    align-items: center;
}


</style>
