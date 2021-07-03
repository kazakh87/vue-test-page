import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default { ...defineConfig({
  publicDir: "/vue-test-page/",
  
  plugins: [vue()]
}),
publicPath: '/vue-test-page/'
}
