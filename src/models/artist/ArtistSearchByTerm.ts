import { ArtistModel } from "./ArtistModel";

export interface ArtistSearchByTermArgument {
  q: string;
}

export interface ArtistSearchByTermResult {
  // took: number;
  // timed_out: boolean;
  // _shards: Shards;
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
