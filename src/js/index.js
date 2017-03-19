import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import { 
	Menu, 
	MenuItem
} from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(Menu);
Vue.use(MenuItem);

import app from '../components/app.vue';
new Vue(app).$mount('#app');