// 根组件路由配置
import VueRouter from 'vue-router';
import index_page from '../components/index-page.vue';
import sub_page from '../components/sub-page.vue';

export default new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    { path: '/', component: index_page },
    { path: '/sub', component: sub_page }
  ]
});