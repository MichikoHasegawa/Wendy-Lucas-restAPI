import React from "react";
import { useState, useEffect } from "react";
import Loading from "./Loading";

const PortfolioWoods = () => {
  const restPath =
    "https://michikohasegawa.com/wendy+lucas/wp-json/wp/v2/portfolio-portfolio/220";
  const [restData, setData] = useState([]);
  const [isLoaded, setLoadStatus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setData(data);
        setLoadStatus(true);
      } else {
        setLoadStatus(false);
      }
    };
    fetchData();
  }, [restPath]);

  return (
    <>
      {isLoaded ? (
        <article className="home-woods">
          <figure>
            <img
              className="home-img"
              src={`${restData.acf.image}`}
              alt={"{projectData.title.rendered} screenshot"}
            />
          </figure>
          <h2 className="woods-title">Woods</h2>
        </article>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default PortfolioWoods;
