import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// See https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: true,
        open: true,
        port: 5173,
    },
    plugins: [
        react({
            jsxImportSource: "@emotion/react",
            babel: {
                plugins: ["@emotion/babel-plugin"],
            },
        })
    ],
    base: '/random-cards/',
    build: {
        outDir: 'docs',
    },
})
