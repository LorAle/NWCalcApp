import { ChangeDetectorRef, Component, OnInit, SimpleChanges } from '@angular/core';
import { Mote } from 'src/app/models/mote';
import { GetItemTypeName, ItemType } from 'src/app/models/item';
import { trigger, transition, style, animate } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';

@Component({
  templateUrl: './motes-input.component.html',
  styleUrls: ['./motes-input.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-{{transform}}%)'}),
        animate('400ms {{delay}}ms ease-in', style({transform: 'translateY(0%)', rotate: '{{rotate}}deg'}))
      ], {params: {delay: 0, transform: 0, rotate: 0}}),
      transition(':leave', [
        animate('400ms {{delay}}ms ease-in', style({transform: 'translateY(-{{transform}}%)', rotate: '-{{rotate}}deg'}))
      ], {params: {delay: 0, transform: 0, rotate: 0}})
    ])
  ]
})
export class MotesInputComponent implements OnInit {

  public motes$: BehaviorSubject<Mote[]>;
  public SortOrder = [{key: 0, value: "Type asc"}, {key: 1, value: "Tier asc"}, {key: 2, value: "Type desc"}, {key: 3, value: "Tier desc"}]

  constructor(
  ) {
    var temp = localStorage.getItem("Motes");
    this.motes$ = new BehaviorSubject<Mote[]>(temp != null ? JSON.parse(temp) : Mote.GetAllMoteObjects());
    this.orderBy()
  }

  ngOnInit(): void {
  }

  public getNameForItem(itemType: ItemType)
  {
    return GetItemTypeName(itemType);
  }

  public saveData(mote: Mote) {
    localStorage.setItem("Motes", JSON.stringify(this.motes$.getValue()));
  }

  public orderBy(sortBy: string = "0") {
    switch (sortBy) {
      case "1":
        this.motes$.next(this.motes$.getValue().sort(this.SortByTierAsc));
        break;
      case "2":
        this.motes$.next(this.motes$.getValue().sort(this.SortByTypeDesc));
        break;
      case "3":
        this.motes$.next(this.motes$.getValue().sort(this.SortByTierDesc));
        break;
      case "0":
      default:
        this.motes$.next(this.motes$.getValue().sort(this.SortByTypeAsc));
        break;
    }
  }

  public SortByTierAsc(n1: Mote, n2: Mote) {
    if (n1.moteTier > n2.moteTier) {
      return 1;
    }

    if (n1.moteTier < n2.moteTier) {
        return -1;
    }

    return 0;
  }

  public SortByTypeAsc(n1: Mote, n2: Mote) {
    if (n1.moteType > n2.moteType) {
      return 1;
    }

    if (n1.moteType < n2.moteType) {
        return -1;
    }

    return 0;
  }

  public SortByTierDesc(n1: Mote, n2: Mote) {
    if (n1.moteTier > n2.moteTier) {
      return -1;
    }

    if (n1.moteTier < n2.moteTier) {
        return 1;
    }

    return 0;
  }

  public SortByTypeDesc(n1: Mote, n2: Mote) {
    if (n1.moteType > n2.moteType) {
      return -1;
    }

    if (n1.moteType < n2.moteType) {
        return 1;
    }

    return 0;
  }
}
