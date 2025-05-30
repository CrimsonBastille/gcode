import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
    test: {
        globals: true,
        environment: 'node',
        coverage: {
            provider: 'v8',
            reporter: ['text', 'lcov', 'html'],
            include: ['src/**/*.ts'],
            exclude: ['src/**/*.test.ts', 'src/**/*.d.ts'],
            thresholds: {
                branches: 9,
                functions: 50,
                lines: 38,
                statements: 38,
            }
        },
        include: ['tests/**/*.test.ts'],
        setupFiles: [],
        pool: 'threads',
        poolOptions: {
            threads: {
                singleThread: false,
                maxThreads: 4,
                minThreads: 1
            }
        },
        testTimeout: 30000,
        reporters: ['verbose'],
        root: '.',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@vite': path.resolve(__dirname, './src')
        }
    }
}); 