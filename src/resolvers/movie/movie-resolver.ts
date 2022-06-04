import { Resolver,Query,Mutation, Arg, Authorized } from "type-graphql";
import { EditMovieInput } from "./movie-arguments";
import { Movie, MovieModel } from "../../entities/movie-entity";
import { UserRoles } from "../user/user_role";


@Resolver()
export class MovieResolver {

  @Query(returns => Movie)
  async movie(@Arg("_id") _id:string): Promise<Movie> {
    return await MovieModel.findById(_id);
  }

  @Query(returns => [Movie])
  async movies(): Promise<Movie[]> {
    return await MovieModel.find({})
  }


  @Mutation(returns => Movie)
  async createMovie(@Arg("data") data: EditMovieInput):Promise<Movie>{
    const newMovie=new MovieModel(data);
    await newMovie.save();
    return newMovie;
  }
  
    @Mutation (returns=> Movie)
  async editMovie(@Arg("_id") _id:string,@Arg("data") data:EditMovieInput):Promise<Movie>{

    return await MovieModel.findByIdAndUpdate(_id,data,{new:true});
  }

  @Authorized([UserRoles.ADMIN,UserRoles.SUPER_ADMIN])
  @Mutation(returns => Movie)
  async deleteMovie(@Arg("_id") _id:string):Promise<Movie>{
    return await MovieModel.findByIdAndRemove(_id);
    
  }


}