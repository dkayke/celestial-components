import react from '@vitejs/plugin-react-swc'
import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './dist',
    lib: {
      name: 'celestial-components',
      formats: ['es', 'umd'],
      entry: path.resolve(__dirname, 'index.tsx'),
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-component'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    minify: 'esbuild',
    cssMinify: 'lightningcss'
  },
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%'))
    }
  }
})
