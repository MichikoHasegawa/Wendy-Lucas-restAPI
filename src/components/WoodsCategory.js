import React from "react";
import { useState, useEffect } from "react";
import Loading from "./Loading";

const WoodsCategory = () => {
  const restPath =
    "https://michikohasegawa.com/wendy+lucas/wp-json/wp/v2/portfolio-portfolio?photography-portfolio-category=4&per_page=100";
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
      <div id="portfolio" className="portfolio">
        {isLoaded ? (
          restData.map((restData, i) => (
            <>
              <article className="portfolio__item" key={restData.id}>
                <a href={`#portfolio-item-${restData.id}`} className="button">
                  <img
                    className="portfolio-img"
                    src={`${restData.acf.image}`}
                    alt={`${restData.title.rendered} screenshot`}
                  />
                </a>
              </article>
            </>
          ))
        ) : (
          <Loading />
        )}
      </div>
      <div className="portfolio-lightboxes">
        {isLoaded ? (
          restData.map((restData, i) => (
            <>
              <article
                id={`portfolio-item-${restData.id}`}
                className="portfolio-lightbox"
                key={restData.id}
              >
                <div className="portfolio-lightbox__content">
                  <a href="#portfolio" className="close"></a>
                  <img
                    className="lightbox-img"
                    src={`${restData.acf.image}`}
                    alt={`${restData.title.rendered} screenshot`}
                  />
                  <h3 className="portfolio-lightbox-title">
                    {restData.title.rendered}
                  </h3>
                  <p>{restData.acf.description}</p>
                </div>
              </article>
            </>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};
export default WoodsCategory;
