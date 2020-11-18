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
import { User } from '../entity/User';

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
  @UseMiddleware(isAuth)
  async createEvent(
    @Arg('options') options: EventInput,
    @Ctx() { payload }: myContext
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
          creatorId: payload?.userID,
        })
        .returning('*')
        .execute();

      event = result.raw[0];
      console.log(payload?.userID);
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

  // @QUERY - FIND ALL EVENTS
  @Query(() => [Event], { nullable: true })
  async events(
    @Arg('limit', () => Int) limit: number,
    @Arg('cursor', () => String, { nullable: true }) cursor: string | null
  ): Promise<Event[]> {
    const realLimit = Math.min(50, limit);

    const qb = getConnection()
      .getRepository(Event)
      .createQueryBuilder('e')
      .orderBy('"createdAt"', 'DESC')
      .take(realLimit);

    if (cursor) {
      qb.where('"createdAt" < :cursor', {
        cursor: new Date(parseInt(cursor)),
      });
    }

    return qb.getMany();
  }

  // @QUERY - FIND MUSIC EVENTS
  @Query(() => [Event], { nullable: true })
  async musicEvents(
    @Arg('limit', () => Int) limit: number,
    @Arg('cursor', () => String, { nullable: true }) cursor: string | null
  ): Promise<Event[]> {
    const realLimit = Math.min(50, limit);

    const qb = getConnection()
      .getRepository(Event)
      .createQueryBuilder('e')
      .orderBy('"createdAt"', 'DESC')
      .take(realLimit);

    if (cursor) {
      qb.where('"createdAt" < :cursor', {
        cursor: new Date(parseInt(cursor)),
      });
    }

    const query = getConnection()
      .getRepository(Event)
      .find({ where: { topic: 'music' } });

    return qb.getMany(), query;
  }
}
