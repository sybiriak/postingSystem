import { catchError, of, Subscription } from 'rxjs';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from 'src/app/shared/models/post';
import { PostService } from '../post.service';
import { uniqueValidator } from 'src/app/shared/validators/unique';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements OnChanges, OnInit, OnDestroy {
  @Input() post: Post = {} as Post;

  @Input() tags: string[] = [];

  @Input() isEditMode = false;

  @Output() postUpdated = new EventEmitter<Post | null>();

  availableTags: string[] = [];

  isAddTagFieldShowed = false;

  form: FormGroup = new FormGroup({});

  addTagControl: FormControl = new FormControl('');

  subscription = new Subscription();

  constructor(
    private postService: PostService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tags'] && changes['tags'].currentValue) {
      this.updateAvailableTags(changes);
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(this.post.title),
      text: new FormControl(this.post.text),
      tags: new FormControl(this.post.tags || []),
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setToEditMode(isEdit: boolean): void {
    this.isEditMode = isEdit;
  }

  clearChanges(): void {
    this.post.id ? this.form.patchValue(this.post) : this.form.reset();
    this.showAddTagField(false);
    this.setToEditMode(false);
    this.updateAvailableTags();
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
      this.postService
        .updatePost(post)
        .pipe(catchError((err) => (console.error(err), of(false))))
        .subscribe((updated: boolean) => {
          if (updated) {
            this.setToEditMode(false);
            this.postUpdated.emit(post);
          }
        })
    );
  }

  addPost(post: Post): void {
    this.subscription.add(
      this.postService
        .addPost(post)
        .pipe(catchError((err) => (console.error(err), of(null))))
        .subscribe((newPost: Post | null) => {
          if (newPost) {
            this.postUpdated.emit(newPost);
            this.clearChanges();
            this.setToEditMode(true);
          }
        })
    );
  }

  deletePost(): void {
    this.subscription.add(
      this.postService
        .deletePost(this.post.id)
        .pipe(catchError((err) => (console.error(err), of(false))))
        .subscribe((deleted: boolean) => {
          if (deleted) {
            this.post.deleted = true;
            this.postUpdated.emit(this.post);
          }
        })
    );
  }

  showAddTagField(show?: boolean): void {
    this.isAddTagFieldShowed = show ?? !this.isAddTagFieldShowed;
    if (!this.isAddTagFieldShowed) {
      this.addTagControl.reset();
    }
  }

  updateTags(tag: string | null): void {
    const tagsControl = this.form.get('tags');
    if (tagsControl && tag) {
      let tags: string[] = tagsControl.value || [];
      if (tags.includes(tag)) {
        tags = tags.filter((d) => d !== tag);
      } else {
        tags.push(tag);
      }
      tagsControl.patchValue(tags);
    }
    this.updateAvailableTags();
  }

  addTag(): void {
    const value = this.addTagControl.value.trim();
    if (value && !this.addTagControl.errors) {
      this.updateTags(value);
      this.addTagControl.reset();
    }
  }

  private updateAvailableTags(changes?: SimpleChanges) {
    if (changes) {
      this.availableTags = changes['tags'].currentValue.filter(
        (d: string) => !this.post.tags?.includes(d)
      );
    } else {
      this.availableTags = this.tags.filter(
        (d: string) => !this.form.get('tags')?.value?.includes(d)
      );
    }
    this.addTagControl.setValidators(
      uniqueValidator(this.form.get('tags')?.value)
    );
  }
}
