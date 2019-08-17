import { Model } from "../model";

export interface Action {
  Request: {
    url: string;
    method: "POST" | "GET" | "PUT" | "PATCH" | "DELETE";
    query?: any;
    data?: any;
  };
  Response?: any;
}

export interface Post<T extends Model> extends Action {
  Request: Action["Request"] & {
    method: "POST";
    data: T;
  };
  Response: T;
}

export interface Get<T extends Model> extends Action {
  Request: Action["Request"] & {
    method: "GET";
  };
  Response: T | { total: number; list: T[] };
}

export interface Patch<T extends Model> extends Action {
  Request: Action["Request"] & {
    method: "PATCH";
    data: T;
  };
  Response: T;
}

export interface Put<T extends Model> extends Action {
  Request: Action["Request"] & {
    method: "PUT";
    data: T;
  };
  Response: T;
}

export interface Delete<T extends Model> extends Action {
  Request: Action["Request"] & {
    method: "DELETE";
  };
  Response: void;
}
