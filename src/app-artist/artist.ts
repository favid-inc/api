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

export interface UploadProfilePhoto extends Action {
  Request: {
    url: "/UploadProfilePhoto";
    method: "POST";
    data: FormData;
  };
  Response: Artist;
}

export interface UploadProfileVideo extends Action {
  Request: {
    url: "/UploadProfileVideo";
    method: "POST";
    data: FormData;
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

export interface ApplyForSponsorship extends Action {
  Request: {
    url: "/ApplyForSponsorship";
    params: {
      s1: string;
      s2: string;
      s3: string;
      s4: string;
    };
  } & {
    method: "GET";
    body?: void;
  } & {
    method: "POST";
    body: {
      email: string;
      password: string;
    };
  };
}
