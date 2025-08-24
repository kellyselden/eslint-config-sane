'use strict';

const {
  defineConfig
} = require('eslint/config');

const saneNode = require('eslint-config-sane-node');

module.exports = defineConfig([
  saneNode
]);
