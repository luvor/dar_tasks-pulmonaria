import React from "react";

import PopularCardList from "../../components/popularCardList/PopularCardList";

import VegetarianCardList from "../../components/vegetarianCardList/VegetarianCardList";

type Props = {};

const IndexPage: React.FC<Props> = (props: Props) => {
  return (
    <>
      <PopularCardList />
      <VegetarianCardList />
    </>
  );
};

export default IndexPage;
