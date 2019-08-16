import { Artist } from "../model";
import { Action } from "./action";

export interface ClaimProfile extends Action {
  Request: {
    url: "/ClaimProfile";
    method: "POST";
    data: {
      idToken: string;
    };
  };
}

export interface UpdateProfile extends Action {
  Request: {
    url: "/UpdateProfile";
    method: "POST";
    data: Artist;
  };
  Response: Artist;
}

export interface LoadProfile extends Action {
  Request: {
    url: "/LoadProfile";
    method: "GET";
  };
  Response: Artist;
}
