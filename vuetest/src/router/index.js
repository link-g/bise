import Vue from 'vue'
import VueRouter from 'vue-router'
import User from "../views/User";
import PageTwo from "../views/PageTwo";
import attendance from "../views/attendance";
import addAttendance from "../views/addAttendance";
import overtime from "../views/overtime";
import addOvertime from "../views/addOvertime";
import performance from "../views/performance";
import addPerformance from "../views/addPerformance";
import userUpdate from "../views/userUpdate"
import attendanceUpdate from "../views/attendanceUpdate";
import performanceUpdate from "../views/performanceUpdate";
import overtimeUpdate from "../views/overtimeUpdate";
import login from "../views/logintest";

import App from "../App";
import Index from "../views/index";
import AddUser from "../views/AddUser";
import UserTest from "../views/UserTest";

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "用户",
        component: Index,
        //redirect: "/User",
        redirect: "/login",
        show:true,
        children: [
            {
                path: "/User",
                name: "职员信息",
                component: User
            },
            // {
            //   path:"/UserTest",
            //   name:"职员信息test",
            //   component: UserTest
            // },
            {
                path: "/AddUser",
                name: "添加用户",
                component: AddUser
            },
            {
                path: "/PageTwo",
                name: "页面二",
                component: PageTwo
            }
        ]
    },
    {
        path: "/navigation1",
        name: "出勤/签到",
        component: Index,
        show:true,
        children: [
            {
                path: "/attendance",
                name: "出勤/签到记录",
                component: attendance
            },
            {
                path: "/addAttendance",
                name: "出勤/签到",
                component: addAttendance
            }
        ]
    },
    {
        path: "/navigation2",
        name: "休假记录",
        component: Index,
        show:true,
        children: [
            {
                path: "/overtime",
                name: "休假记录",
                component: overtime
            },
            {
                path: "/addOvertime",
                name: "添加休假记录",
                component: addOvertime
            }
        ]
    },
    {
        path: "/navigation3",
        name: "绩效考核",
        component: Index,
        show:true,
        children: [
            {
                path: "/performance",
                name: "绩效考核",
                component: performance
            },
            {
                path: "/addPerformance",
                name: "添加绩效",
                component: addPerformance
            }
        ]
    },
    {
        path: "/O",
        name: "other",
        component: Index,
        show:false,
        children: [
            {
                path:'/login',
                name:"登录",
                component: login,

            },
            {
                path:'/userUpdate',
                //name:"更新员工记录",
                component: userUpdate,

            },
            {
                path:'/performanceUpdate',
                //name:"更新绩效",
                component: performanceUpdate,

            }
            ,
            {
                path:'/attendanceUpdate',
                //name:"更新出席",
                component: attendanceUpdate,

            },
            {
                path:'/overtimeUpdate',
                //name:"更新请假",
                component: overtimeUpdate,

            }
        ]
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
