import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import {PrimeVueResolver} from '@primevue/auto-import-resolver';
import VueRouter from "unplugin-vue-router/vite"
import AutoImport from "unplugin-auto-import/vite"
import CompressionPlugin from "vite-plugin-compression"
// https://vitejs.dev/config/
export default defineConfig({
    clearScreen: false,
    plugins: [

        Components({
            dirs: ["./src/components/**"],
            dts: true,
            include: [/\.vue$/, /\.vue\?vue/],
            extensions: ["vue"],
            resolvers: [
                PrimeVueResolver()
            ]
        }),
        AutoImport({
            dts: true,
            imports: ["vue", "vue-router", "@vueuse/core"],
            eslintrc: {
                enabled: true
            }
        }),
        VueRouter({
            routesFolder: "./src/pages",
            routeBlockLang: "json5",
            importMode: "async",
            dts: true,
            exclude: ["**/__*"]
        }),
        CompressionPlugin({
            algorithm: "gzip",
            ext: ".gz"
        }),
        vue(),
    ]
})
