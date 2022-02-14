import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, of, Subject, tap } from 'rxjs';
import { PostListUpdates, PostRaw } from 'src/app/shared/interfaces/post';
import { Post } from 'src/app/shared/models/post';

@Injectable()
export class PostListService {
  postListUpdated: Subject<PostListUpdates> = new Subject();

  private postList: Post[] = [];

  constructor(private http: HttpClient) {}

  getAll(): void {
    this.http
      .get<PostRaw[]>('/assets/mocks/post-list.json')
      .pipe(
        delay(1000),
        map((response) => response.map((d) => new Post(d)))
      )
      .subscribe((postList) => {
        this.postList = postList;
        this.triggerUpdate();
      });
  }

  updatePost(post: Post): Observable<boolean> {
    return of(true).pipe(
      tap(() => {
        const index = this.postList.findIndex(d => d.id === post.id);
        this.postList[index] = post;
        this.triggerUpdate();
      })
    );
  }

  addPost(post: Post): Observable<boolean> {
    post.id = (Math.random() * Math.random() * Math.random()).toString(); // Server generate id simulation
    return of(true).pipe(
      tap(() => {
        this.postList.push(post);
        this.triggerUpdate();
      })
    );
  }

  deletePost(postId: string): Observable<boolean> {
    return of(true).pipe(
      tap(() => {
        const index = this.postList.findIndex(d => d.id === postId);
        this.postList.splice(index, 1);
        this.triggerUpdate();
      })
    );
  }

  getTagList(): string[] {
    return Array.from(
      new Set([...this.postList.map((d) => d.tags)].flat())
    )
  }

  triggerUpdate(): void {
    this.postListUpdated.next({
      list: this.postList,
      tags: this.getTagList()
    });
  }
}
