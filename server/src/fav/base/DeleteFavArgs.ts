import { ArgsType, Field } from "@nestjs/graphql";
import { FavWhereUniqueInput } from "./FavWhereUniqueInput";

@ArgsType()
class DeleteFavArgs {
  @Field(() => FavWhereUniqueInput, { nullable: false })
  where!: FavWhereUniqueInput;
}

export { DeleteFavArgs };
