import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

function News({ featuredImage }) {
  const restPath =
    "https://michikohasegawa.com/wendy+lucas/wp-json/wp/v2/posts?_embed=true";

  const [restData, setData] = useState([]);
  const [isLoaded, setLoadStatus] = useState(false);
  // const data = state.source.get(state.router.link);
  // const post = state.source[data.type][data.id];
  // const date = new Date(post.date);

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
          <div className="news-wrapper">
            <h1>News</h1>
            <div className="article-wrapper">
              {restData.map((post) => (
                <article
                  className="news-article"
                  key={post.id}
                  id={`post-${post.id}`}
                >
                  {/* {post._embedded["wp:featuredmedia"][0] && (
                <figure
                  className="featured-image"
                  dangerouslySetInnerHTML={featuredImage(
                    post._embedded["wp:featuredmedia"][0]
                  )}
                ></figure>
              )} */}
                  <p className="news-date">{`${post.date}`}</p>
                  <Link className="news-title-link" to={`/news/${post.id}`}>
                    <h2 className="news-title">{post.title.rendered}</h2>
                  </Link>

                  {/* EXCERPT
                 <div
                  className="entry-content"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                ></div> */}
                </article>
              ))}
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default News;
// https://michikohasegawa.com/wendy+lucas/wp-json/wp/v2/posts?embed=true
