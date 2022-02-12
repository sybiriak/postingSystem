import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { PostRaw } from '../shared/interfaces/post';
import { Post } from '../shared/models/post';

@Injectable()
export class PostListService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Post[]> {
    return this.http.get<PostRaw[]>('/assets/mocks/post-list.json')
      .pipe(
        map((response) => response.map(d => new Post(d)))
      );
  }
}
