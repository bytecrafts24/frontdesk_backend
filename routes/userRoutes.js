import express from 'express';
import UserController from '../controllers/userController.js';

const router = express.Router();

router.post('/createUser', UserController.createUser);
router.get('/getAllUsers', UserController.getAllUsers);
router.get('/getUserById/:id', UserController.getUserById);
router.put('/updateUserById/:id', UserController.updateUserById);
router.delete('/deleteUserByIders/:id', UserController.deleteUserById);

export default router;
