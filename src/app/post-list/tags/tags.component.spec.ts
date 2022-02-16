import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostListService } from '../post-list.service';
import { TagsComponent } from './tags.component';

const tags = ['tag1', 'tag2', 'tag3'];

describe('TagsComponent', () => {
  let component: TagsComponent;
  let fixture: ComponentFixture<TagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TagsComponent],
      imports: [HttpClientTestingModule],
      providers: [PostListService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.tags = tags.slice();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('removeTag', () => {
    it('should delete tag from tag list and "tagsUpdated" emited', () => {
      spyOn(component.tagsUpdated, 'emit');
      component.removeTag('tag3');
      expect(component.tags).toEqual(['tag1', 'tag2']);
      expect(component.tagsUpdated.emit).toHaveBeenCalledOnceWith([
        'tag1',
        'tag2',
      ]);
    });
  });

  describe('showAddTagField', () => {
    it('should update isAddTagFieldShowed flag', () => {
      component.isAddTagFieldShowed = false;
      component.showAddTagField();
      expect(component.isAddTagFieldShowed).toBeTrue();
    });

    it('should update isAddTagFieldShowed flag and clear add tag control', () => {
      const value = 'test';
      component.isAddTagFieldShowed = true;
      component.addTagControl.setValue(value, { emitEvent: false });
      expect(component.addTagControl.value).toBe(value);
      component.showAddTagField();
      expect(component.isAddTagFieldShowed).toBeFalse();
      expect(component.addTagControl.value).toBeNull();
    });
  });

  describe('addTag', () => {
    it('should add new tag and trigger updates', () => {
      const newTag = 'test tag';
      spyOn(component.tagsUpdated, 'emit');
      component.addTagControl.setValue(newTag, { emitEvent: false });
      component.addTag();
      expect(component.tags[3]).toEqual(newTag);
      expect(component.addTagControl.value).toBeNull();
      expect(component.tagsUpdated.emit).toHaveBeenCalledOnceWith([
        ...tags,
        newTag,
      ]);
    });

    it('should NOT add new tag if value is empty', () => {
      component.addTagControl.setValue('   ', { emitEvent: false });
      expect(component.tags.length).toBe(tags.length);
    });

    it('should NOT add new tag if value is invalid', () => {
      component.addTagControl.setValue('tag 2', { emitEvent: false });
      component.addTagControl.setErrors({ error: true });
      expect(component.tags.length).toBe(tags.length);
    });
  });
});
