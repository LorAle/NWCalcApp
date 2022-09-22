import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxesInputComponent } from './taxes-input.component';

describe('TaxesInputComponent', () => {
  let component: TaxesInputComponent;
  let fixture: ComponentFixture<TaxesInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxesInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
