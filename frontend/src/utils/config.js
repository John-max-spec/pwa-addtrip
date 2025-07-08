// 判断当前环境是否是生产环境
const isProduction = import.meta.env.MODE === 'production';

// 动态设置 BASE_URL
export const BASE_URL = isProduction
  ? 'https://your-production-domain.com' // 替换为生产环境使用的 URL
  : 'http://localhost:3613'; // 本地开发环境使用的 URL