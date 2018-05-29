<template>
    <div style="width: 100%">
        <section class="each-itemhead">
            <div class="each-itemtag">
                <el-tag>{{tag}}</el-tag>
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
                <div :id="randomId"  type="text/plain" style="width: 100%;height: 250px"></div>
                <div class="itemupload-wrap" style="width: 20%">
                    <div class="itemupload-box">
                        <img :src="cropImg" class="itemupload-img">
                        <el-button type="primary" @click="upload">上传图片</el-button>
                    </div>
                </div>
            </div>
        </div>


    </div>


</template>

<script>
    import '../../../static/utf8-jsp/ueditor.config.js';
    import '../../../static/utf8-jsp/ueditor.all.js';
    import '../../../static/utf8-jsp/lang/zh-cn/zh-cn.js';
    import VueCropper  from 'vue-cropperjs';
    import {mapGetters} from 'vuex'


    export default {

        data: function () {
            return {
                ue: '',
                active: true,
                radio: false,
                content: '',
                defaultSrc: '../../../../static/img/img.jpg',
                fileList: [],
                imgSrc: '',
                cropImg: '',
                dialogVisible: false,

                // 为了避免麻烦，每个编辑器实例都用不同的 id
                randomId: 'editor_' + (Math.random() * 100000000000000000),
                instance: null,
                // scriptTagStatus -> 0:代码未加载，1:两个代码依赖加载了一个，2:两个代码依赖都已经加载完成
                scriptTagStatus: 0
            }
        },
        props: ['myid', 'tag', 'lmcsubmit'],
//        mounted () {
//
//            this.ue = UE.getEditor(this.myid, {
//                BaseUrl: '',
//                enableAutoSave: false, //禁止自动保存
//                UEDITOR_HOME_URL: 'static/utf8-jsp/',
//                toolbars: [
//                    ['undo', 'redo', 'bold', 'italic', 'link', 'superscript', 'subscript', '|', 'inserttable', 'insertorderedlist', 'insertunorderedlist', 'insertcode', 'cleardoc']
//                ]
//            });
//
//
//        },
        components: {
            VueCropper,
        },
        computed: {},


        created() {
            this.cropImg = this.defaultSrc;
            this.initEditor();
        },
        beforeDestroy () {
            // 组件销毁的时候，要销毁 UEditor 实例
            if (this.instance !== null && this.instance.destroy) {
                this.instance.destroy();
            }
        },
        methods: {
            initEditor () {
                    // Vue 异步执行 DOM 更新，这样一来代码执行到这里的时候可能 template 里面的 script 标签还没真正创建
                    // 所以，我们只能在 nextTick 里面初始化 UEditor
                    this.$nextTick(() => {
                        this.instance = window.UE.getEditor(this.randomId, {
                            BaseUrl: '',
                            enableAutoSave: false, //禁止自动保存
                            UEDITOR_HOME_URL: 'static/utf8-jsp/',
                            toolbars: [
                                ['undo', 'redo', 'bold', 'italic', 'link', 'superscript', 'subscript', '|', 'inserttable', 'insertorderedlist', 'insertunorderedlist', 'insertcode', 'cleardoc']
                            ]
                        });
                        // 绑定事件，当 UEditor 初始化完成后，将编辑器实例通过自定义的 ready 事件交出去
                        this.instance.addListener('ready', () => {
                            this.$emit('ready', this.instance);
                        });
                    });

            },



            change() {
                this.radio = !this.radio;
                if (this.radio === true) {
                    this.instance.setDisabled();
                }
                if (this.radio === false) {
                    this.instance.setEnabled();
                }
            },


            plus() {
                this.active = true;
            },
            minus() {
                this.active = false;
            },

            upload() {
                var html = this.instance.getContent();
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
                if (val === true) {
                    this.instance.setDisabled();
                }
                if (val === false) {
                    this.instance.setEnabled();
                }
            },
            lmcsubmit: function (val, oldVal) {
                if (val === true) {
                    console.log(this.instance.getContentTxt());
                }
                if (val === false) {
                    this.instance.setEnabled();
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
        justify-content: space-between;
        align-items: center;
    }

    .itemupload-img {
        display: block;
        width: 200px;
        height: 200px;
        background: #f8f8f8;
        border: 1px solid #eee;
        border-radius: 5px;
        margin: auto;
    }

</style>
