const inventoryRouter = require('./inventory.router');
const productsRouter = require('./products.router');
const salesRouter = require('./sales.router');
const categoryRouter = require('./category.router');
const personalRouter = require('./personal.router');
const express = require('express');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/inventory', inventoryRouter);
    router.use('/products', productsRouter);
    router.use('/sales', salesRouter);
    router.use('/category', categoryRouter);
    router.use('/personal', personalRouter);

  }

module.exports = routerApi;
