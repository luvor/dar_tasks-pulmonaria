import React from "react";
import { Recipe, Ingredient } from "../../types";
import style from "./vegetarianCard.module.css";

type Props = {
  recipe: Recipe;
};

const VegetarianCard: React.FC<Props> = ({ recipe }: Props) => {
  return (
    <div className={style.card}>
      <h3 className={style.header}>{recipe.title}</h3>
      <div className={style.tags}>
        <span className={style.vegetarian}>vegetarian</span>
      </div>
      {recipe.image ? <img src={recipe.image} alt={recipe.title} /> : ""}
      <div
        className={style.description}
        // dangerouslySetInnerHTML={{ __html: recipe.summary }}
      >
        {recipe.extendedIngredients.map((ingredient: Ingredient) => {
          return (
            <p key={"veg" + Math.floor(Math.random() * 999) + ingredient.id}>
              {ingredient.original}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default VegetarianCard;
