import { PostRaw } from "../interfaces/post";

export class Post {
  id!: string;
  title!: string;
  text!: string;
  tags!: string[];

  constructor(raw: PostRaw) {
    Object.assign(this, raw);
  }
}
