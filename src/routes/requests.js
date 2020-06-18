const express = require('express');
const { 
  createRequest, 
  updateRequest 
} = require('../controllers/requests');

const router = express.Router();

router
  .route('/')
  .post(createRequest);

router
  .route('/:id')
  .put(updateRequest);

module.exports = router;
