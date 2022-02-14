import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface TokenPayload {
    id: string;
    iat: number;
    exp: number;
}

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ error: 'Unauthorized' });

    const token = authorization.replace('Bearer', '').trim();

    try {
        const data = jwt.verify(token, process.env.SECRET_KEY);
        const { id } = data as TokenPayload;
        req.userId = id;
        return next();
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: err.message || err });
    }
}
