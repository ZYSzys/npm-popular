'use strict';

module.exports = {
  port: 3000,
  session: {
    secret: 'npm-popular',
    key: 'npm-popular',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://zyszys:zys123@ds119323.mlab.com:19323/npm-popular' // mongodb://localhost:27017/npm-popular'
};
