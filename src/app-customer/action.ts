export interface Action {
  Request: {
    url: string;
    method: "POST" | "GET";
  };
  Response?: any;
}
