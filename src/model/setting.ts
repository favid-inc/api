import { Model } from "./model";

export const SETTING = "Setting";

export type SettingKey =
  | "ARTIST_MINIMUM_PRICE"
  ;

export const SettingKey: { [K in SettingKey]: K } = {
  ARTIST_MINIMUM_PRICE: "ARTIST_MINIMUM_PRICE",
};

interface BaseSetting<K extends SettingKey, V> extends Model {
  key?: K;
  value?: V;
}

export type Setting =
  | BaseSetting<typeof SettingKey.ARTIST_MINIMUM_PRICE, number>
  ;
