import { HttpClientModule } from '@angular/common/http';
import { SelectFilterModule } from '../shared/components/select-filter/select-filter.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list.component';
import { PostListService } from './post-list.service';
import { PostComponent } from './post/post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SafeHTMLPipe } from '../shared/pipes/safe-html.pipe';
import { TagsComponent } from './tags/tags.component';

@NgModule({
  declarations: [PostListComponent, PostComponent, SafeHTMLPipe, TagsComponent],
  imports: [
    CommonModule,
    SelectFilterModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [PostListService],
  exports: [PostListComponent],
})
export class PostListModule {}
