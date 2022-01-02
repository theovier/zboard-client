import { defineConfig } from 'vite'
const path = require('path');
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {
    alias: [
      {find: "@", replacement: path.resolve(__dirname, 'src')}
    ]
  },
  plugins: [vue()]
})
