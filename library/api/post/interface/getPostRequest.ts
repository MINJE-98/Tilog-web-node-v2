import { Category, Users } from "@Api/interface/model";
import DateScope from "@Api/post/interface/dateScope";
import SortScope from "@Api/post/interface/sortScope";

export interface GetPostRequest {
  dateScope: DateScope;
  sortScope: SortScope;
  page: number;
  maxContent: number;
  userId?: Users["id"];
  categoryId?: Category["id"];
}
