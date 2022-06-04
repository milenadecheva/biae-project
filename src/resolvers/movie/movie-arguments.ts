
import { Field,InputType } from "type-graphql";
import { Movie } from "../../entities/movie-entity";

@InputType()
export class MovieInput extends Movie{

}

@InputType()
export class EditMovieInput {
  @Field()
  name: string;

  @Field()
  genre: string;
  
  @Field()
  resume: string;

}

