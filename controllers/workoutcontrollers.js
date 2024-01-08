const Workout = require("../model/workoutmodels");
const mongoose = require('mongoose')


// get all workouts
const getworkouts = async(req, res) => {
    const workouts = await Workout.find({})
    
    if (!workouts) {
        return res.status(404).json({error:"no such workout"})
    }

    res.status(200).json(workouts)
}


// get a single workout
const getworkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:"no such id"})
    }
    
    const workout = await Workout.findById(id)

    res.status(200).json(workout)
}



// create a new workout

const createworkout = async (req, res) => {
    const { title, Age, Weight } = req.body;
    try {
        const workout = await Workout.create({ title, Age, Weight });
      res.status(200).json(workout);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}

// delete a workout
const deleteworkout = async(req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:"no such id"})
    }

    const workout = await Workout.findOneAndDelete({ _id: id })

    if (!workout) {
       return res.status(404).json({ error: "no such workout" });
    }

    res.status(200).json(workout)
}

// update a workout

const updateworkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "no such id" });
    }

    const workout = await Workout.findOneAndUpdate({ _id: id }, {
         ...req.body
    })

    res.status(200).json(workout)
}

module.exports ={getworkout, getworkouts, createworkout, deleteworkout, updateworkout}