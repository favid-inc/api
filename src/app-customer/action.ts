type AbstractRequest = {
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

export interface Action<Request extends AbstractRequest, Response> {
  Request: Request;
  Response: Response;
}
