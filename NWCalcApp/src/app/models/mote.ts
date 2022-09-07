export enum MoteType {
  Air,
  Death,
  Earth,
  Fire,
  Life,
  Soul,
  Water,
}

export class Mote {

  public static MoteTypesMap: Map<MoteType, string> = Mote.GetMoteTypesMap();
  public name: string = '';

  constructor(
    public id: number,
    public type: MoteType,
    public max_buy_order: number,
    public min_sell_order: number
  ) {
    this.name = Mote.GetNameForMoteType(type);
  }

  static GetNameForMoteType(type: MoteType): string {
    return Mote.MoteTypesMap.get(type) == undefined ? '' : Mote.MoteTypesMap.get(type) as string;
  }

  static GetMoteTypesMap(): Map<MoteType, string> {
    return new Map<MoteType, string>([[MoteType.Air, 'Air'], [MoteType.Death, 'Death'],[MoteType.Earth, 'Earth'],[MoteType.Fire, 'Fire'],[MoteType.Life, 'Life'],[MoteType.Soul, 'Soul'],[MoteType.Water, 'Water'],]);
  }
}


