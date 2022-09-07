import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Mote, MoteType } from '../../../models/mote';

@Component({
  selector: 'nwcalc-motes-formular',
  templateUrl: './motes-formular.component.html',
  styleUrls: ['./motes-formular.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MotesFormularComponent implements OnInit {

  motetypes = Array.from(Mote.GetMoteTypesMap());

  model = new Mote(MoteType.Death, MoteType.Death, 124, 135);

  submitted = false;

  constructor() { }

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Mote(MoteType.Air, MoteType.Air, 0, 0);
  }

  ngOnInit(): void {
  }

}
