import { Field, Float, Int, ObjectType } from 'type-graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Event } from './Event';

@ObjectType()
@Entity('users')
export class User extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number | string;

  @Field()
  @Column('text', { unique: true })
  email!: string;

  @Field()
  @Column('text', { unique: true })
  username!: string;

  @Field()
  @Column('text')
  password!: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  @Column('int', { default: 0 })
  tokenVersion: number;

  @OneToMany(() => Event, (event) => event.creator)
  events: Event[];
}
