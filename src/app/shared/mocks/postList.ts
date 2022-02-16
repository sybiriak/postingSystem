import { PostRaw } from "../interfaces/post";
import { Post } from "../models/post";

export const postListRaw: PostRaw[] = [
  {
    id: '1',
    title: 'test title 1',
    text: 'test text 1',
    tags: ['tag1', 'tag2']
  },
  {
    id: '2',
    title: 'test title 2',
    text: 'test text 2',
    tags: ['tag1', 'tag2', 'tag3']
  }
];

export const postList: Post[] = postListRaw.map(d => new Post(d));
