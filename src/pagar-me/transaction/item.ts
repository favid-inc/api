export type Item = {
  id: string;
  title: string;
  unit_price: number;
  quantity: number;
  tangible: boolean;
  category?: string;
} & (
  | {}
  | {
      date: string;
      venue: string;
    });
