import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotesInputComponent } from './motes-input.component';

describe('MotesInputComponent', () => {
  let component: MotesInputComponent;
  let fixture: ComponentFixture<MotesInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotesInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
