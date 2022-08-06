// api-routes.js
// Initialize express router
let router = require('express').Router();
let userController = require('../controller/userController');
// Contact routes
router.route('/')
    .get(userController.index)
    .post(userController.new)
router.route('/:user_id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);

module.exports = router;
