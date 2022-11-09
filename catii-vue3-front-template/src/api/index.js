import { request } from '@/util/request.js';

export const getSystemInfoApi = (payLoad) =>
  request({
    url: '/api/get_system_info',
    method: 'GET',
    params: payLoad,
  });
