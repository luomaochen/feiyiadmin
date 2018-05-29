import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/dashboard',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/table',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve),
                    meta: { title: '基础表格' }
                },
                {
                    path: '/tabs',
                    component: resolve => require(['../components/page/Tabs.vue'], resolve),
                    meta: { title: 'tab选项卡' }
                },
                {
                    path: '/form',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve),
                    meta: { title: '基本表单' }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve),
                    meta: { title: '富文本编辑器' }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve),
                    meta: { title: 'markdown编辑器' }
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve),
                    meta: { title: '文件上传' }
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve),
                    meta: { title: 'schart图表' }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve),
                    meta: { title: '拖拽列表' }
                },

                {
                    //信息动态
                    path: '/information',
                    component: resolve => require(['../components/page/Information/Information.vue'], resolve),
                    meta: { title: '信息动态'}
                },
                {
                    //学术研究
                    path: '/academic',
                    component: resolve => require(['../components/page/Information/Academic.vue'], resolve),
                    meta: { title: '学术研究'}
                },

                {
                    //轮播图设置
                    path: '/roundplay',
                    component: resolve => require(['../components/page/overall/Roundplay.vue'], resolve),
                    meta: { title: '轮播图设置'}
                },
                {
                    //列表设置
                    path: '/listset',
                    component: resolve => require(['../components/page/overall/Listset.vue'], resolve),
                    meta: { title: '列表设置'}
                },
                {
                    //项目设置
                    path: '/projectset',
                    component: resolve => require(['../components/page/overall/Projectset.vue'], resolve),
                    meta: { title: '项目设置'}
                },
                {
                    //友情链接
                    path: '/blogroll',
                    component: resolve => require(['../components/page/overall/Blogroll.vue'], resolve),
                    meta: { title: '友情链接'}
                },



                {
                    //用户列表
                    path: '/userlist',
                    component: resolve => require(['../components/page/usermanagement/userlist.vue'], resolve),
                    meta: { title: '用户列表'}
                },
                {
                    //添加用户
                    path: '/adduser',
                    component: resolve => require(['../components/page/usermanagement/adduser.vue'], resolve),
                    meta: { title: '添加用户'}
                },
                {
                    //管理用户组
                    path: '/manageuser',
                    component: resolve => require(['../components/page/usermanagement/manageuser.vue'], resolve),
                    meta: { title: '管理用户组'}
                },
                {
                    //分配权限
                    path: '/givepermissions',
                    component: resolve => require(['../components/page/usermanagement/givepermissions.vue'], resolve),
                    meta: { title: '分配权限'}
                },



                {
                    //分类管理
                    path: '/classification',
                    component: resolve => require(['../components/page/Contentmanagement/classification.vue'], resolve),
                    meta: { title: '分类管理'}
                },
                {
                    //地区管理
                    path: '/region',
                    component: resolve => require(['../components/page/Contentmanagement/region.vue'], resolve),
                    meta: { title: '地区管理'}
                },
                {
                    //项目库管理
                    path: '/projectlibrary',
                    component: resolve => require(['../components/page/Contentmanagement/projectlibrary.vue'], resolve),
                    meta: { title: '项目库管理'}
                },







                {
                    //项目详情
                    path: '/itemdetail',
                    component: resolve => require(['../components/page/itemmanagement/itemdetail.vue'], resolve),
                    meta: { title: '项目详情'}
                },
                {
                    //项目视频管理
                    path: '/itemvideo',
                    component: resolve => require(['../components/page/itemmanagement/itemvideo.vue'], resolve),
                    meta: { title: '项目视频管理'}
                },
                {
                    //项目图片管理
                    path: '/itemimage',
                    component: resolve => require(['../components/page/itemmanagement/itemimage.vue'], resolve),
                    meta: { title: '项目图片管理'}
                },
                {
                    //动态管理
                    path: '/itemdynamic',
                    component: resolve => require(['../components/page/itemmanagement/itemdynamic.vue'], resolve),
                    meta: { title: '动态管理'}
                },



                {
                    //统计
                    path: '/statistics',
                    component: resolve => require(['../components/page/Statistics/Statistics.vue'], resolve),
                    meta: { title: '统计'}
                },
                {
                    // 项目排行
                    path: '/ranking',
                    component: resolve => require(['../components/page/Statistics/Ranking.vue'], resolve),
                    meta: { title: '项目排行'}
                },
                {
                    //其他统计
                    path: '/otherstatistics',
                    component: resolve => require(['../components/page/Statistics/Otherstatistics.vue'], resolve),
                    meta: { title: '其他统计'}
                },



                {
                    // 权限页面
                    path: '/permission',
                    component: resolve => require(['../components/page/Permission.vue'], resolve),
                    meta: { title: '权限测试', permission: true }
                }

            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '/404',
            component: resolve => require(['../components/page/404.vue'], resolve)
        },
        {
            path: '/403',
            component: resolve => require(['../components/page/403.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
