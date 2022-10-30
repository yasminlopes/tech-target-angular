import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormErroComponent } from './form-erro.component';

describe('FormErroComponent', () => {
  let component: FormErroComponent;
  let fixture: ComponentFixture<FormErroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormErroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
