module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: ['eslint-config-tencent', 'plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    'vue/html-quotes': ['error', 'double'],
    'vue/script-setup-uses-vars': 'error',
    'no-param-reassign': 0,
    'func-style': 0,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: ['vue'],
};
