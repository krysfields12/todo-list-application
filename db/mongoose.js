// This file will handle connection to logic to the MongoDB database

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://krysfields012:abcdefg@cluster0.hfceu.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }) 
mongoose.connection.on('error', console.error.bind(console,'MongoDB connection error'))

module.exports = {
    mongoose
};
