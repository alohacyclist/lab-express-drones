const express = require('express');
const router = express.Router();

const Drone = require('../models/Drone.model')

router.get('/drones', async (req, res) => {
  try {
    const drones = await Drone.find()
    res.render('drones/list', {drones})
  } catch (err) {
    console.error(err)
  }  
});

router.get('/drones/create', (req, res) => {
  res.render('drones/create-form')
});

router.post('/drones/create', async (req, res) => {
  try {
    const drone = await Drone.create(req.body)
    res.redirect('/drones')
  } catch (err) {
    console.error(err)
    res.render('drones/create-form')
  }
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
