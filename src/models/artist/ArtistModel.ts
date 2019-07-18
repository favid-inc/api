import { ArtistCategoryModel } from "../artist-category";

export interface ArtistModel {
  id: string;
  photo: string;
  about: string;
  artisticName: string;
  name: string;
  mainCategory?: ArtistCategoryModel;
  categories?: ArtistCategoryModel[];
  email?: string;
  phoneNumber?: string;
  location?: string;
  onLine?: boolean;
  price?: number;
  responseTime?: number;
}
