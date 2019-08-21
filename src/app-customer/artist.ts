import { Artist } from "../model";
import { Action } from "./action";

export interface ListArtistsGroupingByMainCategory extends Action {
  Request: {
    url: "/ListArtistsGroupingByMainCategory";
    method: "GET";
  };
  Response: {
    [mainCategory: string]: Artist[];
  };
}

export interface RateArtist extends Action {
  Request: {
    url: "/RateArtist";
    method: "POST";
    data: {
      rate: 0 | 1 | 2 | 3 | 4 | 5;
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
