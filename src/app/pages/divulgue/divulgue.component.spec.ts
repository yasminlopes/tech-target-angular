import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivulgueComponent } from './divulgue.component';

describe('DivulgueComponent', () => {
  let component: DivulgueComponent;
  let fixture: ComponentFixture<DivulgueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivulgueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivulgueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
