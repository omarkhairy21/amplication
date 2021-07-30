import { ArgsType, Field } from "@nestjs/graphql";
import { FavWhereUniqueInput } from "./FavWhereUniqueInput";

@ArgsType()
class FavFindUniqueArgs {
  @Field(() => FavWhereUniqueInput, { nullable: false })
  where!: FavWhereUniqueInput;
}

export { FavFindUniqueArgs };
