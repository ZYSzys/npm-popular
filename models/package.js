'use strict';

const Package = require('../lib/mongo').Package;

module.exports = {
  // 获取所有 packages
  getPackages: () => Package.find({})
};
