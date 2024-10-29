import express from 'express';
import EntityController from '../controllers/entityController.js';

const router = express.Router();

router.post('/createEntity', EntityController.createEntity);
router.get('/getAllEntity', EntityController.getAllEntity);
router.get('/getEntityById/:id', EntityController.getEntityById);
router.put('/updateEntityById/:id', EntityController.updateEntityById);
router.delete('/deleteEntityById/:id', EntityController.deleteEntityById);

export default router;
