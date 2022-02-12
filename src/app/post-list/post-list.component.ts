import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { finalize, Subscription } from 'rxjs';
import { Post } from '../shared/models/post';
import { PostListService } from './post-list.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit, OnDestroy {

  postList: Post[] = [];

  isLoading = true;

  private subscribtion = new Subscription();

  constructor(
    private postService: PostListService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.subscribtion.add(this.postService.getAll()
      .pipe(
        finalize(() => {
          this.isLoading = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe(postList => this.postList = postList));
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

  trackById(index: number, item: Post): string | number {
    return item.id || index;
  }
}
