const express = require('express');
const app = express();
const port = 8080;


app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');


// Server Started
app.listen(port, () => {
  console.log('My first app listening on port 8080!');
});

app.get('/', (request, response, next) => {
  response.render('home');
});

