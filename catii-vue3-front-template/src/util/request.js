import axios from 'axios';
import { ElMessage } from 'element-plus';

export const request = axios.create({
  baseURL: process.env.VITE_APP_BASE_URL,
  timeout: 600000,
});

request.interceptors.response.use(
  (res) => {
    // 默认均需要检查 status
    if (!res) {
      ElMessage.error('接口错误');
      return Promise.reject(res);
    }
    return res;
  },
  (err) => {
    let { message: msg } = err;
    if (/^timeout/i.test(msg)) {
      msg = '请求超时';
    } else if (/^network error/i.test(msg)) {
      msg = '网络错误';
    }
    ElMessage.error(msg);
    return Promise.reject(err);
  }
);
