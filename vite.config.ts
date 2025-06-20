// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/browser-extension-manager-reactJs/', // 👈 set this to your repo name with slashes
})
