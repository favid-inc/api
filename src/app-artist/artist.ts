import { Artist } from "../model";
import { Action } from "./action";

export interface UpdateProfile extends Action {
  Request: {
    url: "/UpdateProfile";
    method: "POST";
    query?: void;
    data: Artist;
  };
  Response: Artist;
}

export interface LoadProfile extends Action {
  Request: {
    url: "/LoadProfile";
    method: "GET";
    query?: void;
    data?: void;
  };
  Response: Artist;
}
