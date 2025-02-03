export interface CraftingRecipe {
  name: string;
  value: string;
  ingredients: {
    item: string;
    quantity: number;
  }[];
}

export interface CalculationResult {
  itemName: string;
  quantity: number;
  ingredients: {
    item: string;
    quantity: number;
  }[];
}