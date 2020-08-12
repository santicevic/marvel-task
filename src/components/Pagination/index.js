import "./styles.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = useSelector(state =>
    Math.ceil(state.characters.total / state.characters.limit)
  );
  return (
    <div className="pagination-wrapper">
      <div className="pagination-container">
        {!isNaN(totalPages) &&
          [...Array(totalPages)].map((a, i) => (
            <span
              key={i}
              className={currentPage === i ? "pagination-active" : null}
              onClick={() => setCurrentPage(i)}
            >
              {i + 1}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Pagination;
