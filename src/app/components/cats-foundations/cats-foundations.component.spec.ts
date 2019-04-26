import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsFoundationsComponent } from './cats-foundations.component';

describe('CatsFoundationsComponent', () => {
  let component: CatsFoundationsComponent;
  let fixture: ComponentFixture<CatsFoundationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatsFoundationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsFoundationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
