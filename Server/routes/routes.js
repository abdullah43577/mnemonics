const { Router } = require('express');
const authController = require('../controller/authController');

const router = Router();

router.get('/', authController.test);

module.exports = router;
