<template>
  <div>
    <h1>this is Test Page {{ pageName }}!</h1>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
const pageName = ref('Two');
onMounted(() => {
  console.log(`load success::this is Test Page ${pageName.value}!`);
});
</script>
