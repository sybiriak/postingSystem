import { FormControl } from '@angular/forms';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  catchError,
  distinctUntilChanged,
  finalize,
  of,
  Subscription,
} from 'rxjs';
import { Post } from '../shared/models/post';
import { PostService } from './post.service';
import { cloneDeep } from '../shared/utils/cloneDeep';
import { PostRaw } from '../shared/interfaces/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListComponent implements OnInit, OnDestroy {
  postList: Post[] = [];

  tags: string[] = [];

  isLoading = true;

  newPost: Post = new Post({} as PostRaw);

  private postListCopy: Post[] = [];

  private subscription = new Subscription();

  constructor(
    private postService: PostService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.initAllPost();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateTagList(): void {
    this.tags = Array.from(
      new Set([...this.postList.map((d) => d.tags)].flat())
    );
  }

  updatePostList(post: Post | null): void {
    if (post) {
      const index = this.postList.findIndex((d) => d.id === post.id);
      if (index > -1) {
        this.postList[index] = post;
      } else {
        this.postList.push(post);
      }
      if (post.deleted) {
        const copyIndex = this.postListCopy.findIndex((d) => d.id === post.id);
        this.postListCopy[copyIndex].deleted = true;
        this.postList = this.postListCopy.filter((d) => !d.deleted);
      }
      this.updatePosListDependencies();
    }
  }

  filterPostList(value: string) {
    if (value) {
      this.postList = this.postListCopy.filter((d) => d.tags.includes(value));
    } else {
      this.postList = cloneDeep<Post[]>(this.postListCopy);
    }
  }

  trackById(index: number, item: Post): string | number {
    return item.id || index;
  }

  private initAllPost() {
    this.subscription.add(
      this.postService
        .getAll()
        .pipe(
          finalize(() => {
            this.isLoading = false;
            this.cdr.detectChanges();
          }),
          catchError((err) => (console.error(err), of([])))
        )
        .subscribe((postList) => {
          this.postList = postList;
          this.updatePosListDependencies();
        })
    );
  }

  private updatePosListDependencies(): void {
    this.postListCopy = cloneDeep<Post[]>(this.postList);
    this.updateTagList();
  }
}
