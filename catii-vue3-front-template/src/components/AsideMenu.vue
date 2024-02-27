<template>
  <t-menu
    v-model:expanded="expanded"
    v-model="defaultRoute"
    class="page-aside-menu"
    theme="light"
    :collapsed="collapsed"
    @change="onChange"
  >
    <template #logo>
      <div class="logo-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="none"
          viewBox="0 0 32 32"
          class="tdesign-starter-side-nav-logo-t-logo"
        >
          <g clip-path="url(#a)">
            <path
              fill="url(#b)"
              d="M9.14 8.252h-5.6a.561.561 0 0 1-.553-.66l.89-5.146A.544.544 0 0 1 4.414 2h5.792L9.14 8.252Z"
            ></path>
            <path
              fill="url(#c)"
              d="M13.03 21.473H6.778l2.34-13.226h6.252l-2.34 13.226Z"
            ></path>
            <path
              fill="url(#d)"
              d="M11.47 27.725H6.343a.566.566 0 0 1-.553-.656l.994-5.583h6.238l-1.025 5.793a.543.543 0 0 1-.525.445Z"
            ></path>
            <path
              fill="url(#e)"
              d="M26.666 8.252H9.141l1.105-6.239H27.58a.566.566 0 0 1 .552.66L27.22 7.82a.535.535 0 0 1-.553.432Z"
            ></path>
          </g>
          <defs>
            <linearGradient
              id="b"
              x1="2.717"
              x2="10.062"
              y1="5.128"
              y2="4.981"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0062FF"></stop>
              <stop offset=".26" stop-color="#006AFF"></stop>
              <stop offset=".68" stop-color="#0081FF"></stop>
              <stop offset="1" stop-color="#0097FF"></stop>
            </linearGradient>
            <linearGradient
              id="c"
              x1="12.383"
              x2="9.123"
              y1="7.623"
              y2="22.042"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0097FF"></stop>
              <stop offset=".32" stop-color="#0081FF"></stop>
              <stop offset=".74" stop-color="#006AFF"></stop>
              <stop offset="1" stop-color="#0062FF"></stop>
            </linearGradient>
            <linearGradient
              id="d"
              x1="5.631"
              x2="12.858"
              y1="27.363"
              y2="21.473"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#009EFF"></stop>
              <stop offset=".31" stop-color="#00A3FF"></stop>
              <stop offset=".71" stop-color="#00B3FF"></stop>
              <stop offset="1" stop-color="#00C3FF"></stop>
            </linearGradient>
            <linearGradient
              id="e"
              x1="8.849"
              x2="27.94"
              y1="5.128"
              y2="4.746"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".03" stop-color="#ECFFFE"></stop>
              <stop offset=".19" stop-color="#AFF1D9"></stop>
              <stop offset=".34" stop-color="#79E5B9"></stop>
              <stop offset=".49" stop-color="#4EDB9F"></stop>
              <stop offset=".63" stop-color="#2CD48A"></stop>
              <stop offset=".77" stop-color="#14CE7C"></stop>
              <stop offset=".89" stop-color="#05CB73"></stop>
              <stop offset="1" stop-color="#00CA70"></stop>
            </linearGradient>
            <clipPath id="a">
              <path fill="#fff" d="M2.978 2h25.14v25.72H2.979z"></path>
            </clipPath>
          </defs>
        </svg>
        <span v-if="!collapsed" class="logo-label">Catii-Vue3</span>
      </div>
    </template>

    <t-menu-item value="/page-one">
      <template #icon>
        <ChatBubbleSmileIcon />
      </template>
      <span>Page One</span>
    </t-menu-item>

    <t-menu-item value="/page-two">
      <template #icon>
        <ImageSearchIcon />
      </template>
      <span>Page Two</span>
    </t-menu-item>

    <template #operations>
      <t-button variant="text" shape="square" @click="changeCollapsed">
        <template #icon><t-icon name="view-list" /></template>
      </t-button>
    </template>
  </t-menu>
</template>

<script setup>
import { ChatBubbleSmileIcon, ImageSearchIcon } from 'tdesign-icons-vue-next';
import { useRoute, useRouter } from 'vue-router';
import { ref, watch } from 'vue';

const route = useRoute();
const router = useRouter();
const expanded = ref(['/chat-record', '/service']);
const collapsed = ref(false);
const defaultRoute = ref(window.location.pathname);

const changeCollapsed = () => {
  collapsed.value = !collapsed.value;
};

const onChange = (v) => {
  router.push(v);
};

watch(
  () => route.path,
  (v) => {
    defaultRoute.value = v;
  }
);
</script>

<style lang="less" scoped>
.page-aside-menu {
  min-height: 100vh;
  .logo-wrap {
    font-size: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
    .logo-label {
      margin-left: 20px;
    }
  }
}
</style>
