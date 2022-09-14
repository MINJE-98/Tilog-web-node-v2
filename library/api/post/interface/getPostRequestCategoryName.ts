import DateScope from "@Api/post/interface/dateScope";
import SortScope from "@Api/post/interface/sortScope";

export default interface GetCategoryPostRequest {
  dateScope: DateScope;
  sortScope: SortScope;
  page: number;
  maxContent: number;
  categoryName: string;
  userId?: number;
}
