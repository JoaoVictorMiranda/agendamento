import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();


const KEY = process.env.JWT_KEY;

export function generateToken(userInfo) {
    return jwt.sign(userInfo, KEY);
}


export function getAuthentication(checkRole, throw401 = true) {
    return (req, res, next) => {
        try {
            let token = req.headers['x-access-token'];
            if (!token)
                token = req.query['x-access-token'];
            let decoded = jwt.verify(token, KEY);

            req.user = decoded;

            if (checkRole && !checkRole(decoded) && decoded.role !== 'administrador') {
                return res.status(403).end(); 
            }

            next(); 
        }
        catch {
            if (throw401) {
                return res.status(401).json({ error: 'Authentication Error: JWT must be provided' });
            } else {
                next(); 
            }
        }
    };
}
