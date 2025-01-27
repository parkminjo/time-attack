import React, { useState } from "react";
import "./App.css";
import MedalList from "./components/MedalList";
import MedalForm from "./components/MedalForm";
import RadioButton from "./components/RadioButton";

function App() {
  const [medalList, setMedalList] = useState([]);

  const [sortType, setSortType] = useState("gold");

  const getSortedMedal = () => {
    if (sortType === "gold") {
      const sortedMedalList = [...medalList].sort((a, b) => b.gold - a.gold);
      return sortedMedalList;
    } else {
      const sortedMedalList = [...medalList].sort(
        (a, b) => b.gold + b.silver + b.bronze - (a.gold + a.silver + a.bronze)
      );
      return sortedMedalList;
    }
  };

  const sortedMedalList = getSortedMedal();

  const checkList = medalList.length === 0;

  /** UI */
  return (
    <div className="container">
      <h1>2024 파리올림픽</h1>
      <MedalForm medalList={medalList} setMedalList={setMedalList}></MedalForm>
      <RadioButton sortType={sortType} setSortType={setSortType}></RadioButton>
      {checkList && <p>메달을 추적하세요"</p>}
      {checkList || (
        <MedalList
          medalList={sortedMedalList}
          setMedalList={setMedalList}
        ></MedalList>
      )}
    </div>
  );
}

export default App;
