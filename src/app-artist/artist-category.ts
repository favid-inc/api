import { ArtistCategory } from "../model";
import { Action } from "./action";

export interface ListAvailableArtistCategories extends Action {
  Request: {
    url: "/ListAvailableArtistCategories";
    method: "GET";
  };
  Response: ArtistCategory[];
}
