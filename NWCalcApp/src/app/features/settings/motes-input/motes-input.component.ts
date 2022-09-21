import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Mote } from 'src/app/models/mote';
import { GetItemTypeName, ItemType } from 'src/app/models/item';

@Component({
  templateUrl: './motes-input.component.html',
  styleUrls: ['./motes-input.component.scss']
})
export class MotesInputComponent implements OnInit {

  public motes: Mote[];

  constructor() {
    var temp = localStorage.getItem("Motes");
    this.motes = temp != null ? JSON.parse(temp) : Mote.GetAllMoteObjects();
    console.log(JSON.stringify(this.motes))
  }

  ngOnInit(): void {
  }

  public GetNameForItem(itemType: ItemType)
  {
    return GetItemTypeName(itemType);
  }

  public SaveData(mote: Mote) {
    localStorage.setItem("Motes", JSON.stringify(this.motes));
  }
}
