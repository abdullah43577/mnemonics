import { Router } from 'express';
import { authController } from '../controller/authController';

const router = Router();

router.get('/', authController.test);
router.get('/get_mnemonics', authController.getMnemonics);

export = router;
