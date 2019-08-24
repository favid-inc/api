import { Artist, ArtistRate } from "../model";
import { Action } from "./action";

export type SocialArtist = Artist & {
  rate?: ArtistRate["value"];
  rates?: ArtistRate["value"];
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
