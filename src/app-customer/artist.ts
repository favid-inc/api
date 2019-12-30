import { Artist, ArtistCategory, ArtistRate } from "../model";
import { Action } from "./action";
import { SocialOrder } from "./order";

export type SocialArtist = Artist & {
  rate?: ArtistRate["value"];
  rates?: ArtistRate["value"];
  follower?: boolean;
  followers?: number;
  orders?: number;
};

export type ListArtistsGroupingByMainCategory = Action<
  {
    url: "/ListArtistsGroupingByMainCategory";
    method: "GET";
  },
  Record<ArtistCategory, SocialArtist[]>
>;

export type ListArtists = Action<
  {
    url: "/ListArtists";
    method: "GET";
  },
  {
    artists: SocialArtist[];
    indexes: {
      mainCategory: Record<ArtistCategory, number[]>;
      category: Record<ArtistCategory, number[]>;
      featured: number[];
      other: number[];
    }
  }
>;

export type ReadArtistBySlug = Action<
  {
    url: "/ReadArtistBySlug";
    method: "GET";
    params: {
      artistSlug: Required<SocialArtist>["slug"];
    };
  },
  SocialArtist
>;

export type RateArtist = Action<
  {
    url: "/RateArtist";
    method: "POST";
    data: ArtistRate;
  },
  SocialArtist
>;

export type FollowArtist = Action<
  {
    url: "/FollowArtist";
    method: "POST";
    data: {
      artistId: Required<SocialArtist>["id"];
    };
  },
  SocialArtist
>;

export type UnfollowArtist = Action<
  {
    url: "/UnfollowArtist";
    method: "POST";
    data: {
      artistId: Required<SocialArtist>["id"];
    };
  },
  SocialArtist
>;

export type ListArtistOrders = Action<
  {
    url: "/ListArtistOrders";
    method: "GET";
    params: {
      artistId: Required<SocialArtist>["id"];
    };
  },
  SocialOrder[]
>;

export type ListArtistRates = Action<
  {
    url: "/ListArtistRates";
    method: "GET";
    params: {
      artistId: Required<SocialArtist>["id"];
    };
  },
  ArtistRate[]
>;
