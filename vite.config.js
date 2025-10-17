import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    https: false,  // simple self-signed certificate
    host: true,   // allows access via LAN IP
  },
})
