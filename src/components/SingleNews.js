import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const SingleNews = ({ featuredImage }) => {
  const { id } = useParams();
  const restPath = `https://michikohasegawa.com/wendy+lucas/wp-json/wp/v2/posts/${id}?_embed`;
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
          <div className="singlenews-wrapper">
            <article className="singlenews-article" id={`post-${restData.id}`}>
              {/* {restData._embedded["wp:featuredmedia"][0] && (
              <figure
                className="featured-image"
                dangerouslySetInnerHTML={featuredImage(
                  restData._embedded["wp:featuredmedia"][0]
                )}
              ></figure>
            )} */}

              <h1>{restData.title.rendered}</h1>
              <div
                className="entry-content"
                dangerouslySetInnerHTML={{ __html: restData.content.rendered }}
              ></div>
            </article>
            <nav className="posts-navigation">
              {restData.previous_post["id"] && (
                <Link
                  to={`/news/${restData.previous_post["id"]}`}
                  className="prev-post"
                >
                  Previous: {restData.previous_post["title"]}
                </Link>
              )}
            </nav>
            <nav className="posts-navigation">
              {restData.next_post["id"] && (
                <Link
                  to={`/news/${restData.next_post["id"]}`}
                  className="next-post"
                >
                  Next: {restData.next_post["title"]}
                </Link>
              )}
            </nav>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default SingleNews;
