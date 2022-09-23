const express = require('express');
const router = express.Router();
const ProductService = require('../services/products.service');
const service = new ProductService();

router.get('/', async(req, res) =>{
  const {size} = req.query;
  const limit = size || 10;
  const inv = service.find(limit);
  res.json(inv);
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const inv = service.findOne(id);
  res.json({
      message: 'Aqui esta',
      inv: inv,
  });
});

router.get('/nombre/:nombre', async (req, res) => {
  const {nombre} = req.params;
  const inv = service.findByName(nombre);
  res.json({
      message: 'Aqui esta',
      inv: inv,
  });
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.json({
      'succes' : true,
      message: 'creado',
      data: newProduct
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
