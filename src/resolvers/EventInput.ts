import { Field, InputType } from 'type-graphql';

@InputType()
export class EventInput {
  @Field()
  title: string;

  @Field()
  topic: string;

  @Field()
  description: string;

  @Field()
  adultsOnly: boolean;

  @Field()
  time: string;

  @Field()
  date: string;

  // @Field()
  // city: string;

  @Field()
  address: string;

  @Field()
  extraInfo: string;
}
