const express = require('express');
const router = express.Router();
const UserService = require('../services/users.service');
const service = new UserService();

router.get('/', async(req, res) =>{
    const {size} = req.query;
    const limit = size || 5;
    const sales = service.find(limit);
    res.json(sales);
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const sale = service.findOne(id);
    res.json({
        message: 'Aqui esta',
        sale: sale,
    });
});

router.get('/nombre/:nombre', async (req, res) => {
    const {nombre} = req.params;
    const us = service.findByName(nombre);
    res.json({
        message: 'Aqui esta',
        us: us,
    });
  });

router.post('/', async (req, res) => {
    const body = req.body;
    const newUser = service.create(body);
    res.json({
        'succes' : true,
        message: 'creado',
        data: newUser,
    });
});

router.patch('/:id', async (req, res) => {
    const {id} = req.params;
    const body = req.body;
    const result = service.update(id,body);
    res.json({
        message: 'actualizacion',
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
        message: 'actualizacion completa',
        data: body,
        id,
        result
    });
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