import { Field, Int, ObjectType } from 'type-graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './User';

@ObjectType()
@Entity('events')
export class Event extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column('varchar', { unique: true })
  title!: string;

  @Field()
  @Column('text')
  topic!: string;

  @Field()
  @Column('text')
  description!: string;

  @Field()
  @Column('timestamp with time zone')
  date!: string;

  @Field()
  @Column('timestamp with time zone')
  time!: string;

  // @Field()
  // @Column('text')
  // city!: string;

  @Field()
  @Column('text')
  address!: string;

  @Field()
  @Column('boolean')
  adultsOnly!: boolean;

  @Field()
  @Column('text', { nullable: true })
  extraInfo!: string;

  @Field(() => Int)
  @Column()
  creatorId: number | string;

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, (user) => user.events)
  creator: User;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
