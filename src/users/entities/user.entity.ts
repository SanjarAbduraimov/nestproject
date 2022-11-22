import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
@ObjectType()
@Entity()
export class User {
  @Field(() => ID, { description: 'User ID' })
  @ObjectIdColumn()
  _id: ObjectID;
  @Field()
  @Column()
  name: string;
}
