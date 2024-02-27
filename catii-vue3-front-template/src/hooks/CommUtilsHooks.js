import { ref } from 'vue';
/*
 * 接口加载组合API,自动绑定接口Loading状态
 * setup 函数中调用
 * const [loadingState,initiateRequest] = useRequestLoading(request);
 * const { data } = await initiateRequest(payload);
 * loading状态将会自动更新
 */
export const useRequestLoading = (request) => {
  const timer = ref(null);
  const loadingState = ref(false);

  const startRequestLoading = (delay = 30) => {
    loadingState.value = true;
    timer.value = setTimeout(() => {
      loadingState.value = false;
    }, delay * 1000);
  };

  const stopRequestLoading = () => {
    clearTimeout(timer.value);
    loadingState.value = false;
  };

  const initiateRequest = (payload) =>
    new Promise((resolve, reject) => {
      startRequestLoading();
      request(payload)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          stopRequestLoading();
        });
    });
  return [
    loadingState,
    initiateRequest,
    stopRequestLoading,
    startRequestLoading,
  ];
};

/**
 * {ref} formRef节点
 * {stop} 是否阻断async函数
 * **/
export const formCheckHook = (ref, stop = true) =>
  new Promise(async (resolve, reject) => {
    const validate = ref.validate || ref.value.validate;
    const res = await validate();
    if (res === true) {
      resolve(true);
      return;
    }
    if (stop === true) {
      reject(false);
      return;
    }
    resolve(false);
  });
