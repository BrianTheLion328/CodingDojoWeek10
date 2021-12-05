const Joke = require('../models/jokes.model')

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json( {jokes: allJokes} )
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne( {_id: req.params.id} )
        .then(oneSingleJoke => {
            res.json( {joke: oneSingleJoke} )
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => {
            res.json( {joke: newJoke} )
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.updateSingleJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json( {updatedJokes: updatedJoke} )
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.deleteOneJoke = (req, res) => {
    Joke.deleteOne( {_id: req.params.id} )
        then(deletedJoke => {
            res.json( {deleted: deletedJoke} )
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong. Please check for errors.', error: err })
        });
}
