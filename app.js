var express = require('express')
var List = require('./models').List
// requiring our new body-parser
var bodyParser = require('body-parser')

var app = express()
app.set('view engine', 'ejs')

//let the app know we want to use body-parser to handle form data
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (request, response) {
  // load all the lists
  List.all().then(function(lists){
    // render those lists in the index view
    response.render('index', {'lists': lists})
  })
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
