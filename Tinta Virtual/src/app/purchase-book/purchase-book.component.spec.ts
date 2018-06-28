import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseBookComponent } from './purchase-book.component';

describe('PurchaseBookComponent', () => {
  let component: PurchaseBookComponent;
  let fixture: ComponentFixture<PurchaseBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
