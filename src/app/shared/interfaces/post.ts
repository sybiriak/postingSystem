import { Post } from "../models/post";

export interface PostRaw {
  id: string;
  title: string;
  text: string;
  tags: string[];
}

export interface PostListUpdates {
  list: Post[],
  tags: string[]
}
