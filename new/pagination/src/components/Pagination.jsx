import React from "react";
import { useState } from "react";
import { baseUrl } from "../constants";
import useDataFetch from "../hooks/use-data-fetch";

const Pagination = () => {
  const [page, setPage] = useState(1);
  const [data, totalPages] = useDataFetch(baseUrl, page);
    

  console.log("data", data);

  const handleBtnClick = (pageNum) => {
    setPage(pageNum);
  };

  const handleSideBtns = (btnType) => {
    if (btnType === "<") {
      setPage((prevPage) => prevPage - 1);
    } else if (btnType === ">") {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <main className="container">
        {data?.products?.map((item) => {
          return (
            <acticle key={item.id} className="item">
              <div>{item.userId}</div>
              <div>{item.title}</div>
            </acticle>
          );
        })}
      </main>
      <section className="pagination__container">
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
      </section>
    </>
  );
};

export default Pagination;
