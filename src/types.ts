import { Request, Response } from 'express';

export type myContext = {
  req: Request;
  res: Response;
  payload?: { userID: string };
};
