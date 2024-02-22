import { Exhaustive } from './exhaustive';
import { Hit } from './hit';

export interface News {
  exhaustive: Exhaustive;
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  hits: Hit[];
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  page: number;
  params: string;
  processingTimeMS: number;
  processingTimingsMS: ProcessingTimingsMs;
  query: string;
  serverTimeMS: number;
}

export interface Title {
  matchLevel: string;
  matchedWords: any[];
  value: string;
}

export interface Url {
  matchLevel: string;
  matchedWords: any[];
  value: string;
}

export interface StoryText {
  matchLevel: string;
  matchedWords: any[];
  value: string;
}

export interface ProcessingTimingsMs {
  _request: Request;
  afterFetch: AfterFetch;
  total: number;
}

export interface Request {
  roundTrip: number;
}

export interface AfterFetch {
  merge: Merge;
  total: number;
}

export interface Merge {
  total: number;
}
