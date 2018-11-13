'use strict';

const mongoose = require('mongoose');
const config = require('../config');

mongoose.connect(
  config.mongodb,
  { useNewUrlParser: true }
);

exports.Package = mongoose.model('Package', {
  name: String,
  url: String,
  homepage: String,
  github: String
});
