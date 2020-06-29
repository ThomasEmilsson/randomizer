module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
  },
  parser: 'babel-eslint',
  env: {
    node: true,
    es6: true,
  },
  extends: ['standard', 'prettier', 'prettier/standard'],
  plugins: ['prettier'],
  rules: {
    'promise/catch-or-return': 'error',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
      },
    ],
  },
}
