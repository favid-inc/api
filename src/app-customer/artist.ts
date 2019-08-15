import { Artist } from "../model";
import { Action } from "./action";

export interface FindArtistsGroupingByMainCategory extends Action {
  Request: {
    url: "/FindArtistsGroupingByMainCategory";
    method: "POST";
  };
  Response: {
    [mainCategory: string]: Artist;
  };
}
