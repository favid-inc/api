type Request = {
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

export interface Action<ActionRequest extends Request, ActionResponseData> {
  Request: ActionRequest;
  Response:
    | {
        status: 200;
        data: ActionResponseData;
      }
    | {
        status: 404;
        data: any;
      }
    | {
        status: 403;
        data: any;
      }
    | {
        status: 500;
        data: any;
      };
}
