import { Artist } from "../model";
import { CreateSubAccount } from "../pagar-me";

import { Action } from "./action";

export interface ApproveArtistRegister extends Action {
  Request: {
    url: "/ApproveArtistRegister";
    method: "POST";
    data: {
      artist: Artist;
      subAccount: CreateSubAccount["Request"]["data"];
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
