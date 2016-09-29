/* eslint-env node, mocha */

'use strict';

const chai      = require('chai');
const jsdom     = require('mocha-jsdom');
const sinon     = require('sinon');
const sinonChai = require('sinon-chai');

require('../src/vendor');

global.sandbox = sinon.sandbox.create();
global.sinon   = sinon;

chai.should();
chai.use(sinonChai);
jsdom();

afterEach(() => {
  global.sandbox.restore();
});
