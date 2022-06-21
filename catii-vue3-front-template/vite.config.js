import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import eslintPlugin from 'vite-plugin-eslint';

export default () =>
  defineConfig({
    define: {
      'process.env': process.env,
    },
    plugins: [vue(), eslintPlugin()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        vue: 'vue/dist/vue.esm-bundler.js',
      },
    },
    build: {
      chunkSizeWarningLimit: 1600,
    },
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000/api', // 代理的目标地址
        changeOrigin: true, // 开发模式，默认的origin是真实的 origin:localhost:3000 代理服务会把origin修改为目标地址
        // secure: true, // 是否https接口
        // ws: true, // 是否代理websockets
        // rewrite: (path) => path.replace(/^\/api/, '') // 路径重写
      },
    },
  });
