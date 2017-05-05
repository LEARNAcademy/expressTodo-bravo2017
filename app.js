var express = require('express')
var expressLayouts = require('express-ejs-layouts')
// requiring our new body-parser
var bodyParser = require('body-parser')
// Model requires
var List = require('./models').List

var app = express()
app.set('view engine', 'ejs')

//let the app know we want to use body-parser to handle form data
app.use(bodyParser.urlencoded({ extended: false }))
app.use(expressLayouts)

app.get('/', function (request, response) {
  // load all the lists
  List.all().then(function(lists){
    // render those lists in the index view
    response.render('index', {'lists': lists})
  })
});

app.get('/new-list', function (request, response){
  // show a page with inputs for a list
  response.render('new-list')
})

app.post('/save-list', function(request, response){
  // read the body
  console.log(request.body.event)
  console.log(request.body.time)
  // save a new database record
  List.create({
    event: request.body.event,
    time: request.body.time
  }).then(function(list){
    // redirect to the home page
    response.redirect("/")
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
