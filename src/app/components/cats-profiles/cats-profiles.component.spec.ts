import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsProfilesComponent } from './cats-profiles.component';

describe('CatsProfilesComponent', () => {
  let component: CatsProfilesComponent;
  let fixture: ComponentFixture<CatsProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatsProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
