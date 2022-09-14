import { Category } from "@Api/interface/model/category";
import { Users } from "@Api/interface/model/users";

export interface Posts {
  id: string;
  usersID: Users["id"];
  categoryID: Category["id"];
  title: string;
  subTitle: string;
  thumbNailURL: string;
  viewCounts: number;
  likes: number;
  markDownContent: string;
  private: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdDay: Date;
}
