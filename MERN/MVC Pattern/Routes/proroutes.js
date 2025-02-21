const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const {getpro,updateproducts,createproducts,delpro}= require('../Controller/productController');

router.get('/products',getpro);
router.post('/products',createproducts);
router.put('/products/:id',updateproducts);
router.delete('/products/:id',delpro);






model.exports = router;