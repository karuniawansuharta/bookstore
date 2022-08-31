// api-routes.js
// Initialize express router
let router = require('express').Router();
let booksController = require('../controller/bookController');

router.route('/')
    .get(booksController.index)
    .post(booksController.new)
router.route('/:id')
    .get(booksController.search)
//    .patch(booksController.update)
//    .put(booksController.update)
//    .delete(booksController.delete);

module.exports = router;
