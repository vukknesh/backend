const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

var db = require('./database');



const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/cities', require('./api/cities'));
app.use('/api/weather', require('./api/weather'));



app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}!!`);

});

db.query('SELECT NOW()', (err, res) => {
  if (err.error)
    return console.log(err.error);

  console.log(`PostgreSQL connected: ${res[0].now}.`);
});


module.exports = app;