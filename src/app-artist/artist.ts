import { Artist } from "../model";
import { Action } from "./action";

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

export type ApplyForAffiliation = ApplyForAffiliationForm | ApplyForAffiliationSubmission;

export type ApplyForAffiliationSubmission = Action<
  {
    url: "/ApplyForAffiliation";
    method: "POST";
    data: {
      email?: string;
    };
  },
  void
>;

export type ApplyForAffiliationForm = Action<
  {
    url: "/ApplyForAffiliation";
    method: "GET";
    params: {
      s1?: string;
      s2?: string;
      s3?: string;
      s4?: string;
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
