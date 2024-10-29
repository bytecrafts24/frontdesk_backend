import express from 'express';
import EntityTypeController from '../controllers/entityTypeController.js';

const router = express.Router();

router.post('/createEntityType', EntityTypeController.createEntityType);
router.get('/getAllEntityType', EntityTypeController.getAllEntityType);
router.get('/getEntityTypeById/:id', EntityTypeController.getEntityTypeById);
router.put('/updateEntityTypeById/:id', EntityTypeController.updateEntityTypeById);
router.delete('/deleteEntityTypeById/:id', EntityTypeController.deleteEntityTypeById);

export default router;
