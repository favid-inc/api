import { Model } from "../model";

export interface Action {
  Request: {
    url: string;
    method: "POST" | "GET" | "PUT" | "PATCH" | "DELETE";
    params?: any;
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

export interface Read<T extends Model> extends Action {
  Request: Action["Request"] & {
    method: "GET";
    params?: FindArgs;
  };
  Response: { total: number; list: T[] };
}

export interface ReadSingle<T extends Model> extends Action {
  Request: Action["Request"] & {
    method: "GET";
  };
  Response: T;
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

export interface WhereElement {
  attr: string;
  exp: "LIKE" | "IN" | "IS" | ">" | ">=" | "=" | "<=" | "<";
  value: any;
  negate?: boolean;
}

export interface OrderByElement {
  attr: string;
  exp?: "ASC" | "DESC";
}

export interface FindArgs {
  limit?: number;
  offset?: number;
  where?: WhereElement[];
  orderBy?: OrderByElement[];
}
