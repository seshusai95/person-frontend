import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPersonComponent } from './get-person.component';

describe('GetPersonComponent', () => {
  let component: GetPersonComponent;
  let fixture: ComponentFixture<GetPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
