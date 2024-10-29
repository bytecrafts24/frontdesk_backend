import express from 'express';
import RoleController from '../controllers/roleController.js';

const router = express.Router();

router.post('/createRole', RoleController.createRole);
router.get('/getAllRoles', RoleController.getAllRoles);
router.get('/getRoleById/:id', RoleController.getRoleById);
router.put('/updateRoleById/:id', RoleController.updateRoleById);
router.delete('/deleteRoleById/:id', RoleController.deleteRoleById);

export default router;
