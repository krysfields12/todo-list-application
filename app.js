const express = require('express');
const app = express();
const Todo = require('./db/models')

//GET
app.get('/todos', async (req, res, next) => {
  try {
    
  } catch (err) {
    next(err);
  }
});

//GET 
app.get('/todos/:id', async (req, res, next) => {
  try {
   
  } catch (err) {
    next(err);
  }
});

//POST 
app.post('/todos', async (req, res, next) => {
  try {
    
  } catch (err) {
    next(err);
  }
});

//DELETE 
app.delete('/todos/:id', async (req, res, next) => {
  try {
   
  } catch (err) {
    next(err);
  }
});

//PUT 
app.put('todos/:id', async (req, res, next) => {
  try {
    
  } catch (err) {
    next(err);
  }
});


app.listen(3000, () => {
    console.log('Mixing up on port 3000')
})