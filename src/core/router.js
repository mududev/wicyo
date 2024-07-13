import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import {useMainStore} from "@/core/store"

const router = createRouter({
    props: true,
    history: createWebHistory(),
    routes
})
// router.beforeEach((to, from) => {
//
// })
export default router
