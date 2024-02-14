import UserModel from '../model/UserModel';
import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';

export const verifyUserLoginInfo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      // compare passwords
      const passwordMatch = await bcrypt.compare(password, user.password as string);

      if (passwordMatch) next();

      return;
    }

    return res.status(400).json({ message: 'User credentials not found!' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal Server Error!', Error: err });
  }
};
