import {createRouter, createWebHistory} from 'vue-router'

import pageIndex from './pages/index.vue'
import pagesDetail from './pages/pages.vue'

const routes = [
    {path: '/', component: pageIndex},
    {path: '/:pages', component: pagesDetail},
]

const router = createRouter({
    props: true,
    history: createWebHistory(),
    routes,
})
export default router
