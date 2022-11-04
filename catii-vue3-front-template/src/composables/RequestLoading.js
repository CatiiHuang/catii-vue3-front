import { ref } from 'vue';
/**
 * setup 函数中调用
 * const { loadingState,initiateRequest } = useRequestLoading();
 * const { data } = await initiateRequest(request)
 * loading状态将会自动更新
 */
export default () => {
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

  const initiateRequest = (request) =>
    new Promise((resolve, reject) => {
      startRequestLoading();
      request
        .then((data) => {
          stopRequestLoading();
          resolve(data);
        })
        .catch((err) => {
          stopRequestLoading();
          reject(err);
        });
    });

  return {
    loadingState,
    initiateRequest,
    stopRequestLoading,
    startRequestLoading,
  };
};
