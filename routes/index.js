const inventoryRouter = require('./inventory.router');
const productsRouter = require('./products.router');
const salesRouter = require('./sales.router');
const categoryRouter = require('./category.router');
const personalRouter = require('./personal.router');
const providerRouter = require('./provider.router');
const usersRouter = require('./users.router');
const recordRouter = require('./record.router');
const express = require('express');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/inventory', inventoryRouter);
    router.use('/products', productsRouter);
    router.use('/sales', salesRouter);
    router.use('/category', categoryRouter);
    router.use('/personal', personalRouter);
    router.use('/provider', providerRouter);
    router.use('/users', usersRouter);
    router.use('/record', recordRouter);

  }

module.exports = routerApi;
