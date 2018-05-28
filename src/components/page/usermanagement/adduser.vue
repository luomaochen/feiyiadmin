<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-tickets"></i> 添加用户</el-breadcrumb-item>
        </el-breadcrumb>
        <section>
            <span class="title-info">基本信息（*号为必填）</span>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="* 用户名" style="width: 300px;float: left">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="* 密码" style="width: 300px;float: left">
                    <el-input v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item label="* 手机号码" style="width: 300px;clear:both;float: left">
                    <el-input v-model="form.phonenumber"></el-input>
                </el-form-item>
                <el-form-item label="项目名称" style="float: left">
                    <el-select v-model="form.project" placeholder="无">
                        <el-option label="项目一" value="project1"></el-option>
                        <el-option label="项目二" value="project2"></el-option>
                        <el-option label="项目三" value="project3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="用户组" style="clear:both">
                    <el-select v-model="form.group" placeholder="无">
                        <el-option label="用户组一" value="group1"></el-option>
                        <el-option label="用户组二" value="group2"></el-option>
                        <el-option label="用户组三" value="group3"></el-option>
                    </el-select>
                </el-form-item>
                <span class="title-info" style="margin-top: 100px;">详细信息</span>
                <el-form-item label="性别" style="width: 300px;float: left">
                    <el-radio-group v-model="form.sex" >
                        <el-radio label="男"></el-radio>
                        <el-radio label="女"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="民族" style="width: 300px;float: left">
                    <el-input v-model="form.nation"></el-input>
                </el-form-item>
                <el-form-item label="出生日期" style="width: 300px;clear:both;float: left">
                    <el-input v-model="form.birth"  placeholder="年/月/日"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" style="width: 300px;float: left">
                    <el-input v-model="form.mailbox"></el-input>
                </el-form-item>
                <el-form-item label="地址" style="width: 300px;clear:both;float: left">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
                <el-form-item style="clear:both">
                    <el-button type="primary" @click="submitForm('form')">确定</el-button>
                    <el-button type="primary" @click="reset()">清空</el-button>
                </el-form-item>
            </el-form>
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
                    username: '',
                    password:'',
                    phonenumber:'',
                    project: '',
                    group: '',
                    sex:'',
                    nation:'',
                    birth:'',
                    mailbox:'',
                    address:''

                }
            }
        },
        methods: {
            reset() {
               this.form.username='';
               this.form.password='';
               this.form.phonenumber='';
               this.form.project='';
               this.form.group='';
               this.form.sex='';
               this.form.nation='';
               this.form.birth='';
               this.form.mailbox='';
               this.form.address=''
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },

        },
        created() {

        },
        components: {}

    }
</script>

<style>
.title-info {
    display: block;
    margin-top: 50px;
    margin-bottom: 20px;
}

</style>
