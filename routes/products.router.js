const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/', async (req, res) => {
    res.json([
        {
          id: 123,
          name: 'Producto 1',
          price: 100,
        },
        {
          id: 111,
          name: 'Producto 2',
          price: 200,
        },
        {
          id: 222,
          name: 'Producto 3',
          price: 300,
        },
      ]);

})

module.exports = router;
