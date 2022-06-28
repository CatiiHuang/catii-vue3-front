import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import eslintPlugin from 'vite-plugin-eslint';

export default () =>
  defineConfig({
    define: {
      'process.env': process.env,
    },
    plugins: [
      vue(),
      eslintPlugin({
        cache: false,
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        vue: 'vue/dist/vue.esm-bundler.js',
      },
    },
    build: {
      chunkSizeWarningLimit: 1600,
    },
    server: {
      port: 3000,
      strictPort: true,
      watch: {
        usePolling: true,
      },
      hmr: true,
      proxy: {
        '/cgi/': {
          target: 'http://127.0.0.1:8000/', // 代理的目标地址
          rewrite: (path) => path.replace(/cgi/, ''), // 路径重写
          changeOrigin: true,
        },
      },
    },
  });
