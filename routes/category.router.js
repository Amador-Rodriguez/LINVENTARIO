const express = require('express');
const router = express.Router();
const CategoryService = require('../services/category.service');
const service = new CategoryService();

router.get('/', async(req, res) =>{
  const {size} = req.query;
  const limit = size || 5;
  const cat = service.find(limit);
  res.json(cat);
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const cat = service.findOne(id);
  res.json({
      message: 'Aqui esta category por id',
      cat: cat,
  });
});

router.get('/nombre/:nombre', async (req, res) => {
  const {nombre} = req.params;
  const cat = service.findByName(nombre);
  res.json({
      message: 'Aqui esta',
      cat: cat,
  });
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newCategory = service.create(body);
  res.json({
      'succes' : true,
      message: 'creado category',
      data: newCategory,
  });
});

router.patch('/:id', async (req, res) => {
  const {id} = req.params;
  const body = req.body;
  const result = service.update(id,body);
  res.json({
      message: 'actualizacion category',
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
      message: 'act category',
      data: body,
      id,
      result
  });
});

router.put('/:id', async(req, res) => {
  const {id} = req.params;
  service.delete(id);
  res.json({
      message: 'eliminar category',
      id,
  });
});

module.exports = router;
