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
