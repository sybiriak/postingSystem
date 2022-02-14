import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PostRaw } from 'src/app/shared/interfaces/post';
import { Post } from 'src/app/shared/models/post';
import { PostListService } from '../post-list.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit, OnDestroy {

  @Input() post: Post = new Post({} as PostRaw);

  @Input() isEditMode = false;
  
  form: FormGroup = new FormGroup({});

  tags: string[] = [];

  private subscription = new Subscription();

  constructor(private postListService: PostListService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(this.post.title),
      text: new FormControl(this.post.text),
      tags: new FormControl(this.post.tags || []),
    });

    this.setTags();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  savePost(): void {
    const post = new Post(Object.assign({}, this.post, this.form.value));
    if (post.id) {
      this.updatePost(post);
    } else {
      this.addPost(post);
    }
  }

  updatePost(post: Post): void {
    this.subscription.add(
      this.postListService.updatePost(post).subscribe((updated: boolean) => {
        if (updated) {
          this.setToEditMode(false);
        }
      })
    );
  }

  addPost(post: Post): void {
    this.subscription.add(
      this.postListService.addPost(post).subscribe((added: boolean) => {
        if (added) {
          this.clearChanges();
        }
      })
    );
  }

  deletePost(): void {
    this.subscription.add(
      this.postListService.deletePost(this.post.id).subscribe()
    );
  }

  setToEditMode(isEdit: boolean): void {
    this.isEditMode = isEdit;
  }

  clearChanges(): void {
    this.post.id ? this.form.patchValue(this.post) : this.form.reset();
    this.setTags();
    this.setToEditMode(!this.post.id);
  }

  updateTagsControl(tags: string[]): void {
    this.form.get('tags')?.patchValue(tags);
    this.setTags();
  }

  private setTags(): void {
    this.tags = [...this.form.get('tags')?.value || []];
  }
}
