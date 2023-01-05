import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://agustin-ollin.github.io/React-rick-and-morty/",
  plugins: [react()],
})
