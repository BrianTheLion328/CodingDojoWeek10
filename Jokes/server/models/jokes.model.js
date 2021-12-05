const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String,
    createdAt: {type: Date, default: Date.now() },
    updatedAt: {type: Date, default: Date.now() }
});

// if using the Date as a data type, you must use
// an object with type and default like above. 

const Joke = mongoose.model('joke', JokeSchema);

module.exports = Joke
