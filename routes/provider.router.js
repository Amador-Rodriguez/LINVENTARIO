const express = require('express');
const router = express.Router();
const ProviderService = require('../services/provider.service');
const service = new ProviderService();

router.get('/', async(req, res) =>{
  const {size} = req.query;
  const limit = size || 10;
  const pro = await service.find(limit);
  res.json(pro);
});

router.get('/:id', async (req, res, next) => {
  try{
  const {id} = req.params;
  const pro = await service.findOne(id);
  res.json({
      message: 'Aqui esta provider por id',
      pro: pro,
      id,

  });
  }catch(error){
    next(error);
  }
});

router.get('/nombre/:nombre', async (req, res, next) => {
  try{
  const {nombre} = req.params;
  const pro = await service.findByName(nombre);
  res.json({
      message: 'Aqui esta',
      pro: pro,
  });
  }catch(error){
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  const body = req.body;
  try{
  const newProvider = await service.create(body);
  res.json({
      'succes' : true,
      message: 'creado provider',
      data: newProvider,
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
      message: 'actualizacion provider',
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
      message: 'actualizacion provider',
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
      message: 'act provider',
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
      message: 'eliminar provider',
      id,
  });
});

module.exports = router;
