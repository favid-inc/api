import { ArtistModel } from '../models';

export interface Root {
  hits: Hits;
}

interface Hits {
  hits: Hit[];
}

interface Hit {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _source: ArtistModel;
}
