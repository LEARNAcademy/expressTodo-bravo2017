var express = require('express')
var expressLayouts = require('express-ejs-layouts')
// requiring our new body-parser
var bodyParser = require('body-parser')
// Model requires
var List = require('./models').List
var Todo = require('./models').Todo

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

app.get('/show-list/:id', function(request, response){
  // read the list whos id is request.params.id
  List.findById(request.params.id, {
    include: [{
      model: Todo,
      as: 'todos'
    }]
  }).then(function(list){
    // render the show-list view with the list we loaded
    response.render('show-list', {list: list, todos: list.todos})
  })
})

app.get('/complete-me/:id', function(request, response){
  // load the todo
  Todo.findById(request.params.id).then(function(todo){
    // update the todo to be complete
    todo.completed = true
    return todo.save()
  }).then(function(todo){
    // redirect back to the list
    response.redirect("/show-list/" + todo.listId)
  })
})

app.get('/delete/:id', function(request, response){
  // load the todo
  let listId
  Todo.findById(request.params.id).then(function(todo){
    // delete the todo
    listId = todo.listId
    return todo.destroy()
  }).then(function(todo){
    // redirect to the list show
    response.redirect("/show-list/" + listId)
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
