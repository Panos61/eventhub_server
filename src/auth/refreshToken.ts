import { Response } from 'express';

export const refreshToken = (res: Response, token: string) => {
  res.cookie('ehc', token, {
    httpOnly: true,
    path: '/refresh-token',
  });
};
