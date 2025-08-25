'use strict';

const {
  defineConfig,
  globalIgnores,
} = require('@eslint/config-helpers');

const preferLet = require('eslint-plugin-prefer-let');
const js = require('@eslint/js');

module.exports = defineConfig([
  js.configs.recommended,
  {
    files: [
      '**/*.js',
      '**/*.cjs',
      '**/*.mjs',
    ],
    languageOptions: {
      ecmaVersion: 2022,
    },
    plugins: {
      'prefer-let': preferLet,
    },
    rules: {
      'prefer-let/prefer-let': 2,

      // recommended override
      'no-empty': [2, { allowEmptyCatch: true }],

      // possible errors
      'no-extra-parens': 2,

      // es6
      'no-var': 2,
      'object-shorthand': 2,

      // best practice
      'curly': 2,
      'eqeqeq': 2,
      'no-alert': 2,
      'no-console': 2,

      // rules
      'no-shadow-restricted-names': 2,

      // style
      'array-bracket-spacing': 2,
      'brace-style': 2,
      'camelcase': 2,
      'comma-dangle': [2, 'always-multiline'],
      'comma-spacing': 2,
      'eol-last': 2,
      'function-paren-newline': [2, 'consistent'],
      'indent': [2, 2, {
        'SwitchCase': 1,
      }],
      'key-spacing': 2,
      'no-extra-semi': 2,
      'no-lonely-if': 2,
      'no-mixed-spaces-and-tabs': 2,
      'no-multiple-empty-lines': [2, { 'max': 1 }],
      'no-spaced-func': 2,
      'no-trailing-spaces': 2,
      'object-curly-spacing': [2, 'always'],
      'one-var': [2, 'never'],
      'padded-blocks': [2, 'never'],
      'quotes': [2, 'single'],
      'semi-spacing': 2,
      'semi': 2,
      'keyword-spacing': 2,
      'space-before-blocks': 2,
      'space-before-function-paren': [2, 'never'],
      'space-in-parens': 2,
      'space-infix-ops': 2,
      'space-unary-ops': 2,
      'spaced-comment': 2,
    },
  },
  globalIgnores([
    '!**/.*',
    'node_modules/',
  ]),
]);
