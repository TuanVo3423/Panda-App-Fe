export interface IPostResponse {
  id: string;
  image_buffering: string;
  title: string;
  content: string;
  questionContent: string;
  type: string;
  upvote: number;
  group_id: string;
}

export interface IPostRequest {
  title?: string;
  content?: string;
  questionContent?: string;
  type?: string[];
}
