import { CraftingRecipe } from '../types';

export const recipes: CraftingRecipe[] = [
  {
    name: 'Timber',
    value: 'timber',
    ingredients: [
      { item: 'Green Wood', quantity: 4 }
    ]
  },
  {
    name: 'Lumber',
    value: 'lumber',
    ingredients: [
      { item: 'Aged Wood', quantity: 4 },
      { item: 'Timber', quantity: 2 },
      { item: 'Obsidian Sandpaper', quantity: 1 }
    ]
  },
  {
    name: 'Wyrdwood Plank',
    value: 'wyrdwood_plank',
    ingredients: [
      { item: 'Wyrdwood', quantity: 6 },
      { item: 'Lumber', quantity: 2 },
      { item: 'Obsidian Sandpaper', quantity: 1 }
    ]
  },
  {
    name: 'Ironwood Plank',
    value: 'ironwood_plank',
    ingredients: [
      { item: 'Ironwood', quantity: 8 },
      { item: 'Wyrdwood Plank', quantity: 2 },
      { item: 'Obsidian Sandpaper', quantity: 1 }
    ]
  },
  {
    name: 'Glittering Ebony',
    value: 'glittering_ebony',
    ingredients: [
      { item: 'Ironwood Plank', quantity: 5 },
      { item: 'Wildwood', quantity: 2 },
      { item: 'Obsidian Sandpaper', quantity: 1 }
    ]
  },
  {
    name: 'Runewood Plank',
    value: 'runewood_plank',
    ingredients: [
      { item: 'Runewood', quantity: 12 },
      { item: 'Ironwood Plank', quantity: 2 },
      { item: 'Obsidian Sandpaper', quantity: 1 }
    ]
  },
  {
    name: 'Prismatic Plank',
    value: 'prismatic_plank',
    ingredients: [
      { item: 'Glittering Ebony', quantity: 1 },
      { item: 'Runewood Plank', quantity: 10 },
      { item: 'Obsidian Sandpaper', quantity: 4 }
    ]
  }
];