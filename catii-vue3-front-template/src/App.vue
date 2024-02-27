<script setup>
import PageHeader from './components/PageHeader.vue';
import AsideMenu from './components/AsideMenu.vue';
</script>

<template>
  <div class="app-component">
    <t-layout>
      <t-aside :style="{ width: 'auto' }"><AsideMenu></AsideMenu></t-aside>
      <t-layout>
        <t-header><PageHeader></PageHeader></t-header>
        <t-content>
          <div class="page-contetn">
            <router-view></router-view>
          </div>
        </t-content>
        <!-- <t-footer>Footer</t-footer> -->
      </t-layout>
    </t-layout>
  </div>
</template>

<style lang="less">
.app-component {
}
</style>
