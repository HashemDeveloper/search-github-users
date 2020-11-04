import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../utils/context";
import { ExampleChart, Pie3D, Column2D, Bar3D, Doghnut2D, Column3D } from "./charts";

const Repos = () => {
  const { githubRepos } = useGlobalContext();
  const languages = githubRepos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) {
      return total;
    }
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars:stargazers_count};
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count
      };
    }

    return total;
  }, {});
  const mostUseLang = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  // most stars per languages
  const mostPopular = Object.values(languages)
  .sort((a, b) => {
      return b.stars - a.stars;
  }).map((item) => {
      return {...item, value:item.stars}
  }).slice(0, 5);  

  // stars/ fork
  let { stars, forks } = githubRepos.reduce((total, item) => {
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = {label:name, value:stargazers_count};
      total.forks[forks] = {label:name, value:forks};
    return total;
  }, {
      stars:{}, forks:{}
  });
  stars = Object.values(stars).slice(-5).reverse();
  forks = Object.values(forks).slice(-5).reverse();
  return (
    <section className="section">
      <ThemeWrapper className="section-center">
        <Pie3D data={mostUseLang} />
        <Column3D data={stars}/>
        <Doghnut2D data={mostPopular}/>
        <Bar3D data={forks}/>
      </ThemeWrapper>
    </section>
  );
};

const ThemeWrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-height: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-height: 1200px) {
    grid-template-columns: 2fr 3fr;
  }
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
      width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;
export default Repos;
