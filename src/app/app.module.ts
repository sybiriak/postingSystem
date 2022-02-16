import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostListModule } from './post-list/post-list.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PostListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
