// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                tomato: resolve(__dirname, 'src/tomato/index.html'),
                setlist: resolve(__dirname, 'src/setlist/index.html')


            }
        }
    }
})