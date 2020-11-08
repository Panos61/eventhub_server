import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';
import { Event } from '../entity/Event';
import { myContext } from '../types';

@Resolver(Event)
export class EventResolver {
  @Query(() => String)
  event() {
    return 'event query';
  }
}
