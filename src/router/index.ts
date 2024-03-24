import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '../views/CategoryView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },{
      path: '/categories/:category',
      name: 'categories',
      component: CategoryView,
    },{
      path: '/products/:id',
      name: 'products',
      component: () => import('../views/ProductVue.vue'),
      props: true,
    },{
      path: '/admin/auth',
      name: 'Admin auth',
      component: () => import('../views/AdminAuthView.vue'),
    },{
      path: '/create-product',
      name: 'Create product',
      component: () => import('../views/CreateProductView.vue'),
    }
  ]
})

export default router
