const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/name_of_your_DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established a connection to the database"))
    .catch(error => console.log('Something went wrong when connecting to the database', error));
