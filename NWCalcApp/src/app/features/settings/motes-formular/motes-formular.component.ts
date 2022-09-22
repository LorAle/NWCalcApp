import { STRING_TYPE } from '@angular/compiler';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { GetItemTypesMap, ItemType } from 'src/app/models/item';
import { Mote, MoteType } from '../../../models/mote';

@Component({
  selector: 'nwcalc-motes-formular',
  templateUrl: './motes-formular.component.html',
  styleUrls: ['./motes-formular.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MotesFormularComponent implements OnInit {

  @Input()  moteModel: Mote = new Mote();
  @Output() moteModelChange = new EventEmitter<Mote>();
  // https://stackoverflow.com/questions/71483441/angular-12-two-way-binding-gives-error-the-property-and-event-halves-of-the-t
  moteTypes: [MoteType, string][] = Array.from(Mote.GetMoteTypesMap());
  itemTypes: [ItemType, string][] = Array.from(GetItemTypesMap());

  model: Mote = new Mote();
  submitted = false;

  constructor() { }

  onSubmit() {
    this.submitted = true;
    // Only Points allowed for default
    this.model.minSellOrder = parseFloat(this.model.minSellOrder.toString().replace(',', '.'))
    this.model.maxBuyOrder = parseFloat(this.model.maxBuyOrder.toString().replace(',', '.'))
    this.moteModelChange.emit(this.model);
  }

  reset() {
    this.model = new Mote();
  }

  ngOnInit(): void {
    this.model = this.moteModel;
  }

}
