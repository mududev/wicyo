import {useMainStore} from "@/core/store.js";
import axios from "axios";

let logoutProgress = false
export const func = {
    rest(options, configData) {
        if (!options) return {status: false}
        if (typeof options === "string") {
            if (configData) {
                options = {path: options, ...configData}
            } else {
                options = {
                    path: options
                }
            }
        }
        let {
            method = "get",
            path = null,
            message = false,
            data = null,
            params = null,
            url = null,
            responseType = null
        } = options

        if (!url) url = process.env.NODE_ENV === "production" ? "https://core.muhasip.dev" : "http://core.mudu:8000"
        // url = "https://core.muhasip.dev"

        const storeData = useMainStore()
        let request = url

        if (path) request = `${url}/${path}`
        const headers = {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
        }
        if (storeData.token) headers.Authorization = `Bearer ${storeData.token}`

        const config = {
            method: method || "get",
            url: request,
            headers
        }
        if (data) config.data = data
        if (params) config.params = params
        if (responseType) config.responseType = responseType
        let successMessage = null
        let errorMessage = null
        if (message) {
            if (typeof message == "string") {
                successMessage = message
            } else if (typeof message == "boolean") {
                successMessage = "İşlem Başarılı"
                errorMessage = "İşlem Başarısız"
            } else if (typeof message == "object") {
                if (Array.isArray(message)) {
                    successMessage = message[0] || null
                    errorMessage = message[1] || null
                }
            }
        }
        return axios(config)
            .then((response) => {
                // ElMessage.closeAll()
                // if (successMessage) messagePush({type: "success", message: successMessage})
                // if (storeData.developer) {
                //   debug.emit({type: "rest", data: {config, response: response.data}})
                // }

                return response.data
            })
            .catch((error) => {

                if (!error.response) {
                    // if (errorMessage) messagePush({type: "error", message: errorMessage})
                    /*
                    if (!networkerror) {
                        networkerror = messagePush({
                            duration: 0,
                            type: 'error',
                            message: 'Bağlantı hatası',
                            description: error.message
                        })
                    }*/
                    return {
                        status: false,
                        message: error.message
                    }
                    // SİSTEM HATASI
                } else if (error.response.status === 401) {
                    if (logoutProgress) {
                        return {
                            status: false
                        }
                    }
                    logoutProgress = true
                    setTimeout(async () => {
                        await storeData.logout()
                    }, 1000)
                    return {
                        status: false
                    }
                } else {
                    // if (errorMessage) messagePush({type: "error", message: errorMessage})
                    return {
                        ...error.response.data,
                        statusCode: error.response.status,
                        status: false
                    }
                }
            })
    },
}
