import { UserResponse } from '../auth/types';
import { ICommentResponse } from '../comments/types';

export interface IPostResponse {
  id: string;
  image_buffering: string;
  title: string;
  content: string;
  questionContent: string;
  type: string;
  upvote: number;
  group_id: string;
  user_id: string;
  Comment: ICommentResponse[];
  User: UserResponse;
}

export interface IPostRequest {
  title?: string;
  content?: string;
  questionContent?: string;
  type?: string[];
}

export interface IUpdatePostRequest {
  title?: string;
  content?: string;
  questionContent?: string;
  type?: string[];
  upvote: number;
}
