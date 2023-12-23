const { Router } = require('express');
const authController = require('../controller/authController');

const router = Router();

router.get('/', authController.test);
router.get('/get_mnemonics', authController.getMnemonics);

module.exports = router;
