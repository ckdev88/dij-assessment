import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults, defineConfig } from 'vitest/config'
import { setupVitest } from '@testing-library/react/pure'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        setupFiles: ['./src/setupTests.ts'],
        globals: true, // Enable global variables like `vi`
        environment: 'jsdom', // Use jsdom for testing
    },
})
