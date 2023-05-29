import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createVfm } from 'vue-final-modal';
import 'vue-final-modal/style.css';
import VueElementLoading from 'vue-element-loading';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue';
import zh from '@/locales/zh-TW';
import en from '@/locales/en-US';
import { createI18n } from 'vue-i18n';
import i18n from './plugins/i18n';
import messages from '@intlify/unplugin-vue-i18n/messages';

import router from './router';

const app = createApp(App);
const vfm = createVfm();
app.component('VueElementLoading', VueElementLoading);
app.use(i18n);
app.use(vfm);
app.use(createPinia());
app.use(router);
app.mount('#app');
