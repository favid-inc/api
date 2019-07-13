export type ArtistCategory = string;

export interface Artist {
  id: string;
  photo: string;
  about: string;
  artisticName: string;
  name: string;
  mainCategory?: ArtistCategory;
  categories?: ArtistCategory[];
  email?: string;
  phoneNumber?: string;
  location?: string;
  onLine?: boolean;
  price?: number;
  responseTime?: number;
}

export const ARTIST = 'artist';