import { HighlightResult } from './highlightResult';

export interface Story {
  _highlightResult: HighlightResult;
  _tags: string[];
  author: string;
  children: number[];
  created_at: string;
  created_at_i: number;
  num_comments: number;
  objectID: string;
  points: number;
  story_id: number;
  title: string;
  updated_at: string;
  url?: string;
  story_text?: string;
}
