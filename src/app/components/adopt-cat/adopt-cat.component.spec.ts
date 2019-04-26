import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptCatComponent } from './adopt-cat.component';

describe('AdoptCatComponent', () => {
  let component: AdoptCatComponent;
  let fixture: ComponentFixture<AdoptCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
