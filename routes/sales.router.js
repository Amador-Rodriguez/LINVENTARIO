const express = require('express');
const router = express.Router();
const SaleService = require('../services/sales.service');
const service = new SaleService();

router.get('/', async (req, res) => {
  const {
    size
  } = req.query;
  const limit = size || 10;
  const sales = await service.find(limit);
  res.json(sales);
});

router.get('/:id', async (req, res, next) => {
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


router.post('/', async (req, res, next) => {
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

router.patch('/:id', async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const body = req.body;
    const result = await service.update(id, body);
    res.json({
      message: 'actualizacion',
      data: body,
      id,
      result
    });
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const body = req.body;
    const result = await service.replace(id, body);
    res.json({
      message: 'actualizacion completa',
      data: body,
      id,
      result
    });
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

router.delete('/:id', async (req, res) => {
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
