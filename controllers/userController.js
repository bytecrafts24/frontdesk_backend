import * as crudService from '../services/curdService.js';
import User from '../models/user.js';

class UserController {

    // Create a new user
    static createUser = async (req, res) => {
        try {
            const newUser = await crudService.create(User, req.body);
            res.status(200).send({
                status: "success",
                statusCode: 200,
                message: "User created successfully",
                data: newUser
            });
        } catch (error) {
            res.status(500).send({
                status: "failed",
                statusCode: 500,
                message: "Failed to create user",
                error: error.message
            });
        }
    };

    // Get all users
    static getAllUsers = async (req, res) => {
        try {
            const users = await crudService.getAll(User, {});
            res.status(200).send({
                status: "success",
                statusCode: 200,
                message: "Users fetched successfully",
                data: users
            });
        } catch (error) {
            res.status(500).send({
                status: "failed",
                statusCode: 500,
                message: "Failed to fetch users",
                error: error.message
            });
        }
    };

    // Get a user by ID
    static getUserById = async (req, res) => {
        const { id } = req.params;

        try {
            const user = await crudService.getById(User, id);

            if (!user) {
                return res.status(404).send({
                    status: "failed",
                    statusCode: 404,
                    message: "User not found"
                });
            }

            res.status(200).send({
                status: "success",
                statusCode: 200,
                message: "User fetched successfully",
                data: user
            });
        } catch (error) {
            res.status(500).send({
                status: "failed",
                statusCode: 500,
                message: "Failed to fetch user",
                error: error.message
            });
        }
    };

    // Update a user by ID
    static updateUserById = async (req, res) => {
        const { id } = req.params;
        try {
            const updatedUser = await crudService.updateById(User, id, req.body);
            res.status(200).send({
                status: "success",
                statusCode: 200,
                message: "User updated successfully",
                data: updatedUser
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

    // Delete a user by ID
    static deleteUserById = async (req, res) => {
        const { id } = req.params;
        try {
            await crudService.deleteById(User, id);
            res.status(200).send({
                status: "success",
                statusCode: 200,
                message: "User deleted successfully"
            });
        } catch (error) {
            res.status(500).send({
                status: "failed",
                statusCode: 500,
                message: "Failed to delete user",
                error: error.message
            });
        }
    };
}

export default UserController;
