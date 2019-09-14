// https://docs.pagar.me/docs/split-rules#section-parâmetros-de-uma-split-rule

export type SplitRule = {
  recipient_id: string;
  charge_processing_fee: boolean;
  liable: boolean;
  charge_remainder: boolean;
} & (
  | {
      amount: number;
    }
  | {
      percentage: number;
    });
