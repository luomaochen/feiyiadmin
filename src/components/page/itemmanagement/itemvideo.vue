<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-view"></i> 项目视频管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-button type="primary" icon="delete" class="handle-del mr10" @click="delAll">批量删除</el-button>
                <el-button type="success" icon="delete" class="handle-del mr10" >新增</el-button>
            </div>
            <el-table :data="tableData" style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
                <el-table-column type="selection" ></el-table-column>
                <el-table-column label="封面图" width="100">
                    <template slot-scope="scope">
                        <img style="width: 50px;height: 50px" :src="scope.row.image">
                    </template>
                </el-table-column>
                <el-table-column label="视频标题" width="180">
                    <template slot-scope="scope">
                        <p>{{ scope.row.videotitle }}</p>
                    </template>
                </el-table-column>

                <el-table-column label="描述" width="200">
                    <template slot-scope="scope">
                        <p>{{ scope.row.description }}</p>
                    </template>
                </el-table-column>
                <el-table-column label="制作者" >
                    <template slot-scope="scope">
                        <p>{{ scope.row.author }}</p>
                    </template>
                </el-table-column>
                <el-table-column label="时长" >
                    <template slot-scope="scope">
                        <p>{{ scope.row.time }}</p>
                    </template>
                </el-table-column>
                <el-table-column  label="拍摄时间" >
                    <template slot-scope="scope">
                        <p>{{ scope.row.shot_date }}</p>
                    </template>
                </el-table-column>
                <el-table-column  label="创建时间" >
                    <template slot-scope="scope">
                        <p>{{ scope.row.create_date }}</p>
                    </template>
                </el-table-column>
                <el-table-column  label="浏览次数" >
                    <template slot-scope="scope">
                        <p>{{ scope.row.watch_times }}</p>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="180">
                    <template slot-scope="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="封面图">
                    <el-input v-model="form.image"></el-input>
                </el-form-item>
                <el-form-item label="视频标题">
                    <el-input v-model="form.videotitle"></el-input>
                </el-form-item>
                <el-form-item label="描述">
                    <el-input v-model="form.description" ></el-input>
                </el-form-item>
                <el-form-item label="制作者">
                    <el-input v-model="form.author" ></el-input>
                </el-form-item>
                <el-form-item label="时长">
                    <el-input v-model="form.time" ></el-input>
                </el-form-item>
                <el-form-item   label="拍摄时间">
                    <el-input  v-model="form.shot_date" ></el-input>
                </el-form-item>
                <el-form-item   label="创建时间">
                    <el-input  v-model="form.create_date" ></el-input>
                </el-form-item>
                <el-form-item  label="观看次数">
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
                tableData: [
                    {
                        videotitle:'视频标题1XXXXXX',
                        image:'./static/img/img.jpg',
                        description:'描述1XXXXXX',
                        author:'姓名1',
                        time:'120`30"',
                        shot_date: '2018-01-01 18:12',
                        create_date:'2018-02-01 12:30',
                        watch_times:'20'

                    }, {
                        videotitle:'视频标题1XXXXXX',
                        image:'./static/img/img.jpg',
                        description:'描述1XXXXXX',
                        author:'姓名1',
                        time:'120`30"',
                        shot_date: '2018-01-01 18:12',
                        create_date:'2018-02-01 12:30',
                        watch_times:'20'
                    }, {
                        videotitle:'视频标题1XXXXXX',
                        image:'./static/img/img.jpg',
                        description:'描述1XXXXXX',
                        author:'姓名1',
                        time:'120`30"',
                        shot_date: '2018-01-01 18:12',
                        create_date:'2018-02-01 12:30',
                        watch_times:'20'
                    }, {
                        videotitle:'视频标题1XXXXXX',
                        image:'./static/img/img.jpg',
                        description:'描述1XXXXXX',
                        author:'姓名1',
                        time:'120`30"',
                        shot_date: '2018-01-01 18:12',
                        create_date:'2018-02-01 12:30',
                        watch_times:'20'
                    }],
                cur_page: 1,
                multipleSelection: [],
                select_cate: '',
                select_word: '',
                del_list: [],
                is_search: false,
                editVisible: false,
                delVisible: false,
                form: {
                    videotitle:'视频标题1XXXXXX',
                    image:'./static/img/img.jpg',
                    description:'描述1XXXXXX',
                    author:'姓名1',
                    time:'120`30"',
                    shot_date: '2018-01-01 18:12',
                    create_date:'2018-02-01 12:30',
                    watch_times:'20'
                },
                idx: -1
            }
        },
        computed: {},
        methods: {
            // 分页导航
            handleCurrentChange(val) {
                this.cur_page = val;
                this.getData();
                this.getData1();
            },
            handleEdit(index, row) {
                this.idx = index;
                const item = this.tableData[index];
                this.form = {
                    videotitle:item.videotitle,
                    image:item.image,
                    description:item.description,
                    author:item.author,
                    time:item.time,
                    shot_date: item.shot_date,
                    create_date:item.create_date,
                    watch_times:item.watch_times
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
                    str += this.multipleSelection[i].videotitle + ' ';
                }
                this.$message.error('删除了' + str);
                this.multipleSelection = [];
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;    //选中的栏凑起来的数组
            },
            // 保存编辑
            saveEdit() {
                this.$set(this.tableData, this.idx, this.form);
                this.editVisible = false;
                this.$message.success(`修改第 ${this.idx+1} 行成功`);
            },
            // 确定删除
            deleteRow(){
                console.log(this.idx);
                this.tableData.splice(this.idx, 1);
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
