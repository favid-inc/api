export interface Address {
  zipcode: string;
  country: string;
  state: string;
  city: string;
  neighborhood?: string;
  street: string;
  street_number: string;
  complementary?: string;
}
