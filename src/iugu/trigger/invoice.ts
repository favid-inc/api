import { AxiosRequestConfig } from "axios";
import { OrderPaymentStatus } from "../../model";

export interface InvoiceStatusChanged {
  Request: Request;
}

type Request = AxiosRequestConfig & {
  url: "/InvoiceStatusChanged";
  method: "POST";
  data: {
    event: "invoice.status_changed";
    data: {
      id: string;
      account_id: string;
      status: OrderPaymentStatus;
      subscription_id?: string;
    };
  };
};
