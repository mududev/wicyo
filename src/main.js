import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from './App.vue'
const app = createApp(App);
import Aura from '@primevue/themes/aura';
import "./assets/style/index.css"
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
 });

app.mount('#app')
