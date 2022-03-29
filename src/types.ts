export interface Ingredient {
  id: number;
  original: string;
}
export interface Recipe {
  id: number;
  title: string;
  image: string;
  extendedIngredients: any;
  summary: string;
}
