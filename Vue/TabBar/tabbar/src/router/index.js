import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 懒加载
const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/Profile/Profile')

const routes = [
  { path: '', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/cart', component: Cart },
  { path: '/category', component: Category },
  { path: '/profile', component: Profile },
];

export default new Router({
  routes,
  mode: 'history'
})
