module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    // 代码风格规则
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    // 最佳实践规则
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'no-undef': 'error'
  }
};
