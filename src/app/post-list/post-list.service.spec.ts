import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PostListService } from './post-list.service';

describe('PostListService', () => {
  let service: PostListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostListService]
    });
    service = TestBed.inject(PostListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
