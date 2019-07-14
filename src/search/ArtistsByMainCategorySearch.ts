import { ArtistModel } from '../models';

export interface ArtistsByMainCategorySearch {
  aggregations: Aggregations;
}

interface Aggregations {
  mainCategory: MainCategory;
}

interface MainCategory {
  buckets: Bucket[];
}

interface Bucket {
  key: string;
  doc_count: number;
  by_top_hit: ByTopHit;
}

interface ByTopHit {
  hits: Hit[];
}

interface Hit {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _source: ArtistModel;
}
