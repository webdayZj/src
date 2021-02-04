import Home from '@/views/Home.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
// 预防点击同个路由报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '首页',
    component: Home
  },
  // {
  //   path: '/company',
  //   name: 'Company',
  //   component: () => import('@/views/Company.vue')
  // },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
