// import modules

import express from 'express'

import {students} from './data/students-data.js'

// Create Express app

const app = express()

// Configure the app (app.set)

app.set('view engine', 'ejs')

// Mount Middleware (app.use)



// Mount routes

app.get('/home', function(req, res) {
    res.render('home')
})

app.get('/',function(req, res) {
    res.redirect('/students')
})

app.get('/students', function (req, res) {
    res.render('students/index', {
        students: students
    })
})

// Tell the app to listen on port 3001

app.listen(3001, function() {
  console.log('Listening on port 3001')
})