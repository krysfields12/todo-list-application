const  mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    dueDate: {
        type: Date
    },
    userId: {
        type: String,
        required: true
    },
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;