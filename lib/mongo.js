'use strict'

const mongoose = require('mongoose')
const config = require('../config')

mongoose.connect(config.mongodb)

exports.Package = mongoose.model('Package', {
  name: String,
  url: String
})
