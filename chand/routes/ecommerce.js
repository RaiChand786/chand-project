const express = require('express');
const router = express.Router();
const ecommerceController = require('../controllers/ecommerceController');

router.get('/', ecommerceController.getShop);

module.exports = router;
