import React, { useEffect, useState } from "react";
import { Recipe } from "../../types";

import VegetarianCard from "../vegetarianCard/VegetarianCard";

import style from "./vegetarianCardList.module.css";

type Props = {};

const VegetarianCardList: React.FC<Props> = (props: Props) => {
  const [vegetarian, setVegetarian] = useState<Recipe[]>();
  useEffect(() => {
    getVegetarian();
    // return () => {};
  }, []);

  const getVegetarian = async () => {
    const check = localStorage.getItem("vegetarian_recipes");
    if (check) {
      setVegetarian(JSON.parse(check));
    } else {
      try {
        const api = import.meta.env.VITE_SPOON_API_KEY;
        const res = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${api}&number=20&tags=vegetarian`
        );
        const data = await res.json();
        const recipes: Recipe[] = data.recipes;
        localStorage.setItem("vegetarian_recipes", JSON.stringify(recipes));
        setVegetarian(recipes);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className={style.wrapper}>
      <h2 className={style.cardListHeader}>
        Vegetarian meals{" "}
        <span className={style.textHighlight}>[css modules]</span>
      </h2>
      <div className={style.cardList}>
        {vegetarian &&
          vegetarian.map((recipe) => {
            return <VegetarianCard key={recipe.id} recipe={recipe} />;
          })}
      </div>
    </div>
  );
};
export default VegetarianCardList;
