import "./styles.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../store/modules/characters/actions";

const Pagination = () => {
  const dispatch = useDispatch();
  const { nameSubstring, offset, limit } = useSelector(state => state.characters);
  const totalPages = useSelector(({ characters }) =>
    Math.ceil(characters.total / characters.limit)
  );

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
          [...Array(totalPages)].map((a, i) => (
            <span
              key={i}
              className={offset/limit === i ? "pagination-active" : null}
              onClick={() => handleClick(i)}
            >
              {i + 1}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Pagination;
