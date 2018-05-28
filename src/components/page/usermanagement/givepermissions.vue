<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-tickets"></i>管理权限</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <section style="width:100%;height:750px;background-color: white; display: flex">
            <div class="tree1" style="width: 17%">
                <el-tree
                    :data="data1"
                    show-checkbox
                    node-key="id"
                    :default-expanded-keys="[3,4,5,6]"
                    :props="defaultProps">
                </el-tree>
            </div>
            <div class="tree2" style="width: 17%">
                <el-tree
                    :data="data2"
                    show-checkbox
                    node-key="id"
                    :default-expanded-keys="[3]"
                    :props="defaultProps">
                </el-tree>
            </div>
            <div class="tree3" style="width: 17%">
                <el-tree
                    :data="data3"
                    show-checkbox
                    node-key="id"
                    :default-expanded-keys="[2,3,14,15]"
                    :props="defaultProps">
                </el-tree>
            </div>
            <div class="tree4" style="width: 17%">
                <el-tree
                    :data="data4"
                    show-checkbox
                    node-key="id"
                    :default-expanded-keys="[2,3,4,5]"
                    :props="defaultProps">
                </el-tree>
            </div>
            <div class="tree5" style="width: 17%">
                <el-tree
                    :data="data5"
                    show-checkbox
                    node-key="id"
                    :default-expanded-keys="[2,3]"
                    :props="defaultProps">
                </el-tree>
            </div>
            <div class="tree6" style="width: 17%">
                <el-tree
                    :data="data6"
                    show-checkbox
                    node-key="id"
                    :default-expanded-keys="[1]"
                    :props="defaultProps">
                </el-tree>
            </div>


        </section>

    </div>

</template>

<script type="text/ecmascript-6">

    export default{
        data() {
            return {
                datas: [],
                id: '',
                data1: [{
                    id: 1,
                    label: '全局',
                    children: [{
                        id: 2,
                        label: '内容设置',
                        children: [{
                            id: 4,
                            label: '轮播图设置',
                            children: [{
                                id: 7,
                                label: '编辑'
                            }, {
                                id: 8,
                                label: '发布'
                            }, {
                                id: 9,
                                label: '取消发布'
                            }]
                        }, {
                            id: 5,
                            label: '列表设置',
                            children: [{
                                id: 10,
                                label: '编辑(热门项目)'
                            }, {
                                id: 11,
                                label: '发布(热门项目)'
                            }, {
                                id: 12,
                                label: '取消发布(热门项目)'
                            }, {
                                id: 13,
                                label: '编辑(最新项目)'
                            }, {
                                id: 14,
                                label: '发布(最新项目)'
                            }, {
                                id: 15,
                                label: '取消发布(最新项目)'
                            }, {
                                id: 16,
                                label: '编辑(项目图片)'
                            }, {
                                id: 17,
                                label: '发布(项目图片)'
                            }, {
                                id: 18,
                                label: '取消发布(项目图片)'
                            }, {
                                id: 19,
                                label: '编辑(项目视频)'
                            }, {
                                id: 20,
                                label: '发布(项目视频)'
                            }, {
                                id: 21,
                                label: '取消发布(项目视频)'
                            }]
                        }, {
                            id: 6,
                            label: '项目设置'
                        }]
                    }, {
                        id: 3,
                        label: '友情链接',
                        children: [{
                            id: 22,
                            label: '新增'
                        }, {
                            id: 23,
                            label: '删除'
                        }, {
                            id: 24,
                            label: '编辑'
                        }]
                    }],
                }],
                data2: [{
                    id: 1,
                    label: '用户管理',
                    children: [{
                        id: 2,
                        label: '管理用户'
                    }, {
                        id: 3,
                        label: '管理用户组',
                        children: [{
                            id: 4,
                            label: '编辑'
                        }, {
                            id: 5,
                            label: '分配人员'
                        }, {
                            id: 6,
                            label: '设置权限'
                        },  {
                            id: 7,
                            label: '删除'
                        }]
                    }],
                }],
                data3: [{
                    id: 1,
                    label: '内容管理',
                    children: [{
                        id: 2,
                        label: '分类管理',
                        children: [{
                            id: 5,
                            label: '编辑'
                        }, {
                            id: 6,
                            label: '添加子分类'
                        }, {
                            id: 7,
                            label: '合并子分类'
                        }, {
                            id: 8,
                            label: '新增'
                        }, {
                            id: 9,
                            label: '删除'
                        }, {
                            id: 10,
                            label: '排序'
                        }]
                    }, {
                        id: 3,
                        label: '地区管理',
                        children: [{
                            id: 11,
                            label: '新增'
                        }, {
                            id: 12,
                            label: '删除'
                        }, {
                            id: 13,
                            label: '编辑'
                        }]
                    }, {
                        id: 4,
                        label: '项目库管理',
                        children: [{
                            id: 14,
                            label: '中国',
                            children: [{
                                id: 16,
                                label: '新增'
                            }, {
                                id: 17,
                                label: '编辑'
                            }, {
                                id: 18,
                                label: '审核'
                            }, {
                                id: 19,
                                label: '锁定'
                            }, {
                                id: 20,
                                label: '解锁'
                            }, {
                                id: 21,
                                label: '删除'
                            }]
                        }, {
                            id: 15,
                            label: '国外',
                            children: [{
                                id: 22,
                                label: '新增'
                            }, {
                                id: 23,
                                label: '编辑'
                            }, {
                                id: 24,
                                label: '审核'
                            }, {
                                id: 25,
                                label: '锁定'
                            }, {
                                id: 26,
                                label: '解锁'
                            }, {
                                id: 27,
                                label: '删除'
                            }]
                        }]
                    }],
                }],
                data4: [{
                    id: 1,
                    label: '项目管理',
                    children: [{
                        id: 2,
                        label: '项目详情管理',
                        children: [{
                            id: 6,
                            label: '提交'
                        }, {
                            id: 7,
                            label: '预览'
                        }]
                    }, {
                        id: 3,
                        label: '项目视频管理',
                        children: [{
                            id: 8,
                            label: '新增'
                        }, {
                            id: 9,
                            label: '删除'
                        }, {
                            id: 10,
                            label: '编辑'
                        }]
                    },{
                        id: 4,
                        label: '项目图片管理',
                        children: [{
                            id: 11,
                            label: '新增'
                        }, {
                            id: 12,
                            label: '删除'
                        }, {
                            id: 13,
                            label: '编辑'
                        }]
                    },{
                        id: 5,
                        label: '动态管理',
                        children: [{
                            id: 14,
                            label: '新增'
                        }, {
                            id: 15,
                            label: '删除'
                        }, {
                            id: 16,
                            label: '编辑'
                        }]
                    },],
                }],
                data5: [{
                    id: 1,
                    label: '信息动态',
                    children: [{
                        id: 2,
                        label: '信息动态',
                        children: [{
                            id: 4,
                            label: '新增'
                        }, {
                            id: 5,
                            label: '删除'
                        }, {
                            id: 6,
                            label: '编辑'
                        }]
                    }, {
                        id: 3,
                        label: '学术研究',
                        children: [{
                            id: 7,
                            label: '新增'
                        }, {
                            id: 8,
                            label: '删除'
                        }, {
                            id: 9,
                            label: '编辑'
                        }]
                    }]
                }],
                data6: [{
                    id: 1,
                    label: '站内统计',
                    children: [{
                        id: 2,
                        label: '基本情况'
                    }, {
                        id: 3,
                        label: '项目统计',
                    }, {
                        id: 4,
                        label: '其他',
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        methods: {},
        created() {

        },
        components: {}

    }
</script>

<style>


</style>
