// This file will handle connection to logic to the MongoDB database

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }) = () => {
    try {
        console.log('Connected to MongoDB sucessfully')
    } catch(err) {
        console.log('Error while attempting to connect to MongoDB');
        console.log(err)
    }
}

module.exports = {
    mongoose
};
