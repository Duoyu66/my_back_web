import {lazy} from "react";
import HomePage from "@/pages/HomePage";
import WorkSpace from "@/pages/WorkSpace";
import About from "@/pages/About";
import AnalysisMain from "@/pages/algorithmAnalysis/AnalysisMain";
import Plan from "@/pages/Plan/Plan";
import Work from "@/pages/Work";
import LikeCompany from "@/pages/Work/likeCompany";
import StatisticsScreen from "@/pages/algorithmAnalysis/StatisticsScreen";
import AnalysisMangement from "@/pages/algorithmAnalysis/analysisMangement";
import LearningLogs from "@/pages/LearningLogs";
import LogHistory from "@/pages/LearningLogs/LogHistory";
import LogCreate from "@/pages/LearningLogs/LogCreate";
import ProgressOfLearning from '@/pages/ProgressOfLearning/index'
import HistoryOfLearning from "@/pages/HistoryOfLearning";
const Login = lazy(() => import("../components/Login/index"))
const Register = lazy(() => import("../components/Register/index"))
const ContentPage = lazy(() => import("../pages/ContentPage"))
// import Login from '../components/Login/index'
const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/contentPage',
        title: '我是content',
        component: ContentPage,
        children: [
            {
                path: 'homePage',
                title: '首页',
                component: HomePage,
                meta: {icon: 'HomeOutlined'}

            },
            {
                path: 'workSpace',
                component: WorkSpace,
                title: '工作台',
                meta: {icon: 'DesktopOutlined'}
            },
            {
                path: 'analysisAll',
                component: AnalysisMain,
                title: '分析统计',
                meta: {icon: 'LineChartOutlined'},
                children:[
                    {
                        path:'statisticsScreen',
                        title:'统计大屏',
                        component:StatisticsScreen,
                        meta:{hiddenFooter: true}
                    },
                    {
                        path: 'plan',
                        component: Plan,
                        title: '计划信息',
                    },
                    {
                        path: 'analysisMangement',
                        component: AnalysisMangement,
                        title: '分析管理',
                    },
                ]

            },
            {
                path: 'work',
                component: Work,
                title: 'work',
                meta: {icon: 'CalendarOutlined'},
                children: [
                    {
                        title:'心仪Commpone',
                        path:'LikeCompany',
                        component:LikeCompany,
                        meta: {hiddenFooter:true},
                    },
                ]
            },
            {
                path: 'plan',
                component: Plan,
                title: '计划',
                meta: {icon: 'CalendarOutlined'},
            },
            {
                path: 'learningLogs',
                component: LearningLogs,
                title: '学习日志',
                meta: {icon: 'HistoryOutlined'},
                children: [
                    {
                        path: 'logCreate',
                        component: LogCreate,
                        title: '添加记录',
                        meta: {hiddenFooter:true}
                    },
                    {
                        path: 'logHistory',
                        component: LogHistory,
                        title: '提交记录',
                    },
                ]
            },
            {
                path: 'progressOfLearning',
                component: ProgressOfLearning,
                title: '学习进度',
                meta: {icon: 'SettingOutlined',hiddenFooter:true}
            },
            {
                path: 'HistoryOfLearning',
                component: HistoryOfLearning,
                title: '学习历史',
                meta: {icon: 'SettingOutlined',hiddenFooter:true}
            },
            {
                path: 'about',
                component: About,
                title: '关于',
                meta: {icon: 'SettingOutlined'}
            },
        ]
    },
]
const asyncRoutes = []
export default routes

