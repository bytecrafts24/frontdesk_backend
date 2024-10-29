import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/user.js'; 
import * as crudService from '../services/curdService.js';

class LoginController {

    static login = async (req, res) => {
        const { email, password } = req.body;

        try {
          
            const user = await crudService.getOne(User, { email });
            
            if (!user) {
                return res.status(404).send({
                    status: "failed",
                    statusCode: 404,
                    message: "User not found"
                });
            }

      
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).send({
                    status: "failed",
                    statusCode: 401,
                    message: "Invalid credentials"
                });
            }

            const token = jwt.sign(
                { userId: user._id, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );

            user.authToken = token;
            user.authTokenExpiry = Date.now() + 60 * 60 * 1000; 
            await user.save();

            res.status(200).send({
                status: "success",
                statusCode: 200,
                message: "Login successful",
                data: {
                    user: {
                        _id: user._id,
                        email: user.email,
                        role: user.role,
                        entity_id: user.entity_id
                    },
                    token
                }
            });

        } catch (error) {
            res.status(500).send({
                status: "failed",
                statusCode: 500,
                message: "Login failed",
                error: error.message
            });
        }
    };

    static logout = async (req, res) => {
        const { userId } = req.body;

        try {
            const user = await crudService.getById(User, userId);
            if (!user) {
                return res.status(404).send({
                    status: "failed",
                    statusCode: 404,
                    message: "User not found"
                });
            }

            user.authToken = null;
            user.authTokenExpiry = null;
            await user.save();

            res.status(200).send({
                status: "success",
                statusCode: 200,
                message: "Logout successful"
            });

        } catch (error) {
            res.status(500).send({
                status: "failed",
                statusCode: 500,
                message: "Logout failed",
                error: error.message
            });
        }
    };

    static requestPasswordReset = async (req, res) => {
        const { email } = req.body;

        try {
            const user = await crudService.getOne(User, { email });
            
            if (!user) {
                return res.status(404).send({
                    status: "failed",
                    statusCode: 404,
                    message: "User not found"
                });
            }

            const resetToken = crypto.randomBytes(32).toString('hex');
            const resetTokenHash = crypto.createHash('sha256').update(resetToken).digest('hex');
            const resetTokenExpiry = Date.now() + 60 * 60 * 1000; // Token valid for 1 hour

            user.resetToken = resetTokenHash;
            user.resetTokenExpiry = resetTokenExpiry;
            await user.save();

            const resetLink = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;
            await sendResetEmail(user.email, resetLink);

            res.status(200).send({
                status: "success",
                statusCode: 200,
                message: "Password reset link sent to email"
            });

        } catch (error) {
            res.status(500).send({
                status: "failed",
                statusCode: 500,
                message: "Failed to process request",
                error: error.message
            });
        }
    };


    static resetPassword = async (req, res) => {
        const { token } = req.params;
        const { password } = req.body;

        try {
           
            const resetTokenHash = crypto.createHash('sha256').update(token).digest('hex');
            const user = await crudService.getOne(User, {
                resetToken: resetTokenHash,
                resetTokenExpiry: { $gt: Date.now() }
            });

            if (!user) {
                return res.status(400).send({
                    status: "failed",
                    statusCode: 400,
                    message: "Invalid or expired token"
                });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            user.password = hashedPassword;
            user.resetToken = null;
            user.resetTokenExpiry = null;
            await user.save();

            res.status(200).send({
                status: "success",
                statusCode: 200,
                message: "Password reset successful"
            });

        } catch (error) {
            res.status(500).send({
                status: "failed",
                statusCode: 500,
                message: "Failed to reset password",
                error: error.message
            });
        }
    };
}

const sendResetEmail = async (email, resetLink) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Password Reset Request',
        html: `<p>You requested a password reset. Click the link below to reset your password:</p>
               <a href="${resetLink}">Reset Password</a>`
    };

    await transporter.sendMail(mailOptions);
};

export default LoginController;
