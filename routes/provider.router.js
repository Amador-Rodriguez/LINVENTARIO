const express = require('express');
const router = express.Router();
const ProviderService = require('../services/provider.service');
const service = new ProviderService();

router.get('/', async(req, res) =>{
  const {size} = req.query;
  const limit = size || 10;
  const pro = service.find(limit);
  res.json(pro);
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const pro = service.findOne(id);
  res.json({
      message: 'Aqui esta provider por id',
      pro: pro,
      id,

  });
});

router.get('/nombre/:nombre', async (req, res) => {
  const {nombre} = req.params;
  const pro = service.findByName(nombre);
  res.json({
      message: 'Aqui esta',
      pro: pro,
  });
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProvider = service.create(body);
  res.json({
      'succes' : true,
      message: 'creado provider',
      data: newProvider,
  });
});

router.patch('/:id', async (req, res) => {
  const {id} = req.params;
  const body = req.body;
  const result = service.update(id,body);
  res.json({
      message: 'actualizacion provider',
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
      message: 'act provider',
      data: body,
      id,
      result
  });
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
