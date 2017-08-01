'use strict';

const faker = require('faker');
const {Question} = require('../models'); //destructures questions model

//up and down must always return a promise
//this is the only way sequelize can know that the seed is complete.



module.exports = {
  up: function (queryInterface, Sequelize) {
    const questions = Array.from({length:100})
    .map(()=> {
      //question.create all sequelize query methods returns a promise
      return Question.create({
        title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
        content: faker.hacker.phrase()
      });
    });


    //here, we're using promise.all to wait until all the promises in the
    //`questions` array are resolved
    return Promise.all(questions) //will return when all the values insied the array are resolved
  },

  down: function (queryInterface, Sequelize) {
    return Question.destroy({where: {}})
  }
};
