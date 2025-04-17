import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'cce9-117-243-108-239.ngrok-free.app',
      '*.ngrok-free.app', // This will allow any ngrok-free.app subdomain
    ],
  },
})
