import { MiddlewareFn } from 'type-graphql';
import { verify } from 'jsonwebtoken';
import { myContext } from '../types';

export const isAuth: MiddlewareFn<myContext> = ({ context }, next) => {
  const authorization = context.req.headers['authorization'];
  console.log(authorization);
  if (!authorization) {
    throw new Error('not authenticated ok?');
  }

  try {
    const token = authorization.split(' ')[1];
    const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!);
    context.payload = payload as any;
  } catch (err) {
    console.log(err);
    throw new Error('not authenticated #22');
  }

  return next();
};
