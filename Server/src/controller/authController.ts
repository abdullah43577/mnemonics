import { generateMnemonics } from './openaiController';
import { Request, Response } from 'express';

const test = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello from the server side!', app: 'Natours' });
};

const getMnemonics = async (req: Request, res: Response) => {
  try {
    const mnemonics = await generateMnemonics('abate');
    res.status(200).json({ message: mnemonics });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

export const authController = { test, getMnemonics };
