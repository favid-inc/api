import { ArtistRate } from "../model";
import { Action } from "./action";

export type DeleteArtistRate = Action<
  {
    url: "/DeleteArtistRate";
    method: "POST";
  },
  {
    artistRateId: ArtistRate["id"],
  }
>;
