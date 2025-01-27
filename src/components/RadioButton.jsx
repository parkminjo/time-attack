import React from "react";

function RadioButton({ sortType, setSortType }) {
  return (
    <div>
      <label htmlFor="gold-sort">
        <input
          type="radio"
          id="gold-sort"
          value="gold"
          name="sort"
          checked={sortType === "gold"}
          onChange={(e) => {
            setSortType(e.target.value);
          }}
        />
        금메달순
      </label>
      <label htmlFor="total-sort">
        <input
          type="radio"
          id="total-sort"
          value="total"
          name="sort"
          checked={sortType === "total"}
          onChange={(e) => setSortType(e.target.value)}
        />
        합계순
      </label>
    </div>
  );
}

export default RadioButton;
