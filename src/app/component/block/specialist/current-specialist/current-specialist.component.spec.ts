import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSpecialistComponent } from './current-specialist.component';

describe('CurrentSpecialistComponent', () => {
  let component: CurrentSpecialistComponent;
  let fixture: ComponentFixture<CurrentSpecialistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentSpecialistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentSpecialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
