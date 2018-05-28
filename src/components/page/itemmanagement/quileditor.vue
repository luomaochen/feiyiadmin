<template>
<div style="width: 100%">
    <section class="each-itemhead">
        <div class="each-itemtag">
            <el-tag >{{tag}}</el-tag>
        </div>
        <el-button size="mini" type="success" icon="el-icon-plus" circle @click="plus"></el-button>
        <el-button size="mini" type="danger" icon="el-icon-minus" circle @click="minus"></el-button>
        <el-switch
            style="margin-left: 20px"
            v-model="radio"
            active-text="锁定"
            inactive-text="不锁定">
        </el-switch>
    </section>
    <div :class="active ? 'active' : 'hidden' ">
        <div class="set" style="width: 100%">
            <div :id="myid" type="text/plain" style="width: 100%;height: 250px" @click="contentChange"></div>
            <div class="itemupload-wrap" style="width: 20%">
                <div class="itemupload-box">
                    <img :src="cropImg" class="itemupload-img">
                    <el-button  type="primary" @click="upload">上传图片</el-button>
                </div>
            </div>
        </div>
    </div>


</div>


</template>

<script>
    import '../../../../static/utf8-jsp/ueditor.config.js';
    import '../../../../static/utf8-jsp/ueditor.all.js';
    import '../../../../static/utf8-jsp/lang/zh-cn/zh-cn.js';
    import VueCropper  from 'vue-cropperjs';
    import {mapGetters} from 'vuex'


    export default {

        data: function () {
            return {
                ue:'',
                active:true,
                radio:false,
                content:'',
                defaultSrc: '../../../../static/img/img.jpg',
                fileList: [],
                imgSrc: '',
                cropImg: '',
                dialogVisible: false,
            }
        },
        props: ['myid','tag','lmcsubmit'],
        mounted () {
            console.log(this.myid);
            this.ue = UE.getEditor(this.myid,{
                BaseUrl: '',
                enableAutoSave: false, //禁止自动保存
                UEDITOR_HOME_URL: 'static/utf8-jsp/',
                toolbars: [
                    [ 'undo', 'redo','bold', 'italic','link', 'superscript', 'subscript', '|','inserttable', 'insertorderedlist', 'insertunorderedlist','insertcode', 'cleardoc']
                ]
            });


        },
        components: {
            VueCropper,
        },
        computed:{


        },


        created() {
            this.cropImg = this.defaultSrc;

            this.$nextTick(() => {
                this.ue.addListener('contentChange', function(){
                   
                    console.log(new Date());
                });
            });
        },
        methods: {
            change() {
               this.radio=!this.radio;
                if (this.radio===true){
                    this.ue.setDisabled();
                }
                if(this.radio===false){
                    this.ue.setEnabled();
                }
            },

            contentChange() {
                this.ue.addListener('contentChange', () => {
                    console.log('改变了')
                });
            },





            plus() {
                this.active = true;
            },
            minus() {
                this.active = false;
            },

            upload() {
                var html = this.ue.getContent();
                console.log(html);
            },


            setImage(e){
                const file = e.target.files[0];
                if (!file.type.includes('image/')) {
                    return;
                }
                const reader = new FileReader();
                reader.onload = (event) => {
                    this.dialogVisible = true;
                    this.imgSrc = event.target.result;
                    this.$refs.cropper && this.$refs.cropper.replace(event.target.result);
                };
                reader.readAsDataURL(file);
            },
            cropImage () {
                this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
            },
            cancelCrop(){
                this.dialogVisible = false;
                this.cropImg = this.defaultSrc;
            },
            imageuploaded(res) {
                console.log(res)
            },
            handleError(){
                this.$notify.error({
                    title: '上传失败',
                    message: '图片上传接口上传失败，可更改为自己的服务器接口'
                });
            }
        },

        watch: {
            radio: function (val, oldVal) {
                if (val===true){
                    this.ue.setDisabled();
                }
                if(val===false){
                    this.ue.setEnabled();
                }
            },
            lmcsubmit:function (val, oldVal) {
                if (val===true){
                    console.log(this.ue.getContentTxt());
                }
                if(val===false){
                    this.ue.setEnabled();
                }
            }
        }

    }
</script>
<style scoped>
    .active {
        display: flex;
        margin-top: 30px;
        height: 250px;
    }

    .hidden {
        display: none;
    }


    .set {
        display: flex;
    }

    .each-itemhead {
        margin: 60px 10px 0 0;
        display: flex;
        height: 40px;
        align-items: center;
    }

    .each-itemtag {
        margin-right: 30px;
        width: 60px;
    }
    .itemupload-wrap {
        width: 20%;
        height: 100%;
    }

    .itemupload-box {
        width: 90%;
        height: 260px;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content:space-between;
        align-items: center;
    }

    .itemupload-img {
        display: block;
        width: 200px;
        height: 200px;
        background: #f8f8f8;
        border: 1px solid #eee;
        border-radius: 5px;
        margin:auto;
    }

</style>
