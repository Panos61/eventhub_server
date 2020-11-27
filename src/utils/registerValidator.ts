import { RegisterInput } from '../resolvers/RegisterInput';

export const registerValidator = (options: RegisterInput) => {
  if (!options.email.includes('@')) {
    return [
      {
        field: 'Register Error',
        message: 'Invalid Error',
      },
    ];
  }

  if (options.username.length <= 2) {
    return [
      {
        field: 'Register Error',
        message: 'Username length should be greater than 2.',
      },
    ];
  }

  if (options.password.length <= 6) {
    return [
      {
        field: 'Register Error',
        message: 'Password length should be greater than 6',
      },
    ];
  }

  if (options.password && options.confirmPassword) {
    if (options.password != options.confirmPassword) {
      return [
        {
          field: 'Passwords are not matching',
          message: 'Password are not matching',
        },
      ];
    }
  }

  return null;
};
