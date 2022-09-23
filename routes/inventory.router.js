const express = require('express');
const router = express.Router();
const InvService = require('../services/inventory.service');
const service = new InvService();

router.get('/', async(req, res) =>{
  const {size} = req.query;
  const limit = size || 10;
  const inv = await service.find(limit);
  res.json(inv);
});

router.get('/:id', async (req, res, next) => {
  try{
  const {id} = req.params;
  const inv = await service.findOne(id);
  res.json({
      success: true,
      message: 'Aqui esta',
      inv: inv,
  });
  }catch(error){
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  const body = req.body;
  try{
  const newProduct = await service.create(body);
  res.json({
      'succes' : true,
      message: 'creado',
      data: newProduct
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
      message: 'actualizacion',
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
      message: 'actualizacion',
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
      message: 'actualizacion completa',
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
      message: 'eliminar',
      id,
  });
});

module.exports = router;
