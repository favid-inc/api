import { Artist } from "../model";
import { Action } from "./action";

type Rate = 0 | 1 | 2 | 3 | 4 | 5;

export interface ListArtistsGroupingByMainCategory extends Action {
  Request: {
    url: "/ListArtistsGroupingByMainCategory";
    method: "GET";
  };
  Response: {
    [mainCategory: string]: Array<Artist & { rate: Rate; rates: Rate; follower: boolean; followers: number }>;
  };
}

export interface RateArtist extends Action {
  Request: {
    url: "/RateArtist";
    method: "POST";
    data: {
      rate: Rate;
      artistId: Artist["id"];
    };
  };
  Response: void;
}

export interface FollowArtist extends Action {
  Request: {
    url: "/FollowArtist";
    method: "POST";
    data: {
      artistId: Artist["id"];
    };
  };
  Response: void;
}
