import { CraftingRecipe } from '../types';

export const recipes: CraftingRecipe[] = [
  {
    name: 'Timber',
    value: 'timber',
    ingredients: [
      { item: 'Timber Logs', quantity: 2 },
      { item: 'Iron Ore', quantity: 1 }
    ]
  },
  {
    name: 'Lumber',
    value: 'lumber',
    ingredients: [
      { item: 'Timber Logs', quantity: 3 },
      { item: 'Steel Ingot', quantity: 1 }
    ]
  },
  {
    name: 'Wyrdwood Plank',
    value: 'wyrdwood_plank',
    ingredients: [
      { item: 'Wyrdwood', quantity: 4 },
      { item: 'Steel Ingot', quantity: 2 }
    ]
  },
  {
    name: 'Ironwood Plank',
    value: 'ironwood_plank',
    ingredients: [
      { item: 'Ironwood', quantity: 4 },
      { item: 'Starmetal Ingot', quantity: 2 }
    ]
  },
  {
    name: 'Glittering Ebony',
    value: 'glittering_ebony',
    ingredients: [
      { item: 'Ebony', quantity: 5 },
      { item: 'Orichalcum Ingot', quantity: 2 }
    ]
  },
  {
    name: 'Runewood Plank',
    value: 'runewood_plank',
    ingredients: [
      { item: 'Runewood', quantity: 5 },
      { item: 'Prismatic Ingot', quantity: 1 }
    ]
  },
  {
    name: 'Prismatic Plank',
    value: 'prismatic_plank',
    ingredients: [
      { item: 'Prismatic Wood', quantity: 6 },
      { item: 'Prismatic Ingot', quantity: 2 }
    ]
  }
];