const express = require('express');
const router = express.Router();
const UserService = require('../services/users.service');
const validatorHandler = require('./../middlewares/validator.handler');
const service = new UserService();
const {
  createUsersDto,
  updateUsersDto,
  getUsersId,
} = require('../dtos/users.dto');

router.get('/', async (req, res) => {
  const {
    size
  } = req.query;
  const limit = size || 10;
  const sales = await service.find(limit);
  res.json(sales);
});

router.get(
  '/:id',
  validatorHandler(getUsersId, 'params'),
  async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    const sale = await service.findOne(id);
    res.json({
      message: 'Aqui esta',
      sale: sale,
    });
  } catch (error) {
    next(error);
  }
});

router.get('/nombre/:nombre', async (req, res, next) => {
  try {
    const {
      nombre
    } = req.params;
    const us = await service.findByName(nombre);
    res.json({
      message: 'Aqui esta',
      us: us,
    });
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  validatorHandler(createUsersDto, 'body'),
  async (req, res, next) => {
  const body = req.body;
  try {
    const newUser = await service.create(body);
    res.json({
      'succes': true,
      message: 'creado',
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
});

router.patch(
  '/:id',
  validatorHandler(getUsersId, 'params'),
  validatorHandler(updateUsersDto, 'body'),
  async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const body = req.body;
    const result = await service.update(id, body);
    res.json({
      message: 'actualizacion',
      data: result,
      id,

    });
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

router.put(
  '/:id',
  validatorHandler(getUsersId, 'params'),
  validatorHandler(updateUsersDto, 'body'),
  async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const body = req.body;
    const result = await service.replace(id, body);
    res.json({
      message: 'actualizacion completa',
      data: result,
      id,

    });
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

router.delete(
  '/:id',
  validatorHandler(getUsersId, 'params'),
  async (req, res) => {
  try {
    const {
      id
    } = req.params;
    service.delete(id);
    res.json({
      message: 'eliminar',
      id,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }


});


module.exports = router;
