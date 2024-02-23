export interface Comments {
  exhaustive: Exhaustive
  exhaustiveNbHits: boolean
  exhaustiveTypo: boolean
  hits: Comment[]
  hitsPerPage: number
  nbHits: number
  nbPages: number
  page: number
  params: string
  processingTimeMS: number
  processingTimingsMS: ProcessingTimingsMs
  query: string
  serverTimeMS: number
}

export interface Exhaustive {
  nbHits: boolean
  typo: boolean
}

export interface Comment {
  childComments: Comment[]
  _highlightResult: HighlightResult;
  _tags: string[];
  author: string;
  comment_text: string;
  created_at: string;
  created_at_i: number;
  objectID: string;
  parent_id: number;
  points: any;
  story_id: number;
  story_title: string;
  story_url: string;
  updated_at: string;
  children?: Comment[]; // Массив дочерних комментариев
}


export interface HighlightResult {
  author: Author
  comment_text: CommentText
  story_title: StoryTitle
  story_url: StoryUrl
}

export interface Author {
  matchLevel: string
  matchedWords: any[]
  value: string
}

export interface CommentText {
  matchLevel: string
  matchedWords: any[]
  value: string
}

export interface StoryTitle {
  matchLevel: string
  matchedWords: any[]
  value: string
}

export interface StoryUrl {
  matchLevel: string
  matchedWords: any[]
  value: string
}

export interface ProcessingTimingsMs {
  _request: Request
  fetch: Fetch
  total: number
}

export interface Request {
  roundTrip: number
}

export interface Fetch {
  query: number
  scanning: number
  total: number
}
