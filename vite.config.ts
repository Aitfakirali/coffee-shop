import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dynamicImport from 'vite-plugin-dynamic-import';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dynamicImport({
            filter: (id) => {
                if (id.includes('@mui/material')) {
                    return false;
                }
                return true;
            },
        }),
    ],
});
