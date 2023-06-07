import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
import reactRefresh from '@vitejs/plugin-react-refresh';

dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.png'], // Agrega '.png' a las extensiones admitidas
  }
  // plugins: [reactRefresh()],
});

