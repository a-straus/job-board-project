const express = require('express');
const jobController = require('../controllers/jobController.js');

const router = express.Router();

router.get('/', jobController.getJobs, (req, res, next) => {
  return next();
});

router.post('/', jobController.saveJob, (req, res, next) => {
  return next();
});
