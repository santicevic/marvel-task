import React from "react";
import { useSelector } from "react-redux";

const Pagination = () => {
  const totalPages = useSelector(state =>
    Math.ceil(state.characters.total / state.characters.limit)
  );
  return (
    <div>
      {!isNaN(totalPages) &&
        [...Array(totalPages)].map((a, i) => <span key={i}>{i + 1}</span>)}
    </div>
  );
};

export default Pagination;
