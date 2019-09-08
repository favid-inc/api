type Request = {
  url: string;
} & (
  | {
      method: "GET";
      params?: any;
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
        status: 400 | 401 | 404 | 500;
        data: {
          url: string;
          method: string;
          errors: [
            {
              message: string;
              parameter_name: string;
              type: "invalid_parameter" | "action_forbidden" | "internal_error" | "not_found";
            }
          ];
        };
      };
}
