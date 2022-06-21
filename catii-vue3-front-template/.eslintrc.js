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
    'vue/html-quotes': ['error', 'double'],
    'vue/script-setup-uses-vars': 'error',
    'vue/require-default-prop': 'off',
    'vue/comment-directive': 'off',
    'no-param-reassign': 0,
    'func-style': 0,
    'vue/require-explicit-emits': 0,
    'vue/require-prop-types': 0,
    'vue/attribute-hyphenation': 0,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: ['vue'],
};
