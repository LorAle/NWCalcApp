import { Component, OnInit } from '@angular/core';
import { Mote } from 'src/app/models/mote';

@Component({
  templateUrl: './motes-input.component.html',
  styleUrls: ['./motes-input.component.scss']
})
export class MotesInputComponent implements OnInit {

  public motes: Mote[];

  constructor() {
    this.motes = Mote.GetAllMoteObjects();
    console.log(JSON.stringify(this.motes))
  }

  ngOnInit(): void {
  }

}
