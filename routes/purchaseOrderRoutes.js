import express from 'express';
import purchaseOrderController from '../controllers/purchaseOrderController.js';

const router = express.Router();

router.post('/createPurchaseOrder', purchaseOrderController.createPurchaseOrder);
router.get('/getAllPurchaseOrders', purchaseOrderController.getAllPurchaseOrders);
router.get('/getPurchaseOrderById/:id', purchaseOrderController.getPurchaseOrderById);
router.put('/updatePurchaseOrderById/:id', purchaseOrderController.updatePurchaseOrderById);
router.delete('/deletePurchaseOrderById/:id', purchaseOrderController.deletePurchaseOrderById);

export default router;
