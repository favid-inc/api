import { ArtistCategoryModel } from "../artist-category";
import { Model } from "../Model";
import User from "../User";

export interface ArtistModel extends Model, User {
  photo?: string;
  about?: string;
  artisticName?: string;
  name?: string;
  mainCategory?: ArtistCategoryModel;
  categories?: ArtistCategoryModel[];
  phoneNumber?: string;
  location?: string;
  onLine?: boolean;
  price?: number;
  responseTime?: number;
}
