<template>
    <div>
        <el-table
                :data="tableData"
                border
                style="width: 100%;height: auto">
            <el-table-column
                    fixed
                    prop="emid"
                    label="id"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="password"
                    label="密码"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="age"
                    label="年龄"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="gender"
                    label="性别"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="identity"
                    label="身份证"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="bankid"
                    label="银行卡号"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="tel"
                    label="手机"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="department"
                    label="部门"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="position"
                    label="单位"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="note"
                    label="备注"
                    width="120">
            </el-table-column>

            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <span class="demonstration"></span>
            <el-pagination
                    @size-change="size"
                    @current-change="page"
                    :page-sizes="pagination.pageSizes"
                    :page-size="pagination.pageSize"
                    :current-page="pagination.currentpage"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="pagination.total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    export default {
        name: "UserTest",
        data() {
            return {
                tableData: [{}],
                pagination: {
                    total: 0,
                    pageSize: 4,
                    pageSizes: [2, 4, 6],
                    currentpage:1
                }
            }
        },
        methods: {
            size(sizepage) {

                this.pagination.pagesize=sizepage
            },
            page(currentPage) {
                var pagesize =this.pagination.pagesize
                var userData = this
                axios.get("http://localhost:8181/Employee/queryEmployee/" + (currentPage) + "/" + (pagesize)).then(function (user) {
                    userData.tableData = user.data.list
                    userData.pagination.total = user.data.totalCount
                    userData.pagination.pagesize = user.data.pageSize
                    // userData.pagination.currentPage=user.data.currentPage
                    console.log(user)

                })

            },


        },
        created: function () {
            var userData = this
            axios.get("http://localhost:8181/Employee/queryEmployee/1/4").then(function (user) {
                userData.tableData = user.data.list
                userData.pagination.total = user.data.totalCount
                userData.pagination.pagesize = user.data.pageSize
                console.log(user)

            })

        }
    }
</script>
<style scoped>

</style>