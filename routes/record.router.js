const express = require('express');
const router = express.Router();
const RecordService = require('../services/record.service');
const validatorHandler = require('./../middlewares/validator.handler');
const service = new RecordService();
const {
  createRecordDto,
  updateRecordDto,
  getRecordId,
} = require('../dtos/record.dto');

router.get('/', async (req, res) => {
  const {
    size
  } = req.query;
  const limit = size || 10;
  const rec = await service.find(limit);
  res.json(rec);
});

router.get(
  '/:id',
  validatorHandler(getRecordId, 'params'),
  async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    const rec = await service.findOne(id);
    res.json({
      message: 'Aqui esta',
      rec: rec,
    });
  } catch (error) {
    next(error);
  }
});

router.get('/usuario/:usuario', async (req, res, next) => {
  try {
    const {
      usuario
    } = req.params;
    const rec = await service.findByName(usuario);
    res.json({
      message: 'Aqui esta',
      rec: rec,
    });
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  validatorHandler(createRecordDto, 'body'),
  async (req, res, next) => {
  const body = req.body;
  try {
    const newAction = await service.create(body);
    res.json({
      'succes': true,
      message: 'creado',
      data: newAction
    });
  } catch (error) {
    next(error);
  }
});


router.patch(
  '/:id',
  validatorHandler(getRecordId, 'params'),
  validatorHandler(updateRecordDto, 'body'),
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
  validatorHandler(getRecordId, 'params'),
  validatorHandler(updateRecordDto, 'body'),
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
  validatorHandler(getRecordId, 'params'),
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
