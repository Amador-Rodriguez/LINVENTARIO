const express = require('express');
const router = express.Router();
const WarehouseService = require('../services/warehouses.service');
const validatorHandler = require('./../middlewares/validator.handler');
const service = new WarehouseService();
const {
  createWarehousesDto,
  updateWarehousesDto,
  getWarehousesId,
} = require('../dtos/warehouses.dto');

router.get('/', async(req, res) =>{
  const {size} = req.query;
  const limit = size || 20;
  const inv = await service.find(limit);
  res.json(inv);
});

router.get(
  '/:id',
  validatorHandler(getWarehousesId, 'params'),
  async (req, res, next) => {
  try{
    const { id } = req.params;
    const wh = await service.findOne(id);
    res.json({
      success: true,
        message: 'Aqui esta',
        data: wh,
    });
  }catch (error) {
    next(error);
  }

});


router.get('/nombre/:nombre', async (req, res, next) => {
  try{
  const {nombre} = req.params;
  const wh = await service.findByName(nombre);
  res.json({
      message: 'Aqui esta',
      wh: wh,
  });
  }catch(error){
    next(error);
  }
});

router.post(
  '/',
  validatorHandler(createWarehousesDto, 'body'),
  async (req, res, next) => {
  const body = req.body;
  try{
  const newWarehouse = await service.create(body);
  res.json({
      'succes' : true,
      message: 'creado',
      data: newWarehouse
  });
  }catch(error){
    next(error);
  }
});

router.put(
  '/:id',
  validatorHandler(getWarehousesId, 'params'),
  validatorHandler(updateWarehousesDto, 'body'),
  async (req, res, next) => {
  try{
  const {id} = req.params;
  const body = req.body;
  const result = await service.update(id,body);
  res.json({
      message: 'actualizacion',
      data:result,
      id,

  });
  }catch(error) {
    next(error);
  }
});
/* */
router.patch(
  '/:id',
  validatorHandler(getWarehousesId, 'params'),
  validatorHandler(updateWarehousesDto, 'body'),
  async (req, res) => {
  try{
  const {id} = req.params;
  const body = req.body;
  const result = await service.update(id,body);
  res.json({
      message: 'actualizacion',
      data:result,
      id,

  });
  }catch(error) {
    res.status(404).json({
      message: error.message
    });
  }
});

router.put(
  '/:id',
  validatorHandler(getWarehousesId, 'params'),
  validatorHandler(updateWarehousesDto, 'body'),
  async(req,res) => {
  try{
  const {id} = req.params;
  const body = req.body;
  const result = await service.replace(id,body);
  res.json({
      message: 'actualizacion completa',
      data: result,
      id,

  });
  }catch(error){
    res.status(404).json({
      message: error.message
    });
  }
});

router.delete(
  '/:id',
  validatorHandler(getWarehousesId, 'params'),
  async(req, res) => {
  const {id} = req.params;
  try{
    service.delete(id);
    res.json({
        message: 'eliminar',
        id,
    });
  }
  catch(error){
    res.status(404).json({
      message: error.message
    });
  }

});

module.exports = router;
