console.warn = () => {
}
if (process.env.NODE_ENV === "production") {
    console.log = () => {
    }
    console.error = () => {
    }
}
import mitt from "mitt"
import {createApp} from "vue";

import {createPinia} from "pinia"
import App from './App.vue'
import router from "@/core/router"
import {func} from "@/core/utils"

const app = createApp(App)
const pinia = createPinia()
import {useMainStore} from "@/core/store"

const store = useMainStore(pinia)
app.use(pinia)
app.config.globalProperties.$store = store
app.config.globalProperties.$f = func
app.config.globalProperties.$mitt = mitt()

import "./assets/style/index.css"
import 'primeicons/primeicons.css'

app.use(router)



app.mount('#app')
