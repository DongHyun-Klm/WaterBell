import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
//지하차도 페이지
import RoadDash from '@/underroad/views/roadDashboardView.vue'; // 대쉬보드
import RoadReport from '@/underroad/views/roadReportView.vue'; // 신고접수
import RoadSystemlog from '@/underroad/views/roadSystemLogView.vue'; // 시스템로그
import RoadManage from '@/underroad/views/roadManageView.vue'; // 관리
import RoadControl from '@/underroad/views/roadControlView.vue'; // 제어
//지하차도 신고접수
import roadReportItemVue from '../underroad/components/report/roadReportItem.vue';
import roadReportListVue from '../underroad/components/report/roadReportList.vue';
import roadReportCreateVue from '../underroad/components/report/roadReportCreate.vue';
import roadReportUpdateVue from '../underroad/components/report/roadReportUpdate.vue';
//지하주차장 페이지
import ParkDash from '@/undergroundParkingLot/views/parkDashboardView.vue'; // 대쉬보드
import ParkReport from '@/undergroundParkingLot/views/parkReportView.vue'; // 신고접수
import ParkSystemlog from '@/undergroundParkingLot/views/parkSystemLogView.vue'; // 시스템로그
import ParkManage from '@/undergroundParkingLot/views/parkManageView.vue'; // 관리
import ParkControl from '@/undergroundParkingLot/views/parkControlView.vue'; // 제어
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    // 지하차도 라우터
    {
        path: '/road/dash',
        name: 'RoadDash',
        component: RoadDash
    },
    {
        path: '/road/report',
        name: 'RoadReport',
        component: RoadReport,
        children: [
            {
                path: 'list',
                component: roadReportListVue
            },
            {
                path: 'create',
                component: roadReportCreateVue
            },
            {
                path: 'update',
                component: roadReportUpdateVue
            },
            {
                path: 'item',
                component: roadReportItemVue
            }
        ]
    },
    {
        path: '/road/control',
        name: 'RoadControl',
        component: RoadControl
    },
    {
        path: '/road/manage',
        name: 'RoadManage',
        component: RoadManage
    },
    {
        path: '/road/systemlog',
        name: 'RoadSystemlog',
        component: RoadSystemlog
    },
    //지하주차장 라우터
    {
        path: '/park/dash',
        name: 'ParkDash',
        component: ParkDash
    },
    {
        path: '/park/report',
        name: 'ParkReport',
        component: ParkReport
    },
    {
        path: '/park/systemlog',
        name: 'ParkSystemlog',
        component: ParkSystemlog
    },
    {
        path: '/park/manage',
        name: 'ParkManage',
        component: ParkManage
    },
    {
        path: '/park/control',
        name: 'ParkControl',
        component: ParkControl
    }
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
export default router;
//# sourceMappingURL=index.js.map