<template>
    <div id="app">
        vue_ueditor
        <div>
            <Ueditor @ready="editorReady" style="width: 500px;height: 440px;"></Ueditor>
        </div>

    </div>
</template>

<script>
//    import '../../../static/utf8-jsp/ueditor.config.js';
//    import '../../../static/utf8-jsp/ueditor.all.js';
//    import '../../../static/utf8-jsp/lang/zh-cn/zh-cn.js';
    import Ueditor from './test'

    export default {
        data: function () {
            return {
                ue:'',
                content:''
            }
        },
        components: {
            Ueditor
        },
        methods: {
            editorReady (instance) {
                instance.setContent('');

                instance.addListener('contentChange', () => {
                    this.content = instance.getContent();
                    console.log(this.content);
                });
            },
        },

    }
</script>
<style scoped>



</style>
