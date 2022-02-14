import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';

class UserController {
    async list(req: Request, res: Response) {
        const repository = getRepository(User);
        const users = await repository.find();

        return res.status(200).json(users);
    }

    async store(req: Request, res: Response) {
        const repository = getRepository(User);
        const { email, password } = req.body;
        const userExists = await repository.findOne({ email });

        if (userExists) return res.status(409).json({ error: 'User already exists' });

        const user = repository.create({ email, password });
        await repository.save(user);

        return res.status(201).json(user);
    }
}

export default new UserController();
