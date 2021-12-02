const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    nameOfJoke: { type: String }
});

const Joke = mongoose.model('joke', JokeSchema);

module.exports = Joke
