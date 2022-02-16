import { Subscription } from 'rxjs';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { uniqueValidator } from 'src/app/shared/validators/unique';
import { PostListService } from '../post-list.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagsComponent implements OnInit, OnDestroy {
  @Input() tags: string[] = [];

  @Input() isEditMode = false;

  @Output() tagsUpdated = new EventEmitter<string[]>();

  isAddTagFieldShowed = false;

  availableTags: string[] = [];

  addTagControl: FormControl = new FormControl('');

  private subscription = new Subscription();

  constructor(private postListService: PostListService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.postListService.postListUpdated.subscribe(() => {
        this.setAvailableTags();
      })
    );
    this.setAvailableTags();
    this.setValidation();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  removeTag(tag: string): void {
    this.tags = this.tags.filter((d) => d !== tag);
    this.setValidation();
    this.tagsUpdated.emit(this.tags);
  }

  showAddTagField(): void {
    this.isAddTagFieldShowed = !this.isAddTagFieldShowed;
    if (!this.isAddTagFieldShowed) {
      this.addTagControl.reset();
    }
  }

  addTag(): void {
    const value = this.addTagControl.value.trim();
    if (value && !this.addTagControl.errors) {
      this.tags.push(value);
      this.setValidation();
      this.addTagControl.reset();
      this.tagsUpdated.emit(this.tags);
    }
  }

  setValidation() {
    this.addTagControl.setValidators(uniqueValidator(this.tags));
  }

  setAvailableTags() {
    this.availableTags = this.postListService.getTagList();
  }
}
