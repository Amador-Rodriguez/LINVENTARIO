const express = require('express');
const router = express.Router();
const SaleService = require('../services/sales.service');
const validatorHandler = require('./../middlewares/validator.handler');
const service = new SaleService();
const {
  createSalesDto,
  updateSalesDto,
  getSalesId,
} = require('../dtos/sales.dto');

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
  validatorHandler(getSalesId, 'params'),
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
  validatorHandler(createSalesDto, 'body'),
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
  validatorHandler(getSalesId, 'params'),
  validatorHandler(updateSalesDto, 'body'),
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
  const sales = await service.find(limit);
  res.json(sales);
});

router.get(
  '/:id',
  validatorHandler(getSalesId, 'params'),
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

router.get('/producto/:producto', async (req, res, next) => {
  try {
    const {
      producto
    } = req.params;
    const vent = await service.findByName(producto);
    res.json({
      message: 'Aqui esta',
      vent: vent,
    });
  } catch (error) {
    next(error);
  }
});


router.post(
  '/',
  validatorHandler(createSalesDto, 'body'),
  async (req, res, next) => {
  const body = req.body;
  try {
    const newSale = await service.create(body);
    res.json({
      'succes': true,
      message: 'creado',
      data: newSale,
    });
  } catch (error) {
    next(error);
  }
});

router.patch(
  '/:id',
  validatorHandler(getSalesId, 'params'),
  validatorHandler(updateSalesDto, 'body'),
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
  validatorHandler(getSalesId, 'params'),
  validatorHandler(updateSalesDto, 'body'),
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
  validatorHandler(getSalesId, 'params'),
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
*/

module.exports = router;
