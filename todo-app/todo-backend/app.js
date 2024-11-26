const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const todosRouter = require('./routes/todos');
const redis = require('./redis');

const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/todos', todosRouter);

/* GET statistics */
app.get('/statistics', async (_, res) => {
  const addedTodos = await redis.getAsync("added_todos") || 0;
  res.send({ added_todos: +addedTodos })
})

module.exports = app;
