import React from "react";
import Loading from "./Loading";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PortfolioWoods from "./PortfolioWoods";
import PortfolioBeach from "./PortfolioBeach";
import PortfolioBirds from "./PortfolioBirds";

const Home = () => {
  const restPath =
    "https://michikohasegawa.com/wendy+lucas/wp-json/wp/v2/portfolio-portfolio";
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
        <div className="home-wrapper">
          <Link to={"/birdscategory"}>
            <PortfolioBirds />
          </Link>
          <Link to={"/woodscategory"}>
            <PortfolioWoods />
          </Link>
          <Link to={"/beachcategory"}>
            <PortfolioBeach />
          </Link>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
