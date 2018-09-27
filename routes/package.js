'use strict'

const express = require('express')
const router = express.Router()

const packageModel = require('../models/package')

/* GET home page. */
router.get('/', function(req, res, next) {
  packageModel.getPackages()
    .then((pkgs) => {
      res.render('index', { title: pkgs[0].name });
    })
});

module.exports = router;
