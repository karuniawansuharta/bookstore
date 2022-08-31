// api-routes.js
// Initialize express router
let router = require('express').Router();
let bookController = require('../controller/bookController');

router.route('/')
    .get(bookController.index)
router.route('/:id')
    .get(bookController.search)
//    .patch(booksController.update)
//    .put(booksController.update)
//    .delete(booksController.delete);

module.exports = router;
