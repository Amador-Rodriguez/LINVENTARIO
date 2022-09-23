const express = require('express');
const router = express.Router();
const PersonalService = require('../services/personal.service');
const service = new PersonalService();

router.get('/', async(req, res) =>{
  const {size} = req.query;
  const limit = size || 10;
  const per = service.find(limit);
  res.json(per);
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const per = service.findOne(id);
  res.json({
      message: 'Aqui esta personal por id',
      per: per,
  });
});

router.get('/nombre/:nombre', async (req, res) => {
  const {nombre} = req.params;
  const per = service.findByName(nombre);
  res.json({
      message: 'Aqui esta',
      per: per,
  });
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newPers = service.create(body);
  res.json({
      'succes' : true,
      message: 'creado personal',
      data: newPers,
  });
});

router.patch('/:id', async (req, res) => {
  const {id} = req.params;
  const body = req.body;
  const result = service.update(id,body);
  res.json({
      message: 'actualizacion personal',
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
      message: 'act personal',
      data: body,
      id,
      result
  });
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
