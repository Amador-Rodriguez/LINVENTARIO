const inventoryRouter = require('./inventory.router');
const productsRouter = require('./products.router');
const salesRouter = require('./sales.router');
const express = require('express');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/inventory', inventoryRouter);
    router.use('/products', productsRouter);
    router.use('/sales', salesRouter);

  }

module.exports = routerApi;