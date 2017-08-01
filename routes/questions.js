const express = require('express');
const router = express.Router();
const {Question} = require('../models');



// questions#index PATH: /questions METHOD: GET

/* GET users listing. */
router.get('/', function(req, res, next) {
  Question
    .all() //return a promise
    .then(questions => { //if we want to get a value from a promise we have to use THEN, so the questions here are the resolved values in an array for querying Questions 
      //to pass a variable to a template, pass an
      //object as a second argument to res.render.
      //all the properites of that object will be available
      //as local variables inside of the template.
      res.render('questions/index', {questions});
    })
});

module.exports = router;
