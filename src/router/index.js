import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/layout/Home.vue';
import Login from '../views/Login.vue';
import store from '../store';
import getMenuRoutes from '../utils/permission';

import productList from '../views/page/productList.vue';
import productAdd from '../views/page/productAdd.vue';
import category from '../views/page/category.vue';
import Index from '../views/page/index.vue';

Vue.use(VueRouter);

const ayncRouterMap = [
  {
    path: '/product',
    name: 'Product',
    meta: {
      title: '商品',
    },
    component: Home,
    children: [
      {
        path: 'list',
        name: 'ProductList',
        meta: {
          title: '商品列表',
        },
        component: productList,
        // component: () => import('@/views/page/productList.vue'),
      },
      {
        path: 'add',
        name: 'ProductAdd',
        meta: {
          title: '添加商品',
        },
        component: productAdd,
        // component: () => import('../views/page/productAdd.vue'),
      },
      {
        path: 'category',
        name: 'Category',
        meta: {
          title: '类目管理',
        },
        component: category,
        // component: () => import('../views/page/category.vue'),
      },
    ],
  },
];

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
    },
    children: [
      {
        path: 'index',
        name: 'Index',
        component: Index,
        meta: {
          title: '统计',
        },
        // component: () => import('../views/page/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录',
    },
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   meta: {
  //     title: '关于',
  //   },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
];

const router = new VueRouter({
  routes,
});

let isAddRouters = false;
// 添加一个导航守卫拦截
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (store.state.user.username && store.state.user.appkey && store.state.user.role) {
      if (!isAddRouters) {
        const menuRoutes = getMenuRoutes(store.state.user.role, ayncRouterMap);
        router.addRoutes(menuRoutes);
        store.dispatch('changeMenuRoutes', routes.concat(menuRoutes));
        isAddRouters = true;
      }

      // console.log(menuRoutes);
      return next();
    }
    return next('/login');
  }
  return next();
});

export default router;
