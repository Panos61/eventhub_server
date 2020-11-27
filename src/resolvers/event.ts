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
import { stringify } from 'querystring';

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
  hello() {
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
  event(@Arg('id', () => Int) id: number): Promise<Event | undefined> {
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

  // @MUTATION - DELETE USER EVENTS
  // Deletes user's events - alongside with user account mutation
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteUserEvents(
    @Arg('creatorId', () => Int) creatorId: any,
    @Ctx() { payload }: myContext
  ): Promise<boolean> {
    // Asign creatorId to userId based on token
    creatorId = payload?.userID;

    try {
      await getConnection()
        .getRepository(Event)
        .createQueryBuilder()
        .delete()
        .where('creatorId = :creatorId', { creatorId: creatorId })
        .execute();
    } catch (error) {
      console.log(error);
      return false;
    }
    return true;
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

  // @QUERY - FIND SPORT EVENTS
  @Query(() => [Event], { nullable: true })
  async sportEvents(
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
      .find({ where: { topic: 'sports' } });

    return qb.getMany(), query;
  }

  // @QUERY - FIND CINEMA EVENTS
  @Query(() => [Event], { nullable: true })
  async cinemaEvents(
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
      .find({ where: { topic: 'cinema' } });

    return qb.getMany(), query;
  }
}
