<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-tickets"></i> 轮播图设置</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-table :data="tableData1" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
                <el-table-column prop="number" label="序号" sortable width="80" ></el-table-column>
                <el-table-column prop="title" label="标题"  width="400">
                </el-table-column>
                <el-table-column prop="first_date" label="更新时间" >
                </el-table-column>
                <el-table-column prop="end_date" label="发布时间" >
                </el-table-column>
                <el-table-column prop="state"   label="状态" width="150">
                </el-table-column>
                <el-table-column label="操作" width="260">
                    <template slot-scope="scope">
                        <el-button size="small" type="success" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="small" type="primary" >详情</el-button>
                        <el-button v-if="scope.row.state === '发布'" size="small" type="danger" >取消发布</el-button>
                        <el-button v-else  size="small" type="danger" >发 &nbsp&nbsp &nbsp&nbsp 布</el-button>

                    </template>
                </el-table-column>
            </el-table>
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


    </div>
</template>

<script>
    export default {
        data() {
            return {
                url: './static/vuetable.json',
                url1: './static/roundplay.json',
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
                    title: item.title,
                    content: item.content,
                    first_date: "1997-11-11",
                    end_date: "2018-11-11",
                    watch_times:"20"
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
</style>
