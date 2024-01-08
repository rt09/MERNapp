require('dotenv').config()

const express = require("express")
const mongoose = require('mongoose')

const workoutsroutes = require('./routes/workouts')


mongoose.connect(process.env.MONG_URI)
    .then(()=> {
        app.listen(4000, () => {
          console.log('successfully connected to database & listening on port')
      })
    })
    .catch((error) => {
        console.log(error)
    })
const app = express()

app.use(express.json())
app.use('/api/workouts',workoutsroutes)

