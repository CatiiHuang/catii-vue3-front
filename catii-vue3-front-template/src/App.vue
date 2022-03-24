<script setup></script>

<template>
  <div class="app-component">
    <h1 class="page-title">
      Project Init Success!!!
      <el-result icon="success" title="Success" sub-title="Load Element-plus"> </el-result>
      <div>
        <el-button type="primary"> <router-link to="/one">page one</router-link> </el-button>
        <el-button type="success" t><router-link to="/two">page two</router-link> </el-button>
      </div>
    </h1>
    <div class="page-contetn">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less">
.app-component {
  text-align: center;

  h1 {
    margin-top: 7.5vh;
  }
  .page-contetn {
    height: 200px;
    width: 100%;
    border: 1px solid #ccc;
    margin: 0 20px;
  }
}
</style>
