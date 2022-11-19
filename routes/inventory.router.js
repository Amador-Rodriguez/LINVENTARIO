const express = require('express');
const router = express.Router();
const InvService = require('../services/inventory.service');
const validatorHandler = require('./../middlewares/validator.handler');
const service = new InvService();
const {
  createProductDto,
  updateProductDto,
  getProductId,
} = require('../dtos/inventory.dto');

router.get('/', async (req, res, next) => {
  try {
    const { limit } = req.query;
    const filter = req.body;
    const data = await service.findDB(limit, filter);
    res.json({
      success: true,
      message: 'Listo',
      data: data,
    });
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(createProductDto, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await service.findOneDB(id);
      res.json({
        success: true,
        message: 'Listo',
        data: data,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createProductDto, 'body'),
  async (req, res, next) => {
    const body = req.body;
    try {
      const data = await service.createDB(body);
      res.json({
        success: true,
        message: 'Listo',
        data: data,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getProductId, 'params'),
  validatorHandler(updateProductDto, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const data = await service.update(id, body);
      res.json(data);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const resp = await service.delete(id);
  res.json(resp);
});


/* 
router.get('/', async (req, res) => {
  const {
    size
  } = req.query;
  const limit = size || 10;
  const inv = await service.find(limit);
  res.json(inv);
});

router.get(
  '/:id',
  validatorHandler(getProductId, 'params'),
  async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    const inv = await service.findOne(id);
    res.json({
      success: true,
      message: 'Aqui esta',
      inv: inv,
    });
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  validatorHandler(createProductDto, 'body'),
  async (req, res, next) => {
  const body = req.body;
  try {
    const inv = await service.create(body);
    res.json({
      'succes': true,
      message: 'creado',
      data: inv
    });
  } catch (error) {
    next(error);
  }
});

router.patch(
  '/:id',
  validatorHandler(getProductId, 'params'),
  validatorHandler(updateProductDto, 'body'),
   async (req, res) => {
  try {
    const {id} = req.params;
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
  validatorHandler(getProductId, 'params'),
  validatorHandler(updateProductDto, 'body'),
  async (req, res) => {
  try {
    const {id} = req.params;
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
  validatorHandler(getProductId, 'params'),
  async (req, res) => {
  try {const {id} = req.params;
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
*/
module.exports = router;
