const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('layouts/main', { title: 'Home', body: 'index' });
});

module.exports = router;
