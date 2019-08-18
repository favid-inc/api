export interface Action {
  Request: {
    url: string;
    method: "POST" | "GET";
    query?: any;
    data?: any;
  };
  Response?: any;
}
