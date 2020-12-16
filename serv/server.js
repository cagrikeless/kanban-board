const { response } = require('express')
const express = require('express')
const app = express()
const port = 8080

const tasks_model = require('./tasks_model')


app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (req,res) => {
    tasks_model.getBacklogTask()
    tasks_model.getINProgressTask()
    tasks_model.getTestedTask()
    tasks_model.getDoneTask()
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
      })
})