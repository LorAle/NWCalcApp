// Baseinterface for all Order-Items
export enum ItemType {
  Ressource,
  Refined
}

export function GetItemTypesMap(): Map<ItemType, string> {
  return new Map<ItemType, string>([[ItemType.Ressource, 'Ressource'], [ItemType.Refined, 'Refined']]);
}

export interface Item {
  // id: string;
  maxBuyOrder: number;
  minSellOrder: number;
  name: string;
  itemType: ItemType;
}

export function GetItemTypeName(itemType: ItemType): string {
  switch (itemType) {
    case ItemType.Ressource:
      return "Ressource";
    case ItemType.Refined:
      return "Ressource";
    default:
      return "";
  }
}
