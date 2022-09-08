// Baseinterface for all Order-Items
export enum ItemType {
  Ressource,
  Refined
}

export function GetItemTypesMap(): Map<ItemType, string> {
  return new Map<ItemType, string>([[ItemType.Ressource, 'Refined'], [ItemType.Refined, 'Refined']]);
}

export interface Item {
  // id: string;
  maxBuyOrder: number;
  minSellOrder: number;
  name: string;
  itemType: ItemType;
}
