import { Artist, ArtistRate } from "../model";
import { Action } from "./action";
import { SocialOrder } from "./order";

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
    data: ArtistRate;
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

export interface UnfollowArtist extends Action {
  Request: {
    url: "/UnfollowArtist";
    method: "POST";
    data: {
      artistId: SocialArtist["id"];
    };
  };
  Response: SocialArtist;
}

export interface ListArtistOrders extends Action {
  Request: {
    url: "/ListArtistOrders";
    method: "GET";
    params: {
      artistId: SocialArtist["id"];
    };
  };
  Response: SocialOrder[];
}

export interface ListArtistRates extends Action {
  Request: {
    url: "/ListArtistRates";
    method: "GET";
    params: {
      artistId: SocialArtist["id"];
    };
  };
  Response: ArtistRate[];
}
