import { useState, useEffect } from "react";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import PortfolioBeach from "./PortfolioBeach";
import PortfolioBirds from "./PortfolioBirds";
import PortfolioWoods from "./PortfolioWoods";
import PortfolioProducts from "./PortfolioProducts";
import Contact from "./Contact";

import React from "react";

const Home = () => {
  const restPath =
    "https://michikohasegawa.com/wendy+lucas/wp-json/wp/v2/pages/102";
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
        <>
          <div className="home-wrapper">
            <section className="section-home-image">
              <img src={`${restData.acf.main_image}`} alt="home main image" />
            </section>
            <section className="section-profile">
              <h2>Profile</h2>
              <p>{`${restData.acf.profile}`}</p>
            </section>

            <section className="section-portfolio">
              <h2>Portfolio</h2>
              <div className="categories">
                <Link to={"/birdscategory"}>
                  <PortfolioBirds />
                </Link>
                <Link to={"/woodscategory"}>
                  <PortfolioWoods />
                </Link>
                <Link to={"/beachcategory"}>
                  <PortfolioBeach />
                </Link>
                <Link to={"/productscategory"}>
                  <PortfolioProducts />
                </Link>
              </div>
            </section>

            <section className="section-news">
              <h2>News</h2>
              <p>
                <Link to={"/news"} className="home-btn">
                  Click here to check News
                </Link>
              </p>
              <p>{`${restData.acf.news_description}`}</p>
              {/* <a href={`${restData.acf.link_1}`} target="_blank">
                YouTube
              </a> */}
            </section>

            <section className="section-contact">
              <h2>Contact</h2>
              <p>
                <Link to={"/contact"} className="home-btn">
                  Click here to Contact
                </Link>
              </p>
              <p>{`${restData.acf.contact_description}`}</p>
            </section>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
