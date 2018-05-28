import Vue from 'vue'
import Vuex from  'vuex'

Vue.use(Vuex);

export const store =new Vuex.Store({
    state:{
        allueditor:[{
            ueditor:"ueditor1",
            tag:"概述"
        },{
            ueditor:"ueditor2",
            tag:"历史沿革"
        },{
            ueditor:"ueditor3",
            tag:"设备器材"
        },{
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
        }]
    }
});
