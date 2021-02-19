const { request, response } = require('express');
const Jokesdb = require('../models/jokes.model');

module.exports.createJokesdb = (request, response) => {
    Jokesdb.create(request.body)
        .then(joke => response.json(joke))
        .catch(err => response.json(err));

}

module.exports.getAllJokes = (request, response) => {
    response.json({result: "hey all"})
}
