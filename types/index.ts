export type Topic =
  | "Technology"
  | "Sports"
  | "Politics"
  | "Entertainment"
  | "Health"
  | "Science";

export interface Article {
  id: string;
  title: string;
  content: string;
  topic: Topic;
  timestamp: Date;
  author: string;
  image: string;
  featured?: boolean;
}

export interface NewArticle {
  title: string;
  content: string;
  topic: Topic;
  image: string;
}
