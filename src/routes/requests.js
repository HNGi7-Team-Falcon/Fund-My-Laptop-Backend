const express = require('express');
const {
  createRequest
} = require('../controllers/requests');

const router = express.Router();

router
    .route('/')
    .post(createRequest);

module.exports = router;
