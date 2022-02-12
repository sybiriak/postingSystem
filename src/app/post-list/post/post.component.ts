import { catchError, of, Subscription } from 'rxjs';
import { ChangeDetectionStrategy, Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from 'src/app/shared/models/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit, OnDestroy {

  @Input() post: Post | null = null;

  isEditMode = false;

  form: FormGroup = new FormGroup({});

  subscription = new Subscription();

  constructor(
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(this.post?.title),
      text: new FormControl(this.post?.text),
      tags: new FormControl(this.post?.tags)
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setToEditMode(isEdit: boolean): void {
    this.isEditMode = isEdit;
  }

  clearChanges(): void {
    this.form.patchValue(this.post || {});
    this.setToEditMode(false);
  }

  updateTags(tag: string | null): void {
    const tagsControl = this.form.get('tags');
    if (tagsControl && tag) {
      tagsControl.patchValue((tagsControl.value as string[]).filter(d => d !== tag));
    }
  }

  saveComment(): void {
    this.post = new Post(Object.assign({}, this.post, this.form.value));
    this.subscription.add(
      this.postService.updatePost(this.post)
        .pipe(
          catchError((err) => (console.error(err), of(null)))
        )
        .subscribe(() => this.setToEditMode(false))
    );
  }
}
