import { FormControl } from '@angular/forms';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, distinctUntilChanged, finalize, of, Subscription } from 'rxjs';
import { Post } from '../shared/models/post';
import { PostService } from './post.service';
import { cloneDeep } from '../shared/utils/cloneDeep';
import { PostRaw } from '../shared/interfaces/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit, OnDestroy {

  postList: Post[] = [];

  tags: string[] = [];

  isLoading = true;

  tagFilterControl = new FormControl('');

  newPost: Post = new Post({} as PostRaw);

  private postListCopy: Post[] = [];

  private subscribtion = new Subscription();

  constructor(
    private postService: PostService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.initAllPost();
    this.initTagFilter();
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

  updateTagList(): void {
    this.tags = Array.from(new Set([...this.postList.map(d => d.tags)].flat()));
  }

  updatePostList(post: Post | null): void {
    if (post) {
      const index = this.postList.findIndex(d => d.id === post.id);
      if (index > -1) {
        this.postList[index] = post;
      } else {
        this.postList.push(post);
        this.newPost = new Post({} as PostRaw);
      }
      if (post.deleted) {
        this.postList = this.postListCopy.filter(d => !d.deleted);
      }
      this.updatePosListDependencies();
      this.filterPostList();
    }
  }

  trackById(index: number, item: Post): string | number {
    return item.id || index;
  }

  private initAllPost() {
    this.subscribtion.add(this.postService.getAll()
    .pipe(
      finalize(() => {
        this.isLoading = false;
        this.cdr.detectChanges();
      }),
      catchError((err) => (console.error(err), of([])))
    )
    .subscribe(postList => {
      this.postList = postList;
      this.updatePosListDependencies();
    }));
  }

  private initTagFilter(): void {
    this.subscribtion.add(
      this.tagFilterControl.valueChanges.pipe(
        distinctUntilChanged()
      ).subscribe((value: string) => {
        this.filterPostList(value);
      })
    );
  }

  private filterPostList(value: string = this.tagFilterControl.value) {
    if (value && this.tags.includes(value)) {
      this.postList = this.postListCopy.filter(d => d.tags.includes(value));
    } else {
      this.postList = cloneDeep<Post[]>(this.postListCopy);
      if (value) { 
        this.tagFilterControl.patchValue('', { emitEvent: false });
      }
    }
  }

  private updatePosListDependencies(): void {
    this.postListCopy = cloneDeep<Post[]>(this.postList);
    this.updateTagList();
  }
}
