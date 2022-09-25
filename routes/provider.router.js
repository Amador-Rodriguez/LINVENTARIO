const express = require('express');
const router = express.Router();
const ProviderService = require('../services/provider.service');
const validatorHandler = require('./../middlewares/validator.handler');
const service = new ProviderService();
const {
  createProviderDto,
  updateProviderDto,
  getProviderId,
} = require('../dtos/provider.dto');

router.get('/', async (req, res) => {
  const {
    size
  } = req.query;
  const limit = size || 20;
  const pro = await service.find(limit);
  res.json(pro);
});

router.get(
  '/:id',
  validatorHandler(getProviderId, 'params'),
  async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    const pro = await service.findOne(id);
    res.json({
      message: 'Aqui esta provider por id',
      pro: pro,
      id,

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
    const pro = await service.findByName(nombre);
    res.json({
      message: 'Aqui esta',
      pro: pro,
    });
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  validatorHandler(createProviderDto, 'body'),
  async (req, res, next) => {
  const body = req.body;
  try {
    const newProvider = await service.create(body);
    res.json({
      'succes': true,
      message: 'creado provider',
      data: newProvider,
    });
  } catch (error) {
    next(error);
  }
});

router.patch(
  '/:id',
  validatorHandler(getProviderId, 'params'),
  validatorHandler(updateProviderDto, 'body'),
  async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const body = req.body;
    const result = await service.update(id, body);
    res.json({
      message: 'actualizacion provider',
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
  validatorHandler(getProviderId, 'params'),
  validatorHandler(updateProviderDto, 'body'),
  async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const body = req.body;
    const result = await service.replace(id, body);
    res.json({
      message: 'act provider',
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
  validatorHandler(getProviderId, 'params'),
  async (req, res) => {
  try {
    const {
      id
    } = req.params;
    service.delete(id);
    res.json({
      message: 'eliminar provider',
      id,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }

});

module.exports = router;
