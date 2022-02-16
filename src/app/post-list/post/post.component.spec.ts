import { postList } from './../../shared/mocks/postList';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostListService } from '../post-list.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PostComponent } from './post.component';
import { SafeHTMLPipe } from 'src/app/shared/pipes/safe-html.pipe';
import { CalculatePipe } from 'src/app/shared/pipes/calculate.pipe';
import { Post } from 'src/app/shared/models/post';
import { PostRaw } from 'src/app/shared/interfaces/post';
import { of } from 'rxjs';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let postListService: PostListService;

  const newPostFields = {
    title: 'new title',
    text: 'new text',
    tags: ['new tag'],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostComponent, SafeHTMLPipe, CalculatePipe],
      imports: [HttpClientTestingModule],
      providers: [PostListService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    postListService = TestBed.inject(PostListService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('savePost', () => {
    it('should call update post method if post has id', () => {
      spyOn(component, 'updatePost');
      component.post = postList[1];
      component.form.setValue(newPostFields, { emitEvent: false });
      component.savePost();
      expect(component.updatePost).toHaveBeenCalledOnceWith(
        new Post({
          id: postList[1].id,
          ...newPostFields,
        })
      );
    });

    it('should call add post method if post has not id', () => {
      spyOn(component, 'addPost');
      component.form.setValue(newPostFields, { emitEvent: false });
      component.savePost();
      expect(component.addPost).toHaveBeenCalledOnceWith(
        new Post({
          ...newPostFields,
        } as PostRaw)
      );
    });
  });

  describe('updatePost', () => {
    it('should set to view mode if updated successfully', () => {
      spyOn(postListService, 'updatePost').and.returnValue(of(true));
      component.isEditMode = true;
      component.updatePost(postList[1]);
      expect(component.isEditMode).toBeFalse();
    });

    it('should NOT change view mode if updating failed', () => {
      spyOn(postListService, 'updatePost').and.returnValue(of(false));
      component.isEditMode = true;
      component.updatePost(postList[1]);
      expect(component.isEditMode).toBeTrue();
    });
  });

  describe('addPost', () => {
    it('should clear form and set to view mode if added successfully', () => {
      spyOn(postListService, 'addPost').and.returnValue(of(true));
      component.isEditMode = true;
      component.tags = postList[1].tags;
      component.form.setValue(newPostFields, { emitEvent: false });
      component.addPost(new Post({ ...newPostFields } as PostRaw));
      expect(component.form.value).toEqual({
        title: null,
        text: null,
        tags: null,
      });
      expect(component.tags).toEqual([]);
      expect(component.isEditMode).toBeTrue();
    });

    it('should NOT clear form and set to view mode if adding failed', () => {
      spyOn(postListService, 'addPost').and.returnValue(of(false));
      component.isEditMode = true;
      component.form.setValue(newPostFields, { emitEvent: false });
      component.tags = postList[1].tags;
      component.addPost(new Post({ ...newPostFields } as PostRaw));
      expect(component.form.value).toEqual(newPostFields);
      expect(component.tags).toEqual(postList[1].tags);
      expect(component.isEditMode).toBeTrue();
    });
  });

  describe('clearChanges', () => {
    it('should clear changes to initial post value', () => {
      component.post = postList[1];
      component.isEditMode = true;
      component.form.setValue(newPostFields, { emitEvent: false });
      component.tags = newPostFields.tags;
      component.clearChanges();
      const samePostFields = Object.assign({}, postList[1]) as any;
      delete samePostFields.id;
      expect(component.form.value).toEqual(samePostFields);
      expect(component.tags).toEqual(samePostFields.tags);
      expect(component.isEditMode).toBeFalse();
    });
  });

  describe('setTags', () => {
    it('it should set empty array if no control tags', () => {
      component.tags = postList[1].tags;
      component.form.get('tags')?.setValue(null, { emitEvent: false });
      component['setTags']();
      expect(component.tags).toEqual([]);
    });

    it('it should set new tags', () => {
      component.tags = postList[1].tags;
      component.form.setValue(newPostFields);
      component['setTags']();
      expect(component.tags).toEqual(newPostFields.tags);
    });
  });
});
