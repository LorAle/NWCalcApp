import { Injectable } from '@angular/core';
import { Mote, MoteType } from 'src/app/models/mote';

@Injectable({
  providedIn: 'root'
})
export class MoteService {

  constructor() { }

  public GetCraftingPricesTableData(): MoteTableRow[] {
    var taxes = 1.2;
    var temp = localStorage.getItem("Motes");
    var motes: Mote[] = temp != null ? JSON.parse(temp) : Mote.GetAllMoteObjects();
    var resp  = <MoteTableRow[]>[];

    for (const moteType of Array.from(Mote.GetMoteTypesMap())) {
      var moteHlp = new MoteTableRow();
      console.log(JSON.stringify(moteType));
      moteHlp.name = moteType[1];

      // Tier 2
      var foundMotePrice = motes.find(m => m.moteType === moteType[0] && m.moteTier === 2)?.minSellOrder ?? 0;
      moteHlp.tierTwoValue =  foundMotePrice;

      // Tier 3
      foundMotePrice = motes.find(m => m.moteType === moteType[0] && m.moteTier === 3)?.minSellOrder ?? 0;
      moteHlp.tierThreeValue = (moteHlp.tierTwoValue > foundMotePrice ? foundMotePrice : moteHlp.tierTwoValue) * 5

      // Tier 4
      foundMotePrice = motes.find(m => m.moteType === moteType[0] && m.moteTier === 4)?.minSellOrder ?? 0;
      moteHlp.tierFourValue = (moteHlp.tierThreeValue > foundMotePrice ? foundMotePrice : moteHlp.tierThreeValue) * 4

      // Tier 5
      foundMotePrice = motes.find(m => m.moteType === moteType[0] && m.moteTier === 5)?.minSellOrder ?? 0;
      moteHlp.tierFiveValue = (moteHlp.tierFourValue > foundMotePrice ? foundMotePrice : moteHlp.tierFourValue) * 3

      moteHlp.tierTwoValue    *= taxes;
      moteHlp.tierThreeValue  *= taxes;
      moteHlp.tierFourValue   *= taxes;
      moteHlp.tierFiveValue   *= taxes;

      resp.push(moteHlp);
    }
    console.log(JSON.stringify(resp));
    return resp;
  }

  public GetSellingPricesTableData() {

  }

  public GetCraftOrBuyTableData() {

  }
}

export class MoteTableRow {
  constructor(
    public name:string           = "",
    public tierTwoValue:number   = 0,
    public tierThreeValue:number = 0,
    public tierFourValue:number  = 0,
    public tierFiveValue:number  = 0,
    ) {

  }

}
