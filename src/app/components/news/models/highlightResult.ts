import { Title } from '@angular/platform-browser';
import { Author } from './author';
import { StoryText } from './news';
import { Url } from 'url';

export interface HighlightResult {
  author: Author;
  title: Title;
  url?: Url;
  story_text?: StoryText;
}
