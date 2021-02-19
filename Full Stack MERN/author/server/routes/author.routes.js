const AuthorController = require("../controllers/author.controller");

module.exports = function(app){
    app.post('/api/createNewAuthor', AuthorController.createAuthor);
    app.get('/api/getAllAuthors', AuthorController.findAllAuthors);
    app.put('/api/updateAuthor/:id', AuthorController.updateAuthor);
    app.get('/api/author/:id', AuthorController.getAuthor);
    app.delete('/api/deleteAuthor/:id', AuthorController.deleteAuthor);
}