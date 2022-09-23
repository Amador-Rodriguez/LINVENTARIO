const express = require('express');
const faker = require('faker');
const router = express.Router();
const SaleService = require('../services/sales.service');
const service = new SaleService();

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
