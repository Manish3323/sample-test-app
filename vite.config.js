import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
const testDeps =
  process.env.NODE_ENV === 'test'
    ? [
        '@testing-library/react',
        '@testing-library/user-event',
        'chai',
        '@testing-library/react-hooks/dom'
      ]
    : []
export default defineConfig({
  server: {
    port: 9000
  },
  base: `./`,
  optimizeDeps: {
    include: testDeps
  },
  build: {
    sourcemap: 'inline',
    rollupOptions: {
      input: ['./index.html']
    }
  },
  plugins: [reactRefresh()]
})
