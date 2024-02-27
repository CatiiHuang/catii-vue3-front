import 'element-plus/dist/index.css';
import '@/styles/normalize.css';
import '@/styles/common.less';
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import store from '@/store/index.js';
import router from '@/router/index.js';
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';

createApp(App)
  .use(TDesign)
  .use(ElementPlus)
  .use(store)
  .use(router)
  .mount('#app');
