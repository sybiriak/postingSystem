import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectFilterComponent } from './select-filter.component';

describe('SelectFilterComponent', () => {
  let component: SelectFilterComponent;
  let fixture: ComponentFixture<SelectFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectFilterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('initFilter', () => {
    describe('control.valueChanges', () => {
      it('should change value', () => {
        const newValue = 'test';
        spyOn(component.filtered, 'emit');
        component.control.patchValue(newValue);
        expect(component.filtered.emit).toHaveBeenCalledWith(newValue);
      });
    });
  });

  describe('ngOnChanges', () => {
    const changes = {
      options: {
        firstChange: false,
        currentValue: ['test1', 'test2'],
        previousValue: [],
        isFirstChange: () => {
          return false;
        },
      },
    };

    it('should clear control value if it is not included in the options', () => {
      component.control.setValue('test3', { emitEvent: false });
      component.ngOnChanges(changes);
      expect(component.control.value).toBe('');
    });

    it('should emit filtered event', () => {
      const value = 'test1';
      spyOn(component.filtered, 'emit');
      component.control.setValue(value, { emitEvent: false });
      component.ngOnChanges(changes);
      expect(component.control.value).toBe(value);
      expect(component.filtered.emit).toHaveBeenCalledWith(value);
    });
  });
});
