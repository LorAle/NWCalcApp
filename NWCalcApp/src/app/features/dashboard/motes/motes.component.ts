import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MoteService, MoteTableRow } from 'src/app/core/services/Calc/mote.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'nwcalc-motes',
  templateUrl: './motes.component.html',
  styleUrls: ['./motes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MotesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  craftingPricesColumns: string[] = [];
  craftingTableData: MoteTableRow[] = [];

  dataSource = ELEMENT_DATA;

  constructor(
    moteService: MoteService
  ) {
    this.craftingTableData = moteService.GetCraftingPricesTableData();
    this.craftingPricesColumns = Object.getOwnPropertyNames(this.craftingTableData[0]);
  }

  ngOnInit(): void {
  }

  public GetColumnName(name: string): string
  {
    return name[0].toUpperCase() + name.substring(1);
  }

}
