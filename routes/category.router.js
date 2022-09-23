const express = require('express');
const router = express.Router();
const CategoryService = require('../services/category.service');
const service = new CategoryService();

router.get('/', async(req, res) =>{
  const {size} = req.query;
  const limit = size || 5;
  const cat = await service.find(limit);
  res.json(cat);
});

router.get('/:id', async (req, res, next) => {
  try{
  const {id} = req.params;
  const cat = await service.findOne(id);
  res.json({
      message: 'Aqui esta category por id',
      cat: cat,
  });
  } catch(error){
    next(error);
  }
});

router.get('/nombre/:nombre', async (req, res, next) => {
  try{
  const {nombre} = req.params;
  const cat = await service.findByName(nombre);
  res.json({
      message: 'Aqui esta',
      cat: cat,
  });
  } catch(error){
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  const body = req.body;
  try{
  const newCategory = await service.create(body);
  res.json({
      'succes' : true,
      message: 'creado category',
      data: newCategory,
  });
  }catch(error){
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try{
  const {id} = req.params;
  const body = req.body;
  const result = await service.update(id,body);
  res.json({
      message: 'actualizacion category',
      data:body,
      id,
      result
  });
  }catch(error){
    next(error);
  }
});

router.patch('/:id', async (req, res) => {
  try{
  const {id} = req.params;
  const body = req.body;
  const result = await service.update(id,body);
  res.json({
      message: 'actualizacion category',
      data:body,
      id,
      result
  });
  }catch(error){
    res.status(404).json({
      message: error.message
    });
  }
});

router.put('/:id', async(req,res) => {
  try{
  const {id} = req.params;
  const body = req.body;
  const result = await service.replace(id,body);
  res.json({
      message: 'act category',
      data: body,
      id,
      result
  });
  }catch(error){
    res.status(404).json({
      message: error.message
    });
  }
});

router.delete('/:id', async(req, res) => {
  const {id} = req.params;
  service.delete(id);
  res.json({
      message: 'eliminar category',
      id,
  });
});

module.exports = router;
