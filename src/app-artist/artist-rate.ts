import { ArtistRate } from "../model";
import { Action } from "./action";

export type ListArtistRates = Action<
  {
    url: "/ListArtistRates";
    method: "GET";
  }
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
