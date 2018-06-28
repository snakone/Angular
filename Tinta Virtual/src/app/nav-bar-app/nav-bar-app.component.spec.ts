import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarAppComponent } from './nav-bar-app.component';

describe('NavBarAppComponent', () => {
  let component: NavBarAppComponent;
  let fixture: ComponentFixture<NavBarAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
