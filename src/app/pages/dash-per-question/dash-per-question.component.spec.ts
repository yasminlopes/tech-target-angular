import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPerQuestionComponent } from './dash-per-question.component';

describe('DashPerQuestionComponent', () => {
  let component: DashPerQuestionComponent;
  let fixture: ComponentFixture<DashPerQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashPerQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashPerQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
