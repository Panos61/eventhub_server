import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';
import { myContext } from '../types';
import argon2 from 'argon2';
import { User } from '../entity/User';
import { RegisterInput } from './RegisterInput';
import { getConnection } from 'typeorm';
import { registerValidator } from '../utils/registerValidator';
import { createAccessToken, createRefreshToken } from '../auth/auth';
import { refreshToken } from '../auth/refreshToken';
import { verify } from 'jsonwebtoken';
import { isAuth } from '../auth/isAuth';

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;

  @Field()
  accessToken?: string;
}

@Resolver()
export class UserResolver {
  @Query(() => String)
  hello() {
    return 'hiiiii';
  }

  // @ME QUERY
  @Query(() => User, { nullable: true })
  me(@Ctx() context: myContext) {
    const authorization = context.req.headers['authorization'];

    if (!authorization) {
      return null;
    }

    try {
      const token = authorization.split(' ')[1];
      const payload: any = verify(token, process.env.ACCESS_TOKEN_SECRET!);
      return User.findOne(payload.userID);
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  // @REGISTER MUTATION
  @Mutation(() => UserResponse)
  async register(
    @Arg('options') options: RegisterInput,
    @Ctx() { res }: myContext
  ): Promise<UserResponse> {
    // Check for any validation errors
    const errors = registerValidator(options);
    if (errors) {
      return { errors, accessToken: '' };
    }

    // Hash password
    const hashedPassword = await argon2.hash(options.password);
    let user;

    try {
      const result = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(User)
        .values({
          email: options.email,
          username: options.username,
          password: hashedPassword,
        })
        .returning('*')
        .execute();

      user = result.raw[0];
    } catch (error) {
      return {
        accessToken: '',
        errors: [
          {
            field: 'Register Error',
            message: 'Email or Username already taken.',
          },
        ],
      };
    }

    refreshToken(res, createRefreshToken(user));

    return { user, accessToken: createAccessToken(user) };
  }

  // @LOGIN MUTATION
  @Mutation(() => UserResponse)
  async login(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Ctx() { res }: myContext
  ): Promise<UserResponse> {
    // Check if user does not exist
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return {
        accessToken: '',
        errors: [
          {
            field: 'Login Error',
            message: 'User does not exist.',
          },
        ],
      };
    }

    // Check for valid password
    const valid = await argon2.verify(user.password, password);
    if (!valid) {
      return {
        accessToken: '',
        errors: [
          {
            field: 'Login',
            message: 'Incorrect password.',
          },
        ],
      };
    }

    refreshToken(res, createRefreshToken(user));

    return { user, accessToken: createAccessToken(user) };
  }

  // @LOGOUT MUTATION
  @Mutation(() => Boolean)
  async logout(@Ctx() { res }: myContext) {
    refreshToken(res, '');

    return true;
  }
}
