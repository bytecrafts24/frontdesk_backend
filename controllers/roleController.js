import * as crudService from '../services/curdService.js';
import Role from '../models/role.js';

class RoleController {

    static createRole = async (req, res) => {
        try {
            const newRole = await crudService.create(Role, req.body);
            res.status(200).send({
                status: "success",
                statusCode: 200,
                message: "Role created successfully",
                data: newRole
            });
        } catch (error) {
            res.status(500).send({
                status: "failed",
                statusCode: 500,
                message: "Failed to create role",
                error: error.message
            });
        }
    };


    static getAllRoles = async (req, res) => {
        try {
            const roles = await crudService.getAll(Role, {});
            res.status(200).send({
                status: "success",
                statusCode: 200,
                message: "Roles fetched successfully",
                data: roles
            });
        } catch (error) {
            res.status(500).send({
                status: "failed",
                statusCode: 500,
                message: "Failed to fetch roles",
                error: error.message
            });
        }
    };


    static getRoleById = async (req, res) => {
        const { id } = req.params;

        try {
            const role = await crudService.getById(Role, id);

            if (!role) {
                return res.status(400).send({
                    status: "failed",
                    statusCode: 400,
                    message: "Role not found"
                });
            }

            res.status(200).send({
                status: "success",
                statusCode: 200,
                message: "Role fetched successfully",
                data: role
            });
        } catch (error) {
            res.status(500).send({
                status: "failed",
                statusCode: 500,
                message: "Failed to fetch role",
                error: error.message
            });
        }
    };

    static updateRoleById = async (req, res) => {
        const { id } = req.params;
        try {
            const updatedRole = await crudService.updateById(Role, id, req.body);
            res.status(200).send({
                status: "success",
                statusCode: 200,
                message: "Role updated successfully",
                data: updatedRole
            });
        } catch (error) {
            res.status(500).send({
                status: "failed",
                statusCode: 500,
                message: "Failed to update role",
                error: error.message
            });
        }
    };

    static deleteRoleById = async (req, res) => {
        const { id } = req.params;
        try {
            await crudService.deleteById(Role, id);
            res.status(204).send({
                status: "success",
                statusCode: 204,
                message: "Role deleted successfully"
            });
        } catch (error) {
            res.status(500).send({
                status: "failed",
                statusCode: 500,
                message: "Failed to delete role",
                error: error.message
            });
        }
    };
}

export default RoleController;
