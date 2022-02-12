import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list.component';
import { PostListService } from './post-list.service';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { TagComponent } from './post/tag/tag.component';


@NgModule({
  declarations: [
    PostListComponent,
    PostComponent,
    TagComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    PostListService
  ],
  exports: [
    PostListComponent
  ]
})
export class PostListModule { }
