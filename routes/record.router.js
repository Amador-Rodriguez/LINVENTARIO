const express = require('express');
const router = express.Router();
const ProductService = require('../services/products.service');
const service = new ProductService();

router.get('/', async(req, res) =>{
  const {size} = req.query;
  const limit = size || 5;
  const rec = service.find(limit);
  res.json(rec);
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const rec = service.findOne(id);
  res.json({
      message: 'Aqui esta',
      rec: rec,
  });
});

router.get('/usuario/:usuario', async (req, res) => {
  const {usuario} = req.params;
  const rec = service.findByName(usuario);
  res.json({
      message: 'Aqui esta',
      rec: rec,
  });
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newAction = service.create(body);
  res.json({
      'succes' : true,
      message: 'creado',
      data: newAction
  });
});

router.patch('/:id', async (req, res) => {
  const {id} = req.params;
  const body = req.body;
  const result = service.update(id,body);
  res.json({
      message: 'actualizacion',
      data:body,
      id,
      result
  });
});

router.put('/:id', async(req,res) => {
  const {id} = req.params;
  const body = req.body;
  const result = service.replace(id,body);
  res.json({
      message: 'actualizacion completa',
      data: body,
      id,
      result
  });
});

router.delete('/:id', async(req, res) => {
  const {id} = req.params;
  service.delete(id);
  res.json({
      message: 'eliminar',
      id,
  });
});

module.exports = router;
