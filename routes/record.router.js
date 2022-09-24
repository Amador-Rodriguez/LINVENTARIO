const express = require('express');
const router = express.Router();
const ProductService = require('../services/record.service');
const service = new ProductService();

router.get('/', async (req, res) => {
  const {
    size
  } = req.query;
  const limit = size || 10;
  const rec = await service.find(limit);
  res.json(rec);
});

router.get('/:id', async (req, res, next) => {
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

router.post('/', async (req, res, next) => {
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
