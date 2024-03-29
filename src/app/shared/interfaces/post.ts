import { Post } from "../models/post";

export interface PostRaw {
  id: string;
  title: string;
  text: string;
  tags: string[];
}
