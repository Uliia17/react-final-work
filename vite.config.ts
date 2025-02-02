// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//   ],
// })
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/auth': {
        target: 'https://dummyjson.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
