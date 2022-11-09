import axios from 'axios';
import { ElMessage } from 'element-plus';

export const request = axios.create({
  baseURL: process.env.VITE_APP_BASE_URL,
  timeout: 600000,
});

/**
 * 接口返回标准
 * {
 *   data, // 数据
 *   code, // 请求状态 code!==200 会被拦截并报错
 *   msg, // 报错信息
 * }
 */
request.interceptors.response.use(
  (res) => {
    const {
      data,
      data: { code, msg },
    } = res;
    // 默认均需要检查 status
    if (!res || code !== 200) {
      ElMessage.error(msg);
      return Promise.reject(res);
    }
    return data;
  },
  (err) => {
    const { msg, message } = err;
    if (/^timeout/i.test(msg || message)) {
      ElMessage.error('请求超时');
      return;
    }
    if (/^network error/i.test(msg || message)) {
      ElMessage.error('网络错误');
      return;
    }
    ElMessage.error(msg || message);
    return Promise.reject(err);
  }
);
