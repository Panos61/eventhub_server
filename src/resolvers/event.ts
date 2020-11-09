import { eventValidator } from '../utils/eventValidator';
import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
  Int,
} from 'type-graphql';
import { getConnection } from 'typeorm';
import { Event } from '../entity/Event';
import { EventInput } from './EventInput';
import { isAuth } from '../auth/isAuth';
import { myContext } from 'src/types';

@ObjectType()
class FieldErrorEvent {
  @Field()
  field: string;

  @Field()
  message: string;
}

@ObjectType()
class EventResponse {
  @Field(() => [FieldErrorEvent], { nullable: true })
  errors?: FieldErrorEvent[];

  @Field(() => Event, { nullable: true })
  event?: Event;
}

@Resolver(Event)
export class EventResolver {
  @Query(() => String)
  event() {
    return 'event query';
  }

  // @ MUTATION - CREATE EVENT
  @Mutation(() => EventResponse)
  //@UseMiddleware(isAuth)
  async createEvent(
    @Arg('options') options: EventInput
    // @Ctx() { payload }: myContext
  ): Promise<EventResponse> {
    // Check for any validation errors
    const errors = eventValidator(options);
    if (errors) {
      return { errors };
    }

    let event;

    // Insert values into DB
    try {
      const result = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Event)
        .values({
          ...options,
          //creatorId: payload?.userID,
          creatorId: '10',
        })
        .returning('*')
        .execute();

      event = result.raw[0];
    } catch (error) {
      console.log(error);
      return {
        errors: [
          {
            field: 'Event Error',
            message: 'Unexpected error during the event creation.',
          },
        ],
      };
    }

    return { event };
  }

  // @QUERY - FIND EVENT BY ID
  @Query(() => Event, { nullable: true })
  findEvent(@Arg('id', () => Int) id: number): Promise<Event | undefined> {
    return Event.findOne(id);
  }
}
