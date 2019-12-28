import { ArtistRate } from "../model";
import { Action } from "./action";

export type DeleteArtistRate = Action<
  {
    url: "/DeleteArtistRate";
    method: "POST";
    data: {
      artistRateId: ArtistRate["id"],
    },
    params?: void
  }
>;
