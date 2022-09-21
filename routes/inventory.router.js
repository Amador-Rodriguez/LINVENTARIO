const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/', async (req, res) => {
    res.json({
        id: '123',
        name: 'Prueba',
        price: 10,
      });

})

module.exports = router;
