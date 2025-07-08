import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    // 动态 base 配置（可根据 GitHub Pages 或生产部署路径调整）
    base: mode === 'production' ? '/todo/' : '/',
  };
});