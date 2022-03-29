import React from "react";
import { Recipe } from "../../types";
import { Card, Gradient } from "./PopularCard.styles";

type Props = {
  recipe: Recipe;
};

const PopularCard: React.FC<Props> = ({ recipe }: Props) => {
  return (
    <Card>
      <p>{recipe.title}</p>
      <img src={recipe.image} alt={recipe.title} />
      <Gradient />
    </Card>
  );
};

export default PopularCard;
