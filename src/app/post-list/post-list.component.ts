import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from 'src/app/shared/models/post';
import { PostListUpdates } from '../shared/interfaces/post';
import { PostListService } from './post-list.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit {

  postList$: Observable<PostListUpdates>;

  private searchValue: string = '';

  constructor(
    private postListService: PostListService
  ) {
    this.postList$ = this.postListService.postListUpdated.asObservable()
      .pipe(
        map(post => {
          if (!post.tags?.includes(this.searchValue)) {
            this.searchValue = '';
          }
          post.list = this.searchValue ? post.list.filter(d => d.tags.includes(this.searchValue)) : post.list;
          return post;
        })
      );
  }

  ngOnInit(): void {
    this.postListService.getAll();
  }

  trackById(index: number, item: Post): string | number {
    return item.id || index;
  }

  filterPostList(value: string) {
    this.searchValue = value;
    this.postListService.triggerUpdate();
  }

}
