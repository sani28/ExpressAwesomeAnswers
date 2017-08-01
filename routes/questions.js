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

router.get('/:id',(req, res, next) => {
  //to get params from Express, use req.params. It's a property of
  //the request object. It doesn't contain the form data. It only
  //has params realted to the path such as `id`, `question_id`, etc
  const {id} = req.params;
  Question
  //find params - via req.params
  .findById(id)
  .then(question=> {
    res.render('questions/show', {question});
  })

    .catch(next) //next is a callback to catch -
    // .catch(error => next(error)) short form up top ^
})

module.exports = router;
