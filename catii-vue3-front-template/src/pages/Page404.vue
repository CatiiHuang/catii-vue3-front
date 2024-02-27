<template>
  <div class="not-found-page">
    <div class="content">
      <h1>404 - 页面不存在或正在开发中</h1>
      <p>抱歉，您要访问的页面不存在。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style lang="less" scoped>
.not-found-page {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Helvetica', 'Arial', sans-serif;

  .content {
    text-align: center;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1.2rem;
    }

    p {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
  }
}
</style>
