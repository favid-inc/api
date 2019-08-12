import { Artist } from "../model";

export interface Action {
  request: {
    url: string;
    method: "POST" | "GET" | "PUT" | "PATCH" | "DELETE";
    query?: any;
    data?: any;
  };
  response: {
    data: any;
  };
}

export interface FindArtistsGroupingByMainCategory extends Action {
  request: {
    url: "/FindArtistsGroupingByMainCategory/";
    method: "POST";
    query: void;
    data: void;
  };
  respose: {
    data: {
      [mainCategory: string]: Artist;
    };
  };
}
