const express = require('express');
const router = express.Router();

const constants = require('../lib/constants');


/* GET all brands. */
router.get('/', function (req, res, next) {
  res.json(constants.ALL_BRANDS);
  res.end()
});

/* GET a specific brand. */
router.get('/:brandId', function (req, res, next) {
  const brand = constants.ALL_BRANDS.find(brand => brand.brandId === req.params.brandId);
  if (brand) {
    res.json(brand);
  }
  else {
    res.status(404).send('Brand not found');
  }
  res.end()
});

module.exports = router;
