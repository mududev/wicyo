import path from "path"
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import {PrimeVueResolver} from '@primevue/auto-import-resolver';
import VueRouter from "unplugin-vue-router/vite"
import AutoImport from "unplugin-auto-import/vite"
import CompressionPlugin from "vite-plugin-compression"
import vueDevTools from "vite-plugin-vue-devtools"

import {versionName, version} from "./package.json"
// https://vitejs.dev/config/
export default defineConfig({
    clearScreen: false,
    plugins: [
        vueDevTools(),
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
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    },

    build: {
        emptyOutDir: true,
        sourcemap: false,
        rollupOptions: {
            output: {
                assetFileNames: `lib/assets/[ext]/[name]${versionName}.[ext]`,
                chunkFileNames: `lib/chunks/[name]${versionName}.js`,
                entryFileNames: `lib/js/[name]${versionName}.js`
            }
        },
        // chunkFilename: "lib/chunks/[name].js",
        chunkSizeWarningLimit: 8600,
        outDir: "./dist"
    },
})
