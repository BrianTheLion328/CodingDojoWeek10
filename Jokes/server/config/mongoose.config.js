const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection! Success!'))
    .catch(error => console.log('Something went wrong with the connection!', error))
