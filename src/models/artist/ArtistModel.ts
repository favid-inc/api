import { ArtistCategoryModel } from "../artist-category";
import { Model } from "../Model";

export interface ArtistModel extends Model {
  photo?: string;
  about?: string;
  artisticName?: string;
  name?: string;
  mainCategory?: ArtistCategoryModel;
  categories?: ArtistCategoryModel[];
  email?: string;
  phoneNumber?: string;
  location?: string;
  onLine?: boolean;
  price?: number;
  responseTime?: number;
}
