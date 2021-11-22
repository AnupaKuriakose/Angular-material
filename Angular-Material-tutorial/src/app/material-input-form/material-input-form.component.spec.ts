import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialInputFormComponent } from './material-input-form.component';

describe('MaterialInputFormComponent', () => {
  let component: MaterialInputFormComponent;
  let fixture: ComponentFixture<MaterialInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialInputFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
