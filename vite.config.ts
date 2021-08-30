import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS(), vueJsx()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
});
