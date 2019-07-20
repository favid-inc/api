import { ArtistModel } from "./ArtistModel";

export type ArtistSearchByMainCategoryArgument = void;

export interface ArtistSearchByMainCategoryResult {
  // took: number;
  // timed_out: boolean;
  // _shards: Shards;
  // hits: RootHits;
  aggregations: Aggregations;
}

interface Aggregations {
  mainCategory: MainCategory;
}

interface MainCategory {
  doc_count_error_upper_bound: number;
  sum_other_doc_count: number;
  buckets: Bucket[];
}

interface Bucket {
  key: string;
  doc_count: number;
  by_top_hit: ByTopHit;
}

interface ByTopHit {
  hits: Hits;
}

interface Hits {
  total: Total;
  max_score: number;
  hits: Hit[];
}

interface Hit {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _source: ArtistModel;
}

// interface RootHits {
//   total: Total;
//   max_score?: any;
//   hits: any[];
// }

interface Total {
  value: number;
  relation: string;
}

// interface Shards {
//   total: number;
//   successful: number;
//   skipped: number;
//   failed: number;
// }
