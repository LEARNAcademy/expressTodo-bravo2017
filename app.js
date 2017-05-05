var express = require('express')

// requiring our new body-parser
var bodyParser = require('body-parser')

var app = express()
app.set('view engine', 'ejs')

//let the app know we want to use body-parser to handle form data
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (request, response) {
  response.send('yo!')
  // response.render('form-demo')
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
