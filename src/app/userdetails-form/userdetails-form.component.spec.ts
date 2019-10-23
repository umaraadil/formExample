import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailsFormComponent } from './userdetails-form.component';

describe('UserdetailsFormComponent', () => {
  let component: UserdetailsFormComponent;
  let fixture: ComponentFixture<UserdetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
