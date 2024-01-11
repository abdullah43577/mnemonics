import jwt, { JwtPayload } from 'jsonwebtoken';
import UserModel from '../model/UserModel';
import { Request, Response, NextFunction } from 'express';

// implement a middleware that checks the validity of the token-cookie stored in the browser
export const checkAuthToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token required' });
  }

  const token = authorization.split(' ')[1];

  try {
    const { id } = jwt.verify(token, 'movie_database_secret') as JwtPayload;
    req.user = (await UserModel.findById(id)) ?? undefined; // find user with corresponding ID
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ error: 'Request not Authorized' });
  }
};
