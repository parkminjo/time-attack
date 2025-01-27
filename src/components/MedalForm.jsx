import React, { useState } from "react";

function MedalForm({ medalList, setMedalList }) {
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);
  const reset = () => {
    setCountry("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkDuplication = medalList.some((medal) => {
      return medal.country.includes(country);
    });

    if (checkDuplication === true) {
      alert("이미 추가된 나라입니다");
      return;
    }

    const newMedalList = [
      ...medalList,
      {
        country,
        gold: +gold,
        silver: +silver,
        bronze: +bronze,
      },
    ];

    setMedalList(newMedalList.sort((a, b) => b.gold - a.gold));
    reset();
  };

  const handleUpdate = (country) => {
    const checkCountry = medalList.some((medal) => {
      return medal.country.includes(country);
    });

    if (checkCountry === false) {
      alert("등록되지 않은 나라입니다");
      return;
    }

    const updatedList = medalList.map((medal) => {
      if (medal.country === country) {
        return { ...medal, gold: +gold, silver: +silver, bronze: +bronze };
      } else {
        return medal;
      }
    });

    setMedalList(updatedList.sort((a, b) => b.gold - a.gold));
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <label htmlFor="country">
          국가명
          <input
            type="text"
            id="country"
            required
            autoFocus
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <label htmlFor="gold">
          {" "}
          금메달
          <input
            type="number"
            id="gold"
            required
            value={gold}
            onChange={(e) => setGold(e.target.value)}
            min={0}
          />
        </label>
        <label htmlFor="silver">
          {" "}
          은메달
          <input
            type="number"
            id="silver"
            required
            value={silver}
            onChange={(e) => setSilver(e.target.value)}
            min={0}
          />
        </label>
        <label htmlFor="bronze">
          {" "}
          동메달
          <input
            type="number"
            id="bronze"
            required
            value={bronze}
            onChange={(e) => setBronze(e.target.value)}
            min={0}
          />
        </label>
        <button type="submit">국가 추가</button>
        <button type="button" onClick={() => handleUpdate(country)}>
          업데이트
        </button>
      </form>
    </div>
  );
}

export default MedalForm;
