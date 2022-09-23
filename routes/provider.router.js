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

router.post('/', async (req, res) => {
  const body = req.body;
  res.json({
      message: 'creado provider',
      data: body,
  });
});

router.patch('/:id', async (req, res) => {
  const {id} = req.params;
  const body = req.body;
  res.json({
      message: 'actualizacion provider',
      data:body,
      id,
  });
});

router.put('/:id', async(req,res) => {
  const {id} = req.params;
  const body = req.body;
  res.json({
      message: 'act provider',
      data: body,
      id,
  });
});

router.put('/:id', async(req, res) => {
  const {id} = req.params;
  res.json({
      message: 'eliminar provider',
      id,
  });
});

module.exports = router;
