import {defineStore} from "pinia"
import {func} from "@/core/utils"

export const useMainStore = defineStore("main", {
    state: () => ({
        token: useStorage("token", null),
    }),
    actions: {
        async logout() {
            if (!this.token) return (location.href = "/auth")
            await func.rest({method: "delete", path: "me"})
            this.token = null
            location.href = "/auth"
        }
    },
    getters: {}
})
