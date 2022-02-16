import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostListService } from '../post-list.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PostComponent } from './post.component';
import { SafeHTMLPipe } from 'src/app/shared/pipes/safe-html.pipe';
import { CalculatePipe } from 'src/app/shared/pipes/calculate.pipe';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostComponent, SafeHTMLPipe, CalculatePipe],
      imports: [HttpClientTestingModule],
      providers: [PostListService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
