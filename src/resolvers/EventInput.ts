import { Field, InputType } from 'type-graphql';

@InputType()
export class EventInput {
  @Field()
  title: string;

  @Field()
  topic: string;

  @Field()
  description: string;
}
