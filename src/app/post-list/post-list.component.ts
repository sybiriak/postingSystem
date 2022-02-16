import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from 'src/app/shared/models/post';
import { PostListService } from './post-list.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit {

  postList$: Observable<Post[]>;

  tags: string[] = [];

  private searchValue: string = '';

  constructor(
    private postListService: PostListService
  ) {
    this.postList$ = this.postListService.postListUpdated.asObservable()
      .pipe(
        map(this.preparePostList.bind(this))
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

  private preparePostList(postList: Post[]): Post[] {
    this.tags = this.postListService.getTagList();
    if (!this.tags?.includes(this.searchValue)) {
      this.searchValue = '';
    }
    postList = this.searchValue ? postList.filter(d => d.tags.includes(this.searchValue)) : postList;
    return postList;
  }
}
