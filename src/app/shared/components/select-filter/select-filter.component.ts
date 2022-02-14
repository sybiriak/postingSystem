import { Subscription } from 'rxjs';
import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.scss'],
})
export class SelectFilterComponent implements OnChanges, OnInit, OnDestroy {
  @Input() options: string[] | null = [];

  @Output() filtered = new EventEmitter<string>();

  control = new FormControl('');

  private subscription = new Subscription();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['options'] && !changes['options'].firstChange) {
      if (!changes['options'].currentValue.includes(this.control.value)) {
        this.control.patchValue('', { emitEvent: true });
      } else {
        this.control.updateValueAndValidity({ emitEvent: true });
      }
    }
  }

  ngOnInit(): void {
    this.initFilter();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private initFilter(): void {
    this.subscription.add(
      this.control.valueChanges.subscribe((value: string) => {
        this.filtered.emit(value);
      })
    );
  }
}
