import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    base: '/',
    plugins: [react()],
    server: {
        open: true,
        port: 3000,
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, './src'),
        },
    },
    optimizeDeps: {
        force: true,
    },
    assetsInclude: ['**/*.md'], // Treat .md files as assets
    build: {
        outDir: 'build',
    },
})
