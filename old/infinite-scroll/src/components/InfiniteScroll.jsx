import React from "react";
import { useEffect, useState, useRef } from "react";

const InfiniteScroll = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const lastPostObserver = useRef(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}`);
      const data = await response.json();

      setPosts((prevPosts) => [...prevPosts, ...data]);
      setPage(page + 1);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            fetchData();
          }
        },
        {
          threshold: 0.6,
        }
      );

      if (lastPostObserver.current) {
        observer.observe(lastPostObserver.current);
      }

      return () => {
        if (lastPostObserver.current)
          observer.unobserve(lastPostObserver.current);
      };
    }
  }, [loading]);

  return (
    <div className="container">
      <ul className="list">
        {Array.from(posts)?.map((post) => {
          return (
            <li key={post.id} ref={lastPostObserver}>
              {post.title}
            </li>
          );
        })}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;
