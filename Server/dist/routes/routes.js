"use strict";
const express_1 = require("express");
const authController_1 = require("../controller/authController");
const router = (0, express_1.Router)();
router.get('/', authController_1.authController.test);
router.get('/get_mnemonics', authController_1.authController.getMnemonics);
module.exports = router;
