import { Fav as TFav } from "../api/fav/Fav";

export const FAV_TITLE_FIELD = "id";

export const FavTitle = (record: TFav) => {
  return record.id;
};
