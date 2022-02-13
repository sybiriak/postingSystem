import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent implements OnInit {
  @Input() tag: string = '';

  @Input() isEditMode = false;

  @Output() tagRemoved = new EventEmitter<string | null>();

  constructor() {}

  ngOnInit(): void {}

  removeTag(): void {
    this.tagRemoved.emit(this.tag);
  }
}
