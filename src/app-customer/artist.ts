import { Artist } from "../model";
import { Action } from "./action";

export type ArtistRate = 0 | 1 | 2 | 3 | 4 | 5;

export type SocialArtist = Artist & {
  rate?: ArtistRate;
  rates?: ArtistRate;
  follower?: boolean;
  followers?: number;
  orders?: number;
};

export interface ListArtistsGroupingByMainCategory extends Action {
  Request: {
    url: "/ListArtistsGroupingByMainCategory";
    method: "GET";
  };
  Response: {
    [mainCategory: string]: SocialArtist[];
  };
}

export interface RateArtist extends Action {
  Request: {
    url: "/RateArtist";
    method: "POST";
    data: {
      rate: ArtistRate;
      artistId: SocialArtist["id"];
    };
  };
  Response: SocialArtist;
}

export interface FollowArtist extends Action {
  Request: {
    url: "/FollowArtist";
    method: "POST";
    data: {
      artistId: SocialArtist["id"];
    };
  };
  Response: SocialArtist;
}
