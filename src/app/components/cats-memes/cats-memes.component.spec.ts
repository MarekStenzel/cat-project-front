import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsMemesComponent } from './cats-memes.component';

describe('CatsMemesComponent', () => {
  let component: CatsMemesComponent;
  let fixture: ComponentFixture<CatsMemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatsMemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsMemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
