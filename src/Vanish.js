import React from "react";

export default function Vanish() {
  const [isVanish, setVanish] = React.useState(false);

  function handleClick() {
    setVanish((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div>
      {!isVanish && <h1>1. Make this vanish</h1>}
      <button className="button" onClick={handleClick}>
        {/* Change button inner text based on the state of the h1 */}
        {!isVanish ? "Click me to vanish!" : "Click me again to appear!"}
      </button>
    </div>
  );
}
