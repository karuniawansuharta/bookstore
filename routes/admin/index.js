let router = require('express').Router();
let adminController = require('../../controller/admin/index');

router.route('/')
    .get(adminController.index)
router.route('/login')
    .get(adminController.login)

module.exports = router;
