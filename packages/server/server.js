/* eslint-disable import/no-extraneous-dependencies */

require('@babel/register')({ presets: ['@babel/env'] });
require('@babel/polyfill');

require('./app');
