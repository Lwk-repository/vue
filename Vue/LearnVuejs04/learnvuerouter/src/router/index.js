// 配置路由相关的信息
import VueRouter from "vue-router";
import Vue from 'vue';

// 导入组件
/*import Home from '../components/Home';
import About from '../components/About';
import User from '../components/User';*/

// 路由懒加载
const Home = () => import('../components/Home');
const News = () => import('../components/HomeNews');
const Message = () => import('../components/HomeMessage');

const About = () => import('../components/About');
const User = () => import('../components/User');
const Profile = () => import('../components/Profile');

// 1.通过vue.use(插件)，安装插件
Vue.use(VueRouter);

// 2.创建VueRouter对象
const routes = [
  {path: '/', redirect: '/home'}, //页面重定向
  {
    path: '/home',  // url路径
    component: Home,// 组件路径
    children: [ // 子路由
      {
        path: '/', // 自动拼接在父路径后面
        component: News,
      },
      {
        path: 'news', // 自动拼接在父路径后面
        component: News,
      },
      {
        path: 'message',
        component: Message,
      },
    ]
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/user/:id',  // ：后面随便起，动态路由
    component: User,
  },
  {
    path: '/profile',  // ：后面随便起，动态路由
    component: Profile,
  }
];
const router = new VueRouter({
  // 配置路由和组件之间的映射关系
  routes,
  mode: 'history', //history 模式，路径上不再有#号，hash模式有
  linkActiveClass: 'active'
});

// 3.将router对象传入vue实例中
export default router;



