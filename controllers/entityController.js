import * as crudService from '../services/curdService.js';
import Entity from '../models/entity.js';

class EntityController {

    // Create a new entity
    static createEntity = async (req, res) => {
        try {
            const newEntity = await crudService.create(Entity, req.body);
            res.status(201).send({
                status: "success",
                statusCode: 201,
                message: "Entity created successfully",
                data: newEntity
            });
        } catch (error) {
            res.status(500).send({
                status: "failed",
                statusCode: 500,
                message: "Failed to create entity",
                error: error.message
            });
        }
    };

    // Get all entities
    static getAllEntity = async (req, res) => {
        try {
            const entity = await crudService.getAll(Entity, {});
            res.status(200).send({
                status: "success",
                statusCode: 200,
                message: "Entities fetched successfully",
                data: entity
            });
        } catch (error) {
            res.status(500).send({
                status: "failed",
                statusCode: 500,
                message: "Failed to fetch entities",
                error: error.message
            });
        }
    };

    // Get an entity by ID
    static getEntityById = async (req, res) => {
        const { id } = req.params;

        try {
            const entity = await crudService.getById(Entity, id);

            if (!entity) {
                return res.status(404).send({
                    status: "failed",
                    statusCode: 404,
                    message: "Entity not found"
                });
            }

            res.status(200).send({
                status: "success",
                statusCode: 200,
                message: "Entity fetched successfully",
                data: entity
            });
        } catch (error) {
            res.status(500).send({
                status: "failed",
                statusCode: 500,
                message: "Failed to fetch entity",
                error: error.message
            });
        }
    };

    // Update an entity by ID
    static updateEntityById = async (req, res) => {
        const { id } = req.params;
        try {
            const updatedEntity = await crudService.updateById(Entity, id, req.body);
            res.status(200).send({
                status: "success",
                statusCode: 200,
                message: "Entity updated successfully",
                data: updatedEntity
            });
        } catch (error) {
            res.status(500).send({
                status: "failed",
                statusCode: 500,
                message: "Failed to update entity",
                error: error.message
            });
        }
    };

    // Delete an entity by ID
    static deleteEntityById = async (req, res) => {
        const { id } = req.params;
        try {
            await crudService.deleteById(Entity, id);
            res.status(204).send({
                status: "success",
                statusCode: 204,
                message: "Entity deleted successfully"
            });
        } catch (error) {
            res.status(500).send({
                status: "failed",
                statusCode: 500,
                message: "Failed to delete entity",
                error: error.message
            });
        }
    };
}

export default EntityController;
