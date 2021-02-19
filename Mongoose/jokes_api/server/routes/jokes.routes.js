const JokesdbController = require("../controllers/jokes.controller")
module.exports = app => {
    app.post('/api/addNewJoke', JokesdbController.createJokesdb);
    app.get('/api/getAllJokes', JokesdbController.getAllJokes);
}