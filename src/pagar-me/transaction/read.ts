import { Action } from "../action";
import { Transaction } from "./transaction";

export type ReadTransaction = Action<Request, Transaction>;

interface Request {
  url: "/transactions/:id";
  method: "GET";
}
