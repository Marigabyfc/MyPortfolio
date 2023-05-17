import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
import reactRefresh from '@vitejs/plugin-react-refresh';

dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // plugins: [reactRefresh()],
})

