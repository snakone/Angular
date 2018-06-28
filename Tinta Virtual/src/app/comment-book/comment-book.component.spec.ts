import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentBookComponent } from './comment-book.component';

describe('CommentBookComponent', () => {
  let component: CommentBookComponent;
  let fixture: ComponentFixture<CommentBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
