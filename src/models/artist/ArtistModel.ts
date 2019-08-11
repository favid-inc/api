import { ArtistCategoryModel } from "../artist-category";
import { Model } from "../Model";
import User from "../User";

export interface ArtistModel extends Model, User {
  artisticName?: string;
  biography?: string;
  categories?: ArtistCategoryModel[];
  location?: string;
  mainCategory?: ArtistCategoryModel;
  name?: string;
  phoneNumber?: string;
  photo?: string;
  price?: number;
  status?: ArtistStatus;
}

export enum ArtistStatus {
  ACTIVE = "A",
  INACTIVE = "I",
  BLOCKED = "B",
  OUTCAST = "O",
}
