import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectFilterComponent } from './select-filter.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectFilterComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SelectFilterComponent],
})
export class SelectFilterModule {}
