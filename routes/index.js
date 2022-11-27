const inventoryRouter = require('./inventory.router');
const productsRouter = require('./products.router');
const salesRouter = require('./sales.router');
const categoryRouter = require('./category.router');
const personalRouter = require('./personal.router');
const providerRouter = require('./provider.router');
//const usersRouter = require('./users.router');
const loginRouter = require('../services/login.sevice');
const registerRouter = require('../services/register.service');
const profileRouter = require('./users.router');
const recordRouter = require('./record.router');
const ordersRouter = require('./orders.router');
const warehousesRouter = require('./warehouses.router');
const express = require('express');

const verifyToken = require("./../middlewares/verifyToken"); 

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/inventory', inventoryRouter);
    router.use('/products', productsRouter);
    router.use('/sales', salesRouter);
    router.use('/category', categoryRouter);
    router.use('/personal', personalRouter);
    router.use('/provider', providerRouter);
    //router.use('/users', usersRouter);
    router.post('/users/login', loginRouter);
    router.post('/users/register', registerRouter);
    router.get('/profile', verifyToken, profileRouter);
    router.use('/record', recordRouter);
    router.use('/orders', ordersRouter);
    router.use('/warehouses', warehousesRouter);

  }

module.exports = routerApi;
