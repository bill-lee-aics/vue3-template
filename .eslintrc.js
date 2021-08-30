module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-recommended', '@vue/typescript/recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'no-console': [2, { allow: ['warn', 'error'] }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'prettier/prettier': 2,
  },
};
