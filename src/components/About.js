import { useState, useEffect } from "react";
import Loading from "./Loading";

const About = () => {
  const restPath =
    "https://michikohasegawa.com/wendy+lucas/wp-json/wp/v2/pages/106";
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
        <article className={`post-${restData.id}`} id={`post-${restData.id}`}>
          <h1>{restData.title.rendered}</h1>
          <div
            className="entry-content"
            dangerouslySetInnerHTML={{ __html: restData.content.rendered }}
          ></div>
        </article>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default About;
