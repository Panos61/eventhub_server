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

  @Field(() => Int)
  @Column({ nullable: true })
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
