'use strict'

var express = require('express');
var ProductService = require('../services/products.service'); // ./services/products.service

var router = express.Router();

router.post('/', ProductService.createDB);

router.get('/search', ProductService.findDB);
/* 
router.get('/products/:id', ProductService.findOneDB); 

router.delete('/products/:id', ProductService.deleteDB); */

module.exports = router;