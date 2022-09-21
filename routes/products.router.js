const express = require('express');
const faker = require('faker');
const router = express.Router();

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

module.exports = router;
