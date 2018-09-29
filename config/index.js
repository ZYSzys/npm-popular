'use strict';

module.exports = {
  port: 3000,
  session: {
    secret: 'npm-popular',
    key: 'npm-popular',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/npm-popular'
};
