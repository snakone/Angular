import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelaxAppComponent } from './relax-app.component';

describe('RelaxAppComponent', () => {
  let component: RelaxAppComponent;
  let fixture: ComponentFixture<RelaxAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelaxAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelaxAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
