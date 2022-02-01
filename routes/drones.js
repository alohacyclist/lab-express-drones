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
    const newDrone = await Drone.create({...req.body})
    console.log(newDrone)
    res.redirect('/drones')
  } catch (err) {
    console.error(err)
    res.render('drones/create-form')
  }
});

router.get('/drones/:id/edit', async (req, res) => {
  try {
    const editDrone = await Drone.findById()
    res.render('drones/update-form', {editDrone})
  } catch (err) {
    console.error(err)
  }
});

router.post('/drones/:id/edit', async (req, res) => {
  try {
    const droneInfo = await Drone.findByIdAndUpdate(req.params, {...req.body}, {new: true})
    res.render('drones')
  } catch (err) {
    console.error(err)
  }
});

router.post('/drones/:id/delete', async (req, res) => {
  try {
    const deleteDrone = await Drone.findByIdAndDelete(req.params)
    res.render('drones')
  } catch (err) {
    console.error(err)
  }
});

module.exports = router;
