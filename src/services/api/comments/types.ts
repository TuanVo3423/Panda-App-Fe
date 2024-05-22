export interface ICreateCommentRequest {
  content: string;
  image : string;
}

export interface ICommentResponse {
  id: string;
  content: string;
  image: string;
  post_id: string;
  user_id: string;
}
