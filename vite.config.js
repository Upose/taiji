import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [
    vue(),
    WindiCSS(), 
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    AutoImport({
      imports: ['vue', 'vue-router'], // 自动引入的库
    }),
    Components({
      resolvers: [ElementPlusResolver()], // 可选：解析 Element Plus 组件
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    // 是否主动唤醒浏览器
    // open: true,
    // 占用端口       
    port: 5176,
    // 扩展访问端口
    host: '0.0.0.0',
  },
})
