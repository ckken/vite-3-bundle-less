import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'


// https://vitejs.dev/config/
export default defineConfig(({ command, mode })=>{
  const libParams = mode!=='development'?'?no-requirev&no-check':'?dev&no-requirev&no-check'
  console.log('libParams',libParams,command,mode)
  return {
    plugins: [react(),viteCommonjs()],
    server:{
      host:true,
      port:3001
    },
    preview:{
      host:true,
      port:3001
    },
    resolve:{
      alias:[
        { find: 'react/jsx-dev-runtime', replacement: 'react/jsx-dev-runtime' },
        { find: 'react', replacement: `https://esm.sh/react@18.2.0${libParams}` },
        { find: 'react-dom/', replacement: `https://esm.sh/react-dom@18.2.0${libParams}&&path=/` },
        
      ]
    }
  }
})
