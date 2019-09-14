import { Address } from "../address";

export interface Shipping {
  name: string;
  fee: number;
  address: Address;
  delivery_date?: string;
  expedited?: boolean;
}
