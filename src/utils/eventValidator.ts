import { EventInput } from '../resolvers/EventInput';

export const eventValidator = (options: EventInput) => {
  // Title validator
  if (options.title.length > 50 || options.title.length < 5) {
    return [
      {
        field: 'Event Error',
        message: 'Title length should be between 5-50 characters.',
      },
    ];
  }

  // Description validator
  if (options.description.length > 2500 || options.description.length < 10) {
    return [
      {
        field: 'Event Error',
        message: 'Description length should be between 10-2500 characters',
      },
    ];
  }

  return null;
};
