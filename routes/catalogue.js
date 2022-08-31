// api-routes.js
// Initialize express router
let router = require('express').Router();
let catalogueController = require('../controller/catalogueController');

router.route('/')
    .get(catalogueController.index)
    .post(catalogueController.new)
router.route('/:id')
    .get(catalogueController.search)
//    .patch(booksController.update)
//    .put(booksController.update)
//    .delete(booksController.delete);

module.exports = router;
