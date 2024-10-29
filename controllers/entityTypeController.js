import * as crudService from '../services/curdService.js';
import EntityType from '../models/user.js';

class EntityTypeController {

    static createEntityType = async (req, res) => {
        try {
            const newEntityType = await crudService.create(EntityType, req.body);
            res.status(200).send({
                status: "success",
                statusCode: 200,
                message: "EntityType created successfully",
                data: newEntityType
            });
        } catch (error) {
            res.status(500).send({
                status: "failed",
                statusCode: 500,
                message: "Failed to create EntityType",
                error: error.message
            });
        }
    };

  
    static getAllEntityType = async (req, res) => {
        try {
            const entitytype = await crudService.getAll(EntityType, {});
            res.status(200).send({
                status: "success",
                statusCode: 200,
                message: "EntityType fetched successfully",
                data: entitytype
            });
        } catch (error) {
            res.status(500).send({
                status: "failed",
                statusCode: 500,
                message: "Failed to fetch entityType",
                error: error.message
            });
        }
    };

  
    static getEntityTypeById = async (req, res) => {
        const { id } = req.params;

        try {
            const entitytype = await crudService.getById(EntityType, id);

            if (!entitytype) {
                return res.status(400).send({
                    status: "failed",
                    statusCode: 400,
                    message: "EntityType not found"
                });
            }

            res.status(200).send({
                status: "success",
                statusCode: 200,
                message: "EntityType fetched successfully",
                data: entitytype
            });
        } catch (error) {
            res.status(500).send({
                status: "failed",
                statusCode: 500,
                message: "Failed to fetch entityType",
                error: error.message
            });
        }
    };

  
    static updateEntityTypeById = async (req, res) => {
        const { id } = req.params;
        try {
            const updatedEntityType = await crudService.updateById(EntityType, id, req.body);
            res.status(200).send({
                status: "success",
                statusCode: 200,
                message: "EntityType updated successfully",
                data: updatedEntityType
            });
        } catch (error) {
            res.status(500).send({
                status: "failed",
                statusCode: 500,
                message: "Failed to update user",
                error: error.message
            });
        }
    };


    static deleteEntityTypeById = async (req, res) => {
        const { id } = req.params;
        try {
            await crudService.deleteById(EntityType, id);
            res.status(200).send({
                status: "success",
                statusCode: 200,
                message: "EntityType deleted successfully"
            });
        } catch (error) {
            res.status(500).send({
                status: "failed",
                statusCode: 500,
                message: "Failed to delete entityType",
                error: error.message
            });
        }
    };
}

export default EntityTypeController;
