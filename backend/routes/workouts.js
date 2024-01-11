const express = require('express')
const Workout = require('../model/workoutmodels')
const {getworkout, getworkouts, createworkout, deleteworkout, updateworkout}= require('../controllers/workoutcontrollers')

const router = express.Router()

router.get('/', getworkouts)

router.get("/:id", getworkout)

router.post("/", createworkout)

router.delete("/:id", deleteworkout)

router.patch("/:id", updateworkout)

module.exports= router