const express = require('express');
const router = express.Router();
const PersonalService = require('../services/personal.service');
const service = new PersonalService();

router.get('/', async(req, res) =>{
  const {size} = req.query;
  const limit = size || 10;
  const per = await service.find(limit);
  res.json(per);
});

router.get('/:id', async (req, res, next) => {
  try{
  const {id} = req.params;
  const per = await service.findOne(id);
  res.json({
    success: true,
      message: 'Aqui esta personal por id',
      per: per,
  });
  }catch(error){
    next(error);
  }
});

router.get('/nombre/:nombre', async (req, res, next) => {
  try{
  const {nombre} = req.params;
  const per = await service.findByName(nombre);
  res.json({
      message: 'Aqui esta',
      per: per,
  });
  }catch(error){
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  const body = req.body;
  try{
  const newPers = await service.create(body);
  res.json({
      'succes' : true,
      message: 'creado personal',
      data: newPers,
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
      message: 'actualizacion personal',
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
      message: 'actualizacion personal',
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
      message: 'act personal',
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
      message: 'eliminar personal',
      id,
  });
});

module.exports = router;
