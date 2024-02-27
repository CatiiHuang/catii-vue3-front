<template>
  <div class="page-header-wrap">
    <t-head-menu theme="light">
      <template #operations>
        <t-button variant="text" shape="square">
          <template #icon><t-icon name="search" /></template>
        </t-button>
        <t-button variant="text" shape="square">
          <template #icon><t-icon name="mail" /></template>
        </t-button>
        <t-button variant="text" shape="square">
          <template #icon><t-icon name="user" /></template>
        </t-button>
        <t-button variant="text" shape="square">
          <template #icon><t-icon name="ellipsis" /></template>
        </t-button>
      </template>
    </t-head-menu>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.page-header-wrap {
  padding-right: 20px;
}
</style>
