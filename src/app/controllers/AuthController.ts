import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import User from '../models/User';
import jwt from 'jsonwebtoken';

class AuthController {
    async authenticate(req: Request, res: Response) {
        const repository = getRepository(User);
        const { email, password } = req.body;

        const user = await repository.findOne({
            select: ['id', 'email', 'password'],
            where: { email },
        });

        if (!user) return res.status(401).json({ error: 'User not found' });

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) return res.status(401).json({ error: 'Invalid password' });

        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '1d' });

        delete user.password;

        return res.status(200).json({ user, token });
    }
}

export default new AuthController();
