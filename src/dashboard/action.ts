export interface Action {
  Request: {
    url: string;
    method: "POST" | "GET";
    params?: any;
    data?: any;
  };
  Response?: any;
}
