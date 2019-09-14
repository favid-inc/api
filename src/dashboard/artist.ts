import { Artist } from "../model";

import { Action } from "./action";

export interface ApproveArtistRegister extends Action {
  Request: {
    url: "/ApproveArtistRegister";
    method: "POST";
    data: {
      artist: Artist;
    };
  };
  Response: Artist;
}

export interface DenyArtistRegister extends Action {
  Request: {
    url: "/DenyArtistRegister";
    method: "POST";
    data: {
      artist: Artist;
    };
  };
  Response: Artist;
}
