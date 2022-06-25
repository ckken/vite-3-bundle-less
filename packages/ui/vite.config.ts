import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {viteCommonjs} from '@originjs/vite-plugin-commonjs'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const libParams = mode !== 'development' ? '?' : '?dev'
  // console.log('libParams',libParams,command,mode)
  return {
    plugins: [
      react(),
      viteCommonjs(),
      // cssInjectedByJsPlugin(),
    ],
    css: {
      //   preprocessorOptions: {
      //     less: {
      //       javascriptEnabled: true,
      //     },
      //   },
    },
    build: {
      rollupOptions: {
        // chunkFileNames: `[name].js`,
        output: {
          manualChunks: {
            ui: [`src/UI.tsx`],
          },
          chunkFileNames: () => `[name].js`,
        },
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        keepNames: true,
      },
    },
    server: {
      host: true,
      port: 3002,
    },
    preview: {
      host: true,
      port: 3002,
    },
    resolve: {
      alias: [
        {find: 'react/jsx-dev-runtime', replacement: 'react/jsx-dev-runtime'},
        {find: 'react', replacement: `https://esm.sh/react@18.2.0${libParams}`},
        {find: 'react-dom/', replacement: `https://esm.sh/react-dom@18.2.0${libParams}&&path=/`},
      ],
    },
  }
})
