import React, { useState } from 'react';
import { recipes } from '../data/recipes';
import type { CalculationResult } from '../types';
import { Calculator as CalculatorIcon } from 'lucide-react';

export function Calculator() {
  const [selectedItem, setSelectedItem] = useState(recipes[0].value);
  const [quantity, setQuantity] = useState(1);
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [reset, setReset] = useState(false);

  const calculateResources = (e: React.FormEvent) => {
    e.preventDefault();
    const recipe = recipes.find(r => r.value === selectedItem);
    if (!recipe) return;

    setResult({
      itemName: recipe.name,
      quantity,
      ingredients: recipe.ingredients.map(ing => ({
        item: ing.item,
        quantity: ing.quantity * quantity
      }))
    });
    setReset(true);
  };

  const handleReset = () => {
    setSelectedItem(recipes[0].value);
    setQuantity(1);
    setResult(null);
    setReset(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-black rounded-xl shadow-lg">
      <div className="flex items-center space-x-4 mb-8">
        <CalculatorIcon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Prismatic Planks Calculator
        </h2>
      </div>

      <form onSubmit={calculateResources} className="space-y-6">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Select Item to Craft
          </label>
          <select
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
          >
            {recipes.map((recipe) => (
              <option key={recipe.value} value={recipe.value}>
                {recipe.name}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Quantity
          </label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg transition-colors hover:bg-gray-800 dark:hover:bg-gray-100"
        >
          Calculate Resources
        </button>
        <button
          type="button"
          className="w-full px-6 py-3 bg-indigo-200 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg transition-colors hover:bg-indigo-300 dark:hover:bg-indigo-800"
          onClick={handleReset}
        >
          Reset
        </button>
      </form>

      {result && (
        <div className="mt-8 p-6 bg-gray-50 dark:bg-black border dark:border-gray-800 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Resources Needed for {result.quantity}x {result.itemName}:
          </h3>
          <ul className="space-y-2">
            {result.ingredients.map((ing, index) => (
              <li
                key={index}
                className="flex items-center text-gray-700 dark:text-gray-300"
              >
                <span className="w-6 h-6 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900 rounded-full mr-3 text-indigo-600 dark:text-indigo-400">
                  {index + 1}
                </span>
                {ing.quantity}x {ing.item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}