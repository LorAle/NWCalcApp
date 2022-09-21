import { Item, ItemType } from "./item";

export const MoteTierValues = [2,3,4,5];
export type MoteTier = typeof MoteTierValues[number];

export enum MoteType {
  Air,
  Death,
  Earth,
  Fire,
  Life,
  Soul,
  Water,
}

export class Mote implements Item {

  public static MoteTypesMap: Map<MoteType, string> = Mote.GetMoteTypesMap();
  name: string;
  imageURL: string;
  itemType: ItemType;

  constructor(
    // public id: string,
    public maxBuyOrder: number = 0,
    public minSellOrder: number = 0,
    public moteTier: MoteTier = 2,
    public moteType: MoteType = MoteType.Air,
  ) {
    this.itemType = moteTier == 2 ? ItemType.Ressource : ItemType.Refined;
    this.name = Mote.GetNameForMoteType(moteType, moteTier);
    this.imageURL = Mote.GetImagePathForMoteType(moteType);
  }

  static GetNameForMoteType(moteType: MoteType, tier?: MoteTier): string {
    var resp = Mote.MoteTypesMap.get(moteType) == undefined ? '' : Mote.MoteTypesMap.get(moteType) as string;

    switch (tier) {
      case 3:
        resp += " Wasp";
        break;
      case 4:
        resp += " Essence";
        break;
      case 5:
        resp += " Quintessence";
        break;
      case 2:
      default:
        resp += " Mote";
        break;
    }

    return resp;
  }

  static GetMoteTypesMap(): Map<MoteType, string> {
    return new Map<MoteType, string>([[MoteType.Air, 'Air'], [MoteType.Death, 'Death'], [MoteType.Earth, 'Earth'], [MoteType.Fire, 'Fire'], [MoteType.Life, 'Life'], [MoteType.Soul, 'Soul'],[ MoteType.Water, 'Water']]);
  }

  static GetImagePathForMoteType(moteType: MoteType): string {
    // alle Bilder von https://newworld.fandom.com/wiki
    switch (moteType) {
      case MoteType.Air:
        return "url(/assets/images/motes/Shockspire.png)"
      case MoteType.Death:
        return "url(/assets/images/motes/Blightcrag.png)"
      case MoteType.Earth:
        return "url(/assets/images/motes/Earthcrag.png)"
      case MoteType.Fire:
        return "url(/assets/images/motes/Scorchstone.png)"
      case MoteType.Life:
        return "url(/assets/images/motes/Lifejewel.png)"
      case MoteType.Soul:
        return "url(/assets/images/motes/Soulspire.png)"
      case MoteType.Water:
        return "url(/assets/images/motes/Springstone.png)"
      default:
        throw new Error('Invalid Motetype passed into GetImageForMoteType.')
    }
  }

  static GetAllMoteObjects(): Mote[] {
    var resp = <Mote[]>[];
    var moteTypesArr = Array.from(this.GetMoteTypesMap());

    for (const moteTier of MoteTierValues) {
      for (const moteType of moteTypesArr) {
        resp.push(new Mote(0, 0, moteTier, moteType[0]));
      }
    }
    return resp;
  }
}
