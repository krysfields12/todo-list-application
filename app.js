const express = require('express');
const app = express();
const Todo = require('./db/models/Todo');
const bodyParser = require('body-parser');
const { mongoose } = require('./db/mongoose');

//middleware
app.use(bodyParser.json());

//GET all todos
app.get('/todos', async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.json(todos)
  } catch (err) {
    next(err);
  }
});

//GET single todo
app.get('/todos/:id', async (req, res, next) => {
  try {
   const todo = await Todo.findOne();
   res.json(todo)
  } catch (err) {
    next(err);
  }
});

//POST add todo
app.post('/todos', async (req, res, next) => {
    const {title, description, dueDate} = req.body;
    try {
        const todoObj = new Todo({
            title,
            description,
            dueDate
        });
        const savedTodo = await todoObj.save();
        res.status(201).json({
            savedTodo,
            message: 'Todo added sucessfully!'
        })
    } catch(err) {
       next(err);
    }
});

//DELETE 
app.delete('/todos/:id', async (req, res, next) => {
  try {
    const todoItem = await Todo.findOneAndRemove({ _id: req.params.id});
    res.json(todoItem)
  } catch (err) {
    next(err);
  }
});

//PUT 
app.put('/todos/:id', async (req, res, next) => {
  try {
    const todoItem = await Todo.findOneAndUpdate({_id: req.params.id});
    res.json(await todoItem.update(req.body));
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});


app.listen(3000, () => {
    console.log('Mixing up on port 3000')
})