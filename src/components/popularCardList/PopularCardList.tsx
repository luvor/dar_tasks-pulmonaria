import React, { useEffect, useState } from "react";
import { Recipe } from "../../types";

import PopularCard from "../popularCard/PopularCard";

import styled from "styled-components";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

type Props = {};

const PopularCardList: React.FC<Props> = (props: Props) => {
  const [popular, setPopular] = useState<Recipe[]>();
  useEffect(() => {
    getPopular();
    // return () => {};
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular_recipes");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      try {
        const api = import.meta.env.VITE_SPOON_API_KEY;
        const res = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${api}&number=9`
        );
        const data = await res.json();
        const recipes: Recipe[] = data.recipes;
        localStorage.setItem("popular_recipes", JSON.stringify(recipes));
        setPopular(recipes);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Wrapper>
      <h2 className="popular__header">
        Popular meals <Method>[styled components]</Method>
      </h2>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "1rem",
        }}
      >
        {popular &&
          popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <PopularCard recipe={recipe} />
              </SplideSlide>
            );
          })}
      </Splide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 4rem 4rem;
  text-align: center;
  .popular__header {
    margin: 2rem 0;
  }
`;

const Method = styled.span`
  color: #8479e1;
`;

export default PopularCardList;
