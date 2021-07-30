import { FavWhereInput } from "./FavWhereInput";
import { FavOrderByInput } from "./FavOrderByInput";

export type FavFindManyArgs = {
  where?: FavWhereInput;
  orderBy?: FavOrderByInput;
  skip?: number;
  take?: number;
};
