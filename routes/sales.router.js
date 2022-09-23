const express = require('express');
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

router.get('/producto/:producto', async (req, res) => {
    const {producto} = req.params;
    const vent = service.findByName(producto);
    res.json({
        message: 'Aqui esta',
        vent: vent,
    });
  });
  

router.post('/', async (req, res) => {
    const body = req.body;
    const newSale = service.create(body);
    res.json({
        'succes' : true,
        message: 'creado',
        data: newSale,
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
