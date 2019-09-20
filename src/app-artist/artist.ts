import { Artist, ARTIST } from "../model";
import { Action } from "./action";

export const ARTIST_UPLOAD_DIRECTORY = `${ARTIST}/:userUid/temporary`;

export type ClaimProfile = Action<
  {
    url: "/ClaimProfile";
    method: "POST";
    data: {
      idToken: string;
    };
  },
  void
>;

export type UpdateProfile = Action<
  {
    url: "/UpdateProfile";
    method: "POST";
    data: Artist;
  },
  Artist
>;

export type UploadProfilePhoto = Action<
  {
    url: "/UploadProfilePhoto";
    method: "POST";
    data: Artist;
  },
  Artist
>;

export type UploadProfileVideo = Action<
  {
    url: "/UploadProfileVideo";
    method: "POST";
    data: Artist;
  },
  Artist
>;

export type LoadProfile = Action<
  {
    url: "/LoadProfile";
    method: "GET";
  },
  Artist
>;

export type ApplyForAffiliation = ApplyForAffiliationForm | ApplyForAffiliationSubmition;

export type ApplyForAffiliationForm = Action<
  {
    url: "/ApplyForAffiliation";
    method: "POST";
    body: {
      email: string;
      password: string;
    };
  },
  void
>;

export type ApplyForAffiliationSubmition = Action<
  {
    url: "/ApplyForAffiliation";
    method: "GET";
    params: {
      s1: string;
      s2: string;
      s3: string;
      s4: string;
      email?: string;
    };
  },
  void
>;

export type ReadApplyForAffiliationLink = Action<
  {
    url: "/ReadApplyForAffiliationLink";
    method: "GET";
  },
  {
    url: string;
  }
>;
