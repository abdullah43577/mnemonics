import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';

export const hashPasswords = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let { password } = req.body;
    const salt = await bcrypt.genSalt();
    req.body.password = await bcrypt.hash(password, salt);
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal Server Error!' });
  }
};
