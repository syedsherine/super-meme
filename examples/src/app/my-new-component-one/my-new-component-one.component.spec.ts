import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewComponentOneComponent } from './my-new-component-one.component';

describe('MyNewComponentOneComponent', () => {
  let component: MyNewComponentOneComponent;
  let fixture: ComponentFixture<MyNewComponentOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNewComponentOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
