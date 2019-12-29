import { ArtistRate } from "../model";
import { Action } from "./action";

export type ListArtistRates = Action<
  {
    url: "/ListArtistRates";
    method: "GET";
  },
  ArtistRate[]
>;

export type DeleteArtistRate = Action<
  {
    url: "/DeleteArtistRate";
    method: "POST";
    data: {
      artistRateId: ArtistRate["id"],
    }
  }
>;
