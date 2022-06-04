import { ObjectType, InputType, Field } from "type-graphql";
import { prop as Prop, getModelForClass } from "@typegoose/typegoose"
import { ObjectId } from "mongodb"

@InputType()
@ObjectType()
export class Movie {

  @Field()
  readonly _id: ObjectId;

  @Prop({required: true})
  @Field()
  name: string;

  @Prop({required: true})
  @Field()
  genre: string;

  @Prop({required: true})
  @Field()
  resule: string;


}

export const MovieModel = getModelForClass(Movie, { schemaOptions: { timestamps: true }})