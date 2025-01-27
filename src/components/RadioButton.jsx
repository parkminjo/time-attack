import React from "react";

function RadioButton({ sortType, setSortType }) {
  return (
    <div>
      <label htmlFor="gold-sort">
        <input
          type="radio"
          id="gold-sort"
          name="sort"
          value="gold"
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
          name="sort"
          value="total"
          checked={sortType === "total"}
          onChange={(e) => setSortType(e.target.value)}
        />
        합계순
      </label>
    </div>
  );
}

export default RadioButton;
