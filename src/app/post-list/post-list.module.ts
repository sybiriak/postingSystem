import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list.component';
import { PostService } from './post.service';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { TagComponent } from './post/tag/tag.component';
import { SafeHTMLPipe } from '../shared/pipes/safe-html.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostListComponent,
    PostComponent,
    TagComponent,
    SafeHTMLPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    PostService
  ],
  exports: [
    PostListComponent
  ]
})
export class PostListModule { }
