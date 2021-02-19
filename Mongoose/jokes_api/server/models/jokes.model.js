const mongoose = require('mongoose');
 
const jokesdbSchema = new mongoose.Schema({
    name: String,
    age: Number
});
 
const Jokesdb = mongoose.model('Jokesdb', jokesdbSchema);
 
module.exports = Jokesdb;