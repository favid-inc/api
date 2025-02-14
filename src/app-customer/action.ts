interface BaseRequest {
  url: string;
  params?: any;
}

export interface GetRequest extends BaseRequest {
  method: "GET";
}

export interface PostRequest extends BaseRequest {
  method: "POST";
  data?: any;
}

export type Request = PostRequest | GetRequest;

export interface Action<Req extends Request = Request, Res = any> {
  Request: Req;
  Response: Res;
}
