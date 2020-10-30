import {
  Arg,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';
import argon2 from 'argon2';
import { User } from '../entity/User';
import { RegisterInput } from './RegisterInput';
import { getConnection } from 'typeorm';
import { registerValidator } from '../utils/registerValidator';

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
}

@Resolver()
export class UserResolver {
  @Query(() => String)
  hello() {
    return 'hiiiii';
  }

  // @REGISTER MUTATION
  @Mutation(() => UserResponse)
  async register(
    @Arg('options') options: RegisterInput
    //@Ctx() { req }: myContext
  ): Promise<UserResponse> {
    // Check for any validation errors
    const errors = registerValidator(options);
    if (errors) {
      return { errors };
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
        errors: [
          {
            field: 'Register Error',
            message: 'Email or Username already taken.',
          },
        ],
      };
    }

    return { user };
  }

  // @LOGIN MUTATION
  @Mutation(() => UserResponse)
  async login(
    @Arg('usernameOrEmail') usernameOrEmail: string,
    @Arg('password') password: string
    //@Ctx() { req }: myContext
  ): Promise<UserResponse> {
    // Check if user does not exist
    const user = await User.findOne(
      usernameOrEmail.includes('@')
        ? { where: { email: usernameOrEmail } }
        : { where: { username: usernameOrEmail } }
    );
    if (!user) {
      return {
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
        errors: [
          {
            field: 'Login',
            message: 'Incorrect password.',
          },
        ],
      };
    }

    return { user };
  }
}
