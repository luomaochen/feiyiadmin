<template>
    <div>
        <section style="display: flex;align-items: center;margin-bottom: 20px">
        <span>
            项目库管理
        </span>
            <el-tag type="success" style="cursor: pointer;margin-left: 50px">中国</el-tag>
            <el-tag type="success" style="cursor: pointer;margin-left: 20px">国外</el-tag>

        </section>
        <section>
            <div class="crumbs">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item><i class="el-icon-tickets"></i>中国</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </section>
        <section >
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="分类">
                    <el-select v-model="form.class1" placeholder="所有一级分类">
                        <el-option label="所有一级分类" value="class1"></el-option>
                        <el-option label="分类1" value="class1_1"></el-option>
                        <el-option label="分类2" value="class1_2"></el-option>
                    </el-select>
                    <el-select v-model="form.class2" placeholder="所有二级分类">
                        <el-option label="所有二级分类" value="class2"></el-option>
                        <el-option label="分类1" value="class2_1"></el-option>
                        <el-option label="分类2" value="class2_2"></el-option>
                    </el-select>
                    <el-select v-model="form.class3" placeholder="所有三级分类">
                        <el-option label="所有三级分类" value="class3"></el-option>
                        <el-option label="分类1" value="class3_1"></el-option>
                        <el-option label="分类2" value="class3_2"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="项目地区">
                    <el-select v-model="form.country" placeholder="全部国家">
                        <el-option label="全部国家" value="country"></el-option>
                        <el-option label="中国" value="china"></el-option>
                        <el-option label="美国" value="american"></el-option>
                    </el-select>
                    <el-select v-model="form.province" placeholder="全部省/州/邦">
                        <el-option label="全部省/州/邦" value="province"></el-option>
                        <el-option label="广东" value="guangdong"></el-option>
                        <el-option label="广西" value="guangxi"></el-option>
                    </el-select>
                    <el-select v-model="form.city" placeholder="全部市">
                        <el-option label="全部市" value="city"></el-option>
                        <el-option label="深圳" value="shenzhen"></el-option>
                        <el-option label="广州" value="guangzhou"></el-option>
                    </el-select>
                    <el-select v-model="form.area" placeholder="全部县">
                        <el-option label="全部县" value="area"></el-option>
                        <el-option label="南山区" value="nanshan"></el-option>
                        <el-option label="宝安区" value="baoan"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="项目名称">
                    <el-input v-model="form.name" style="width: 300px"></el-input>
                </el-form-item>
                <el-form-item label="管理人">
                    <el-input v-model="form.manager" style="width: 300px"></el-input>
                </el-form-item>
                <el-form-item label="活动时间">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                                    style="width: 150px;"></el-date-picker>
                    <span>至</span>
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date2"
                                    style="width: 150px"></el-date-picker>
                </el-form-item>
            </el-form>
            <el-button style="margin-top: 5px" type="primary">搜索</el-button>
        </section>
        <section class="library-container">
            <div class="container">
                <el-table :data="tableData1" border style="width: 100%" ref="multipleTable">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column prop="name" label="项目名称" width="200">
                    </el-table-column>
                    <el-table-column prop="classification" label="分类" width="100">
                    </el-table-column>
                    <el-table-column prop="level" label="项目级别" width="100">
                    </el-table-column>
                    <el-table-column prop="manager" label="管理人" width="150">
                    </el-table-column>
                    <el-table-column prop="create_time" label="创建时间" width="150">
                    </el-table-column>
                    <el-table-column prop="update_time" label="更新时间" width="150">
                    </el-table-column>
                    <el-table-column prop="watch_times" label="浏览次数" width="80">
                    </el-table-column>
                    <el-table-column prop="lock" label="锁定" width="60">
                    </el-table-column>
                    <el-table-column prop="pass" label="审核">
                    </el-table-column>
                    <!--<el-table-column label="操作">-->
                    <!--<template slot-scope="scope">-->
                    <!--<el-button size="small" type="success">编辑-->
                    <!--</el-button>-->
                    <!--<el-button size="small" type="danger">删除-->
                    <!--</el-button>-->
                    <!--</template>-->
                    <!--</el-table-column>-->
                </el-table>
                <div class="handle-box">

                    <el-button type="primary" icon="delete" class="handle-del mr10">新增</el-button>
                    <el-button type="primary" icon="delete" class="handle-del mr10">编辑</el-button>
                    <el-button type="primary" icon="delete" class="handle-del mr10">审核</el-button>
                    <el-button type="primary" icon="delete" class="handle-del mr10">锁定</el-button>
                    <el-button type="primary" icon="delete" class="handle-del mr10">解锁</el-button>
                    <el-button type="primary" icon="delete" class="handle-del mr10">删除</el-button>
                </div>
                <div class="pagination">
                    <el-pagination @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
                    </el-pagination>
                </div>
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
                form: {
                    class1: '',
                    class2: '',
                    class3: '',
                    country: '',
                    province: '',
                    city: '',
                    area: '',
                    name: '',
                    manager: '',
                    date1: '',
                    date2: '',
                },
                tableData1: [
                    {
                        "name": "项目名称1XXXXXX",
                        "classification": "分类1",
                        "level": "地区1",
                        "manager": "姓名",
                        "create_time": "2018-1-1 18:12",
                        "update_time": "2018-2-1 12:30",
                        "watch_times": "20",
                        "lock": "否",
                        "pass": "未审核",
                    }, {
                        "name": "项目名称1XXXXXX",
                        "classification": "分类1",
                        "level": "地区1",
                        "manager": "姓名1，姓名2",
                        "create_time": "2018-1-1 18:12",
                        "update_time": "2018-2-1 12:30",
                        "watch_times": "20",
                        "lock": "否",
                        "pass": "未审核",
                    }, {
                        "name": "项目名称1XXXXXX",
                        "classification": "分类1",
                        "level": "地区1",
                        "manager": "姓名1，姓名3",
                        "create_time": "2018-1-1 18:12",
                        "update_time": "2018-2-1 12:30",
                        "watch_times": "20",
                        "lock": "否",
                        "pass": "未审核",
                    }, {
                        "name": "项目名称1XXXXXX",
                        "classification": "分类1",
                        "level": "地区1",
                        "manager": "姓名1，姓名2",
                        "create_time": "2018-1-1 18:12",
                        "update_time": "2018-2-1 12:30",
                        "watch_times": "20",
                        "lock": "否",
                        "pass": "未审核",
                    }, {
                        "name": "项目名称1XXXXXX",
                        "classification": "分类1",
                        "level": "地区1",
                        "manager": "姓名",
                        "create_time": "2018-1-1 18:12",
                        "update_time": "2018-2-1 12:30",
                        "watch_times": "20",
                        "lock": "否",
                        "pass": "未审核",
                    }, {
                        "name": "项目名称1XXXXXX",
                        "classification": "分类1",
                        "level": "地区1",
                        "manager": "姓名",
                        "create_time": "2018-1-1 18:12",
                        "update_time": "2018-2-1 12:30",
                        "watch_times": "20",
                        "lock": "否",
                        "pass": "未审核",
                    },],
                cur_page: 1,
            }
        },
        methods: {
            handleCurrentChange(val) {
                this.cur_page = val;
                this.getData();
                this.getData1();
            },

        },
        created() {

        },
        components: {}

    }
</script>

<style scoped>

    .handle-box {
        margin-top: 20px;
    }

    .library-container {
       margin-top: 30px;
    }
</style>
