import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { PostRaw } from '../shared/interfaces/post';
import { postList, postListRaw } from '../shared/mocks/postList';
import { Post } from '../shared/models/post';

import { PostListService } from './post-list.service';

describe('PostListService', () => {
  let postListService: PostListService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostListService],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    postListService = new PostListService(httpClientSpy);
  });

  it('should be created', () => {
    expect(postListService).toBeTruthy();
  });

  describe('getAll', () => {
    it('should return expected post list', fakeAsync(() => {
      const expectedPostList = postListRaw;

      httpClientSpy.get.and.returnValue(of(expectedPostList));
      spyOn(postListService.postListUpdated, 'next');
      postListService.getAll();
      tick(500);
      expect(postListService.postListUpdated.next).toHaveBeenCalledOnceWith(
        expectedPostList.map((d) => new Post(d))
      );
    }));

    it('should return empty array if has error', () => {
      httpClientSpy.get.and.returnValue(throwError(() => new Error('404')));
      spyOn(postListService.postListUpdated, 'next');
      postListService.getAll();
      expect(postListService.postListUpdated.next).toHaveBeenCalledOnceWith([]);
    });
  });

  describe('updatePost', () => {
    it('should update post', () => {
      const post = postList[1];
      postListService['postList'] = [post];
      const newPost = Object.assign({}, post);
      newPost.title = 'new test title';

      spyOn(postListService.postListUpdated, 'next');
      postListService.updatePost(newPost).subscribe();
      expect(postListService.postListUpdated.next).toHaveBeenCalledOnceWith([
        newPost,
      ]);
    });
  });

  describe('addPost', () => {
    it('should add post', () => {
      const post = postList[1];
      spyOn(postListService.postListUpdated, 'next');
      postListService.addPost(post).subscribe();
      expect(postListService.postListUpdated.next).toHaveBeenCalledOnceWith([
        post,
      ]);
    });
  });

  describe('deletePost', () => {
    it('should delete post', () => {
      const post = postList[1];
      postListService['postList'] = [post];

      spyOn(postListService.postListUpdated, 'next');
      postListService.deletePost(post.id).subscribe();
      expect(postListService.postListUpdated.next).toHaveBeenCalledOnceWith([]);
    });
  });

  describe('getTagList', () => {
    it('should return tag list', () => {
      postListService['postList'] = postList;

      expect(postListService.getTagList()).toEqual(['tag1', 'tag2', 'tag3']);
    });

    it('should return empty array if post list is empty', () => {
      postListService['postList'] = [];
      expect(postListService.getTagList()).toEqual([]);
    });
  });

  describe('triggerUpdate', () => {
    it('should emit postListUpdated', () => {
      spyOn(postListService.postListUpdated, 'next');
      postListService.triggerUpdate();
      expect(postListService.postListUpdated.next).toHaveBeenCalledTimes(1);
    });
  });
});
