import * as crudService from '../services/curdService.js';
import PurchaseOrder from '../models/purchaseOrder.js';

class PurchaseOrderController {
    
    static createPurchaseOrder = async (req, res) => {
        try {
            const newPurchaseOrder = await crudService.create(PurchaseOrder, req.body);
            res.status(200).send({
                status: "success",
                statusCode: 200,
                message: "Purchase order created successfully",
                data: newPurchaseOrder
            });
        } catch (error) {
            res.status(500).send({
                status: "failed",
                statusCode: 500,
                message: "Failed to create purchase order",
                error: error.message
            });
        }
    };

 
    static getAllPurchaseOrders = async (req, res) => {
        try {
            const purchaseOrders = await crudService.getAll(PurchaseOrder, {});
            res.status(200).send({
                status: "success",
                statusCode: 200,
                message: "Purchase orders fetched successfully",
                data: purchaseOrders
            });
        } catch (error) {
            res.status(500).send({
                status: "failed",
                statusCode: 500,
                message: "Failed to fetch purchase orders",
                error: error.message
            });
        }
    };


    static getPurchaseOrderById = async (req, res) => {
        const { id } = req.params;

        try {
            const purchaseOrder = await crudService.getById(PurchaseOrder, id);

            if (!purchaseOrder) {
                return res.status(404).send({
                    status: "failed",
                    statusCode: 404,
                    message: "Purchase order not found"
                });
            }

            res.status(200).send({
                status: "success",
                statusCode: 200,
                message: "Purchase order fetched successfully",
                data: purchaseOrder
            });
        } catch (error) {
            res.status(500).send({
                status: "failed",
                statusCode: 500,
                message: "Failed to fetch purchase order",
                error: error.message
            });
        }
    };

  
    static updatePurchaseOrderById = async (req, res) => {
        const { id } = req.params;
        try {
            const updatedPurchaseOrder = await crudService.updateById(PurchaseOrder, id, req.body);
            res.status(200).send({
                status: "success",
                statusCode: 200,
                message: "Purchase order updated successfully",
                data: updatedPurchaseOrder
            });
        } catch (error) {
            res.status(500).send({
                status: "failed",
                statusCode: 500,
                message: "Failed to update purchase order",
                error: error.message
            });
        }
    };


    static deletePurchaseOrderById = async (req, res) => {
        const { id } = req.params;
        try {
            await crudService.deleteById(PurchaseOrder, id);
            res.status(200).send({
                status: "success",
                statusCode: 200,
                message: "Purchase order deleted successfully"
            });
        } catch (error) {
            res.status(500).send({
                status: "failed",
                statusCode: 500,
                message: "Failed to delete purchase order",
                error: error.message
            });
        }
    };
}

export default PurchaseOrderController;
