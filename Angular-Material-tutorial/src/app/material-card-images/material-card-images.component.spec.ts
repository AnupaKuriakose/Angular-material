import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCardImagesComponent } from './material-card-images.component';

describe('MaterialCardImagesComponent', () => {
  let component: MaterialCardImagesComponent;
  let fixture: ComponentFixture<MaterialCardImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialCardImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialCardImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
