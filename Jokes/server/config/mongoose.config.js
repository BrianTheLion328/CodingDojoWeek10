const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/name_of_your_DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection! Success!'))
    .catch(error => console.log('Something went wrong with the connection!', error))
