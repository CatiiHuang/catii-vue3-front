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
  });
