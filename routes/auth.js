let router = require('express').Router();
let authController = require('../controller/authController');

router.route('/')
    .get(authController.index)
router.route('/login')
    .post(authController.login)
router.route('/register')
    .post(authController.register)
router.route('/forgot_password')
router.route('/_password')
router.route('/logout')

module.exports = router;
