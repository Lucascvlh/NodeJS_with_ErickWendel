module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'class-methods-use-this': 'off', // desativa uma regra que diz que todo método de uma classe precisa usar a palavra this
    'no-param-reassign': 'off', // desativa uma regra que diz que não é permitido receber parâmetro e fazer alterações nele
    camelcase: 'off', // desativa uma regra que diz que toda variável precisa ser escrita no formato camelCase
    'no-unused-vars': ['error', {
      argsIgnorePattern: 'next', vars: 'all', args: 'after-used', ignoreRestSiblings: false,
    }], // não reclamar caso a variável utilizada seja next que é usada pelos middlewares do express
    'no-console': 'warn',
  },
};
