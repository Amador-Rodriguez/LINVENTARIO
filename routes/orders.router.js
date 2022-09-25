const express = require('express');
const router = express.Router();
const OrderService = require('../services/orders.service');
const order = new OrderService();

router.get('/', async(req, res) =>{
  const {size} = req.query;
  const limit = size || 20;
  const inv = await service.find(limit);
  res.json(inv);
});

router.get('/:id', async (req, res, next) => {
  try{
    const { id } = req.params;
    const order = await service.findOne(id);
    res.json({
      success: true,
        message: 'Aqui esta',
        data: order,
    });
  }catch (error) {
    next(error);
  }

});


router.get('/nombre/:nombre', async (req, res, next) => {
  try{
  const {nombre} = req.params;
  const order = await service.findByName(nombre);
  res.json({
      message: 'Aqui esta',
      order: order,
  });
  }catch(error){
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  const body = req.body;
  try{
  const newOrder = await service.create(body);
  res.json({
      'succes' : true,
      message: 'creado',
      data: newOrder
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
  }catch(error) {
    next(error);
  }
});
/* */
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
  }catch(error) {
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
