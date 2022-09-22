const express = require('express');
const router = express.Router();
const InvService = require('../services/inventory.service');
const service = new InvService();

router.get('/', async(req, res) =>{
  const {size} = req.query;
  const limit = size || 5;
  const inv = service.find(limit);
  res.json(inv);
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const inv = service.findOne(id);
  res.json({
      message: 'Aqui esta',
      inv: inv,
  });
});

router.post('/', async (req, res) => {
  const body = req.body;
  res.send({
      message: 'creado',
      data: body,
  });
});

router.patch('/:id', async (req, res) => {
  const {id} = req.params;
  const body = req.body;
  res.json({
      message: 'actualizacion',
      data:body,
      id,
  });
});

router.put('/:id', async(req,res) => {
  const {id} = req.params;
  const body = req.body;
  res.json({
      message: 'act',
      data: body,
      id,
  });
});

router.put('/:id', async(req, res) => {
  const {id} = req.params;
  res.json({
      message: 'eliminar',
      id,
  });
});

module.exports = router;
