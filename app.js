const express = require("express");
const app = express();
const TaskRoutes = require('./routes/TaskRoutes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/',TaskRoutes);

module.exports = app;