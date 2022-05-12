import React, { useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  const inc = () => {
    count < 10
      ? setCount(count + 1)
      : alert("siz maximum 10 maxsulot olishingiz mumkin");
  };
  const dec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <h2>count: {count}</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={inc} className="ui teal button">
          increment
        </button>
        <button onClick={dec} className="ui blue button">
          decriment
        </button>
      </div>
    </div>
  );
};

export default App;
