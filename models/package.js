'use strict'

// const Package = require('../lib/mongo').Package
const getPkgs = require('npm-popular-modules')

module.exports = {
  // 获取所有 packages
  getPackages: async () => {
    return await getPkgs()
  }
}
