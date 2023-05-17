import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BoardView from '../views/BoardView.vue'
import MainView from '../views/MainView.vue'
import LoginView from '../views/LoginView.vue'
import TourView from '../views/TourView.vue'
import BoardList from '../components/board/BoardList.vue'
import UserRegister from '../components/user/UserRegister.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/main',
    name: 'main',
    component:MainView
    
  },
  {
    path: '/regist',
    name: 'regist',
    component: UserRegister
    
  },
  {
    path: "/board",
    name: "board",
    component: BoardView,
    redirect: "/board/list",
    children: [
      {
        path: "list",
        name: "boardlist",
        component:BoardList,
      },
      {
        path: "write",
        name: "boardwrite",
        // beforeEnter: onlyAuthUser,
        component: () => import(/* webpackChunkName: "board" */ "@/components/board/BoardWrite"),
      },
      {
        path: "view/:articleno",
        name: "boardview",
        // beforeEnter: onlyAuthUser,
        component: () => import(/* webpackChunkName: "board" */ "@/components/board/BoardView"),
      },
      {
        path: "modify",
        name: "boardmodify",
        // beforeEnter: onlyAuthUser,
        component: () => import(/* webpackChunkName: "board" */ "@/components/board/BoardModify"),
      },
      {
        path: "delete/:articleno",
        name: "boarddelete",
        // beforeEnter: onlyAuthUser,
        component: () => import(/* webpackChunkName: "board" */ "@/components/board/BoardDelete"),
      },
    ],
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tour',
    name: 'tour',
    component: TourView
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
