import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
import vuex from './store';
import router from './router';

createApp(App)
    .use(vuex)
    .use(router)
    .mount('#app');
