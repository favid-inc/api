import { ArtistRate } from "../model";
import { Action } from "./action";

export type ListArtistRates = Action<
  {
    url: "/ListArtistRates";
    method: "GET";
  },
  ArtistRate[]
>;

export type CensorArtistRate = Action<
  {
    url: "/CensorArtistRate";
    method: "POST";
    data: {
      artistRateId: Required<ArtistRate>["id"],
    }
  }
>;
