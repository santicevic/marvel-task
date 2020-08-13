import "./styles.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../store/modules/characters/actions";

const Pagination = () => {
  const dispatch = useDispatch();
  const { nameSubstring, offset, limit, total } = useSelector(state => state.characters);
  const totalPages = Math.ceil(total / limit);

  const handleClick = nextPage => {
    nameSubstring && dispatch(fetchCharacters({
      nameStartsWith: nameSubstring,
      offset: nextPage*limit,
    }));
  };
  
  return (
    <div className="pagination-wrapper">
      <div className="pagination-container">
        {!isNaN(totalPages) &&
          [...Array(totalPages)].map((_, i) => (
            <span
              key={i}
              onClick={() => handleClick(i)}
              className={offset/limit === i ? "pagination-active" : null}
            >{i + 1}</span>
          ))}
      </div>
    </div>
  );
};

export default Pagination;
