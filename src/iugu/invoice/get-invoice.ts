export interface GetInvoice {
  Request: Request;
  Response: Response;
}

interface Request {
  url: "/invoices/:id";
  method: "GET";
}

interface Response {
  status: 200;
  data: ResponseData;
}

interface ResponseData {
  bank_slip: BankSlip;
  commission_cents?: any;
  commission: string;
  created_at: string;
  currency: string;
  custom_variables: any[];
  customer_id?: any;
  discount_cents?: any;
  discount?: any;
  due_date: string;
  email: string;
  financial_return_date: string;
  financial_return_dates: FinancialReturnDate[];
  id: string;
  installments?: any;
  interest?: any;
  items_total_cents: number;
  items: Item[];
  logs: any[];
  notification_url?: any;
  paid_at?: any;
  refundable?: any;
  return_url?: any;
  secure_id: string;
  secure_url: string;
  status: string;
  tax_cents?: any;
  taxes_paid: string;
  total_cents: number;
  total: string;
  updated_at: string;
  user_id?: any;
  variables: Variable[];
}

interface Variable {
  id?: string;
  value: string;
  variable: string;
}

interface Item {
  created_at: string;
  description: string;
  id: string;
  price_cents: number;
  price: string;
  quantity: number;
  updated_at: string;
}

interface BankSlip {
  barcode_data: string;
  barcode: string;
  digitable_line: string;
}

interface FinancialReturnDate {
  advanced: boolean;
  amount: string;
  executed_date: string;
  id: number;
  installment: number;
  return_date: string;
  status: string;
  taxes: string;
}
