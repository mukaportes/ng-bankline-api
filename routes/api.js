// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Product = require('../models/users');

// Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/users');

// Return router
module.exports = router;