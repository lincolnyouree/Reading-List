const Todo = require('../config/data');

module.exports = {
    create,
    index,
    delete: deleteOne
}

function create(req, res) {
    req.body.done = false;
    Todo.create(req.body);
    res.redirect('/')
}

function index(req, res) {
    res.render('index', {todos: Todo.getAll()});
}

function deleteOne(req, res) {
    Todo.deleteOne(req.params.id);
    res.redirect('/');
}