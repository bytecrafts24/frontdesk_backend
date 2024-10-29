import express from 'express';
import LoginController from '../controllers/loginController.js';

const router = express.Router();

router.post('/login',LoginController.login )
router.post('/logout',LoginController.logout )
router.post('/forgot-password', LoginController.requestPasswordReset);
router.post('/reset-password/:token', LoginController.resetPassword);

export default router;
