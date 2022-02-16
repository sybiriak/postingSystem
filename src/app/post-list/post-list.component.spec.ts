import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { postList } from '../shared/mocks/postList';

import { PostListComponent } from './post-list.component';
import { PostListService } from './post-list.service';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;
  let postListService: PostListService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostListComponent],
      imports: [HttpClientTestingModule],
      providers: [PostListService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    postListService = TestBed.inject(PostListService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('preparePostList', () => {
    it('should return initial post list', () => {
      expect(component['preparePostList'](postList)).toEqual(postList);
    });

    it('should return post list with "tag2"', () => {
      component['searchValue'] = 'tag2';
      expect(component['preparePostList'](postList)).toEqual(postList);
    });

    it('should return post list with "tag3"', () => {
      postListService['postList'] = postList;
      component['searchValue'] = 'tag3';
      expect(component['preparePostList'](postList)).toEqual([postList[1]]);
    });

    it('should return full post list if search value is "tag3" but this tag is not present in tag list', () => {
      postListService['postList'] = [postList[0]];
      component['searchValue'] = 'tag3';
      expect(component['preparePostList'](postList)).toEqual(postList);
    });
  });

  describe('filterPostList', () => {
    it('it should set search value and trigger update', () => {
      const searchValue = 'tag3';
      postListService['postList'] = postList;
      spyOn(postListService, 'triggerUpdate');
      component.filterPostList(searchValue);
      expect(component['searchValue']).toBe(searchValue);
      expect(postListService.triggerUpdate).toHaveBeenCalledTimes(1);
    });
  });
});
