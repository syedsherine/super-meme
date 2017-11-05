import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoneComponent } from './productone.component';

describe('ProductoneComponent', () => {
  let component: ProductoneComponent;
  let fixture: ComponentFixture<ProductoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
