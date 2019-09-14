import { Document } from "./document";

export interface Customer {
  external_id: string;
  name: string;
  type: "individual" | "corporation";
  country: "br";
  email: string;
  documents: Document[];
  phone_numbers: string[];
  birthday?: string;
}
