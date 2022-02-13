import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { PostRaw } from '../shared/interfaces/post';
import { Post } from '../shared/models/post';

@Injectable()
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Post[]> {
    return this.http.get<PostRaw[]>('/assets/mocks/post-list.json')
      .pipe(
        map((response) => response.map(d => new Post(d)))
      );
  }

  updatePost(post: Post): Observable<boolean> {
    return of(true);
  }

  addPost(post: Post): Observable<Post> {
    post.id = (Math.random() * Math.random() * Math.random()).toString(); // Server generate id simulation
    return of(post);
  }

  deletePost(postId: string): Observable<boolean> {
    return of(true);
  }
}
