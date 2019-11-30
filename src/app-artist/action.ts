export type Request = {
  url: string;
  params?: any;
} & (
    | {
      method: "GET";
    }
    | {
      method: "POST";
      data?: any;
    });

export interface Action<Req extends Request, Res> {
  Request: Req;
  Response: Res;
}
