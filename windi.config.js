import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  attributify: true, // 开启属性化支持
  theme: {
    extend: {
      colors: {
        primary: '#42b883',
      },
    },
  },
  plugins: [
    require('windicss/plugin/scroll-snap'),
  ],
});
