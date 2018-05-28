<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: 'dashboard',
                        title: '系统首页'
                    },
                    {
                        icon: 'el-icon-date',
                        index: '5',
                        title: '全局设置',
                        subs: [
                            {
                                index: 'roundplay',
                                title: '轮播图设置'
                            },
                            {
                                index: 'listset',
                                title: '列表设置'
                            },
                            {
                                index: 'projectset',
                                title: '项目设置'
                            },
                            {
                                index: 'blogroll',
                                title: '友情链接'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '6',
                        title: '用户管理',
                        subs: [
                            {
                                index: 'userlist',
                                title: '用户列表'
                            },
                            {
                                index: 'adduser',
                                title: '添加用户'
                            },
                            {
                                index: 'manageuser',
                                title: '管理用户组'
                            },
                            {
                                index: 'givepermissions',
                                title: '分配权限'
                            }
                        ]
                    },

                    {
                        icon: 'el-icon-date',
                        index: '8',
                        title: '项目管理',
                        subs: [
                            {
                                index: 'itemdetail',
                                title: '项目详情'
                            },
                            {
                                index: 'itemvideo',
                                title: '项目视频管理'
                            },
                            {
                                index: 'itemimage',
                                title: '项目图片管理'
                            },
                            {
                                index: 'itemdynamic',
                                title: '动态管理'
                            }
                        ]
                    },


                    {
                        icon: 'el-icon-date',
                        index: '4',
                        title: '信息动态',
                        subs: [
                            {
                                index: 'information',
                                title: '信息动态'
                            },
                            {
                                index: 'academic',
                                title: '学术研究'
                            }
                        ]
                    },

                    {
                        icon: 'el-icon-date',
                        index: '7',
                        title: '站内统计',
                        subs: [
                            {
                                index: 'statistics',
                                title: '统计'
                            },
                            {
                                index: 'ranking',
                                title: '项目排行'
                            },
                            {
                                index: 'otherstatistics',
                                title: '其他统计'
                            }
                        ]
                    },

                    {
                        icon: 'el-icon-tickets',
                        index: 'table',
                        title: '基础表格'
                    },
                    {
                        icon: 'el-icon-message',
                        index: 'tabs',
                        title: 'tab选项卡'
                    },
                    {
                        icon: 'el-icon-date',
                        index: '3',
                        title: '表单相关',
                        subs: [
                            {
                                index: 'form',
                                title: '基本表单'
                            },
                            {
                                index: 'editor',
                                title: '富文本编辑器'
                            },
                            {
                                index: 'markdown',
                                title: 'markdown编辑器'
                            },
                            {
                                index: 'upload',
                                title: '文件上传'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-star-on',
                        index: 'charts',
                        title: 'schart图表'
                    },
                    {
                        icon: 'el-icon-rank',
                        index: 'drag',
                        title: '拖拽列表'
                    },


                    {
                        icon: 'el-icon-warning',
                        index: 'permission',
                        title: '权限测试'
                    },
                    {
                        icon: 'el-icon-error',
                        index: '404',
                        title: '404页面'
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
