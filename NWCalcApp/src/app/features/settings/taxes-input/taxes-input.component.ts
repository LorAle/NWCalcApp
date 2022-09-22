import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'nwcalc-taxes-input',
  templateUrl: './taxes-input.component.html',
  styleUrls: ['./taxes-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaxesInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
