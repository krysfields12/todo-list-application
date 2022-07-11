const express = require('express');
const app = express();
const path = require('path');
const Todo = require('./db/models/Todo');
const User = require('./db/models/User');
const bodyParser = require('body-parser');
const { mongoose } = require('./db/mongoose');

//middleware
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use(express.static(path.join(__dirname, 'client')));

//TODO routes below
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
app.get('/todos/:todoId', async (req, res, next) => {
  try {
   const todo = await Todo.find({
   _id: req.params.todoId
   });
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

//USER ROUTES BELOW
app.get('/users', async (req, res, next) => {
    try {
        const users = await User.find({
            attibutes: ['id', 'username', 'email']
        })
        res.json(users)
        } catch(err) {
          next(err)
    }
})

//GET /users/:id
app.get('/users/:id', async (req, res, next) => {
    try {
        const users = await User.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['id', 'username', 'email',]
        })
        res.json(users)
    } catch(err) {
        next(err)
    }
})

// DELETE /users/:id
app.delete('/users/:id', async (req, res, next) => {
    try {
        const userToDelete = await User.findById(req.params.id);
        await userToDelete.destroy()
        res.json(userToDelete)
    } catch(err) {
        next(err)
    }
})

// POST
app.post('/users', async (req, res, next) => {
    try {
        res.json(await User.create(req.body));
    } catch(err) {
        next(err);
    }
})

//PUT
app.put('/users/:id', async (req, res, next) => {
    try {
        const user = await User.findOneAndUpdate({_id: req.params.id});
        res.json(await user.update(req.body));
        res.sendStatus(200);
      } catch (err) {
        next(err);
      }
    });

app.listen(3000, () => {
    console.log('Mixing up on port 3000')
})