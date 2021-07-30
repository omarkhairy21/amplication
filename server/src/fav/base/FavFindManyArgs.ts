import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FavWhereInput } from "./FavWhereInput";
import { Type } from "class-transformer";
import { FavOrderByInput } from "./FavOrderByInput";

@ArgsType()
class FavFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FavWhereInput,
  })
  @Field(() => FavWhereInput, { nullable: true })
  @Type(() => FavWhereInput)
  where?: FavWhereInput;

  @ApiProperty({
    required: false,
    type: FavOrderByInput,
  })
  @Field(() => FavOrderByInput, { nullable: true })
  @Type(() => FavOrderByInput)
  orderBy?: FavOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FavFindManyArgs };
