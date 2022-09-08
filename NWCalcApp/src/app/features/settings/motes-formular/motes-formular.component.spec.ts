import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotesFormularComponent } from './motes-formular.component';

describe('MotesFormularComponent', () => {
  let component: MotesFormularComponent;
  let fixture: ComponentFixture<MotesFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotesFormularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotesFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
