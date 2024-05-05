import React from "react";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { baseUrl } from "../constants";
import useDataFetch from "../hooks/use-data-fetch";

const Pagination = () => {
  const [page, setPage] = useState(1);
  const [data, totalPages, loading] = useDataFetch(baseUrl, page);
    const [fetchedData, setFetchedData] = useState([]);
  const [updateLoading, setUpdateLoading] = useState(loading);

    setFetchedData(data);
  console.log("data", fetchedData);

  // const handleBtnClick = (pageNum) => {
  //   setPage(pageNum);
  // };

  // const handleSideBtns = (btnType) => {
  //   if (btnType === "<") {
  //     setPage((prevPage) => prevPage - 1);
  //   } else if (btnType === ">") {
  //     setPage((prevPage) => prevPage + 1);
  //   }
  // };

  const postObserverRef = useRef(null);

  const updateData = () => {
    console.log("check")
    setPage((page) => page + 1);
    const [data, totalPages, loading] = useDataFetch(baseUrl, page);
    setFetchedData(data);
    setUpdateLoading(loading)
  }

  console.log(updateLoading);

  useEffect(() => {
    if(!updateLoading){
      const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting){
          updateData();
        }
      }, {
        threshold: 0.9
      })

      if(postObserverRef.current){
        observer.observe(postObserverRef.current)
      }

      return () => {
        observer.unobserve(postObserverRef.current)
      }
    }
  }, [updateLoading])

  return (
    <>
      <main className="container">
        {data?.products?.map((item) => {
          return (
            <div key={item.id} className="item" ref={postObserverRef}>
              <div>{item.userId}</div>
              <div>{item.title}</div>
            </div>
          );
        })}
      </main>
      {/* <section className="pagination__container">
        {page > 1 && (
          <span>
            <button onClick={() => handleSideBtns("<")}>{"<"}</button>
          </span>
        )}
        {[...Array(totalPages)].map((_, index) => {
          return (
            <span key={index}>
              <button
                onClick={() => handleBtnClick(index + 1)}
                name="pagbtn"
                value={index + 1}
                className={page === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            </span>
          );
        })}
        {page < 10 && (
          <span>
            <button onClick={() => handleSideBtns(">")}>{">"}</button>
          </span>
        )}
      </section> */}
    </>
  );
};

export default Pagination;
