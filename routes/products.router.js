const express = require('express');
//const faker = require('faker');
const router = express.Router();
const ProductService = require('../services/products.service');
const service = new ProductService();

router.get('/', async(req, res) =>{
  const {size} = req.query;
  const limit = size || 10;
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

/* 
//get
router.get('/', async (req, res) => {
  var data = [];
  for (var i = 0; i < 10; i++) {
    data.push
    ([
      {id : i,
      codigo : faker.random.number(),
      nombre : faker.commerce.product(),
      descripcion : faker.commerce.productDescription(),
      marca : "Sabritas",
      categoria : faker.commerce.department(),
      subcategoria : faker.commerce.department(),
      precio : faker.commerce.price(),
      stock : faker.random.number(),
      min_stock : faker.random.number(),
      entry : faker.date.recent(),
      proveedor : faker.company.companyName()}
    ]);
  }

  res.json(data);
})
*/
module.exports = router;
