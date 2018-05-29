<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-tickets"></i> 用户列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-input v-model="input0" size="medium" placeholder="请输入用户名"></el-input>
                <el-input v-model="input1" size="medium" placeholder="请输入用户组"></el-input>
                <el-input v-model="input2" size="medium" placeholder="请输入项目名称"></el-input>
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
            </div>

            <div class="handle-box">
                <el-button type="primary" icon="delete" class="handle-del mr10" @click="delAll">批量删除</el-button>
                <el-button type="success" icon="delete" class="handle-del mr10" @click="go">新增</el-button>
            </div>
            <el-table :data="tableData1" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55" ></el-table-column>
                <el-table-column prop="username" label="用户名"  width="120">
                </el-table-column>
                <el-table-column prop="group" label="用户组" width="150">
                </el-table-column>
                <el-table-column prop="projectname" label="项目名称" width="300">
                </el-table-column>
                <el-table-column prop="first_date" label="注册时间" width="120">
                </el-table-column>
                <el-table-column prop="end_date" label="最后登录时间" width="120">
                </el-table-column>
                <el-table-column label="操作" width="580">
                    <template slot-scope="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="small">详情</el-button>
                        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
                </el-pagination>
            </div>
        </div>

        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="50%">
            <el-form ref="form" :model="form" label-width="50px">
                <el-form-item label="标题">
                    <el-input v-model="form.title"></el-input>
                </el-form-item>
                <el-form-item label="内容">
                    <el-input type="textarea" v-model="form.content" rows="30"></el-input>
                </el-form-item>

                <el-form-item  hidden="hidden" label="创建时间">
                    <el-input  v-model="form.first_date" ></el-input>
                </el-form-item>
                <el-form-item  hidden="hidden" label="更新时间">
                    <el-input  v-model="form.end_date"></el-input>
                </el-form-item>
                <el-form-item  hidden="hidden" label="浏览次数">
                    <el-input v-model="form.watch_times" ></el-input>
                </el-form-item>

            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>

        <!-- 删除提示框 -->
        <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
            <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="delVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteRow">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                input0:'',
                input1:'',
                input2:'',
                url: './static/vuetable.json',
                url1: './static/userlist.json',
                tableData: [],
                tableData1: [],
                cur_page: 1,
                multipleSelection: [],
                select_cate: '',
                select_word: '',
                del_list: [],
                is_search: false,
                editVisible: false,
                delVisible: false,
                form: {
                    title: '',
                    content: '',
                    first_date: "1997-11-11",
                    end_date: "2018-11-11",
                    watch_times:"20"
                },
                idx: -1
            }
        },
        created() {
            this.getData();
            this.getData1();
        },
        computed: {
        },
        methods: {
            // 分页导航
            handleCurrentChange(val) {
                this.cur_page = val;
                this.getData();
                this.getData1();
            },

            //新增跳转
            go() {
                this.$router.push('/adduser');
            },

            // 获取 easy-mock 的模拟数据
            getData() {
                // 开发环境使用 easy-mock 数据，正式环境使用 json 文件
//                if (process.env.NODE_ENV === 'development') {
//                    this.url = '/ms/table/list';
//                };
                this.$axios.get(this.url, {
                    page: this.cur_page
                }).then((res) => {
                    this.tableData = res.data.list;
                })
            },
            getData1(){
                this.$axios.get(this.url1, {
                    page: this.cur_page
                }).then((res) => {
                    this.tableData1 = res.data.list;
                    console.log(this.tableData1);
                })
            },
            search() {
                this.is_search = true;
            },
//            formatter(row, column) {
//                return row.address;
//            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleEdit(index, row) {
                this.idx = index;
                const item = this.tableData1[index];
                this.form = {
                    username: item.username,
                    group: item.group,
                    projectname: item.projectname,
                    first_date: "1997-11-11",
                    end_date: "2018-11-11",
                };
                this.editVisible = true;
            },
            handleDelete(index, row) {
                this.idx = index;
                this.delVisible = true;
            },
            delAll() {
                const length = this.multipleSelection.length;
                let str = '';
                this.del_list = this.del_list.concat(this.multipleSelection);
                for (let i = 0; i < length; i++) {
                    str += this.multipleSelection[i].title + ' ';
                }
                this.$message.error('删除了' + str);
                this.multipleSelection = [];
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;    //选中的栏凑起来的数组
            },
            // 保存编辑
            saveEdit() {
                this.$set(this.tableData1, this.idx, this.form);
                this.editVisible = false;
                this.$message.success(`修改第 ${this.idx+1} 行成功`);
            },
            // 确定删除
            deleteRow(){
                console.log(this.idx);
                this.tableData1.splice(this.idx, 1);
                this.$message.success('删除成功');
                this.delVisible = false;
            }
        }
    }

</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }

    .handle-select {
        width: 120px;
    }

    .handle-input {
        width: 300px;
        display: inline-block;
    }
    .del-dialog-cnt{
        font-size: 16px;
        text-align: center
    }

    .el-input {
        width: 200px;
    }

    .el-button {
        margin-left: 20px;
    }
</style>
