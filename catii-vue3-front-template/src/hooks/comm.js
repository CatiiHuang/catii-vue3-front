/**
 * ref => formRef节点
 * stop => 是否阻断async函数
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
