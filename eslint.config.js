const globals = require('globals');

module.exports = [
  {
    languageOptions: {
      ecmaVersion: 12,
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.node,
        ...globals.jest
      }
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
  }
];
