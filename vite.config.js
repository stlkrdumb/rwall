import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import minipic from 'vite-plugin-minipic'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    minipic({
      sharpOptions: {
        png: { quality: 100 },
        webp: { quality: 80 }
      },
      convert: [
        {from: 'png', to: 'webp'}
      ],
      cache: false
    })
  ],
})
