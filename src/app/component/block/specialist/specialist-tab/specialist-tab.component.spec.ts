import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistTabComponent } from './specialist-tab.component';

describe('SpecialistTabComponent', () => {
  let component: SpecialistTabComponent;
  let fixture: ComponentFixture<SpecialistTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialistTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialistTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
