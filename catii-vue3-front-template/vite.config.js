import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
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
      vueJsx({}),
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
        '/api/': {
          target: 'http://127.0.0.1:8000/', // 代理的目标地址
          rewrite: (path) => path.replace(/api/, ''), // 路径重写
          headers: {},
          changeOrigin: true,
        },
      },
    },
  });
