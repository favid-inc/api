import { ArtistCategory } from "../model";
import { Action } from "./action";

export type ListAvailableArtistCategories = Action<
  {
    url: "/ListAvailableArtistCategories";
    method: "GET";
  },
  ArtistCategory[]
>;
