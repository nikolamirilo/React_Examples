import React from "react";

const Props = (props) => {
  return (
    <div className="props">
      {props.name == "Nikola" ? (
        <h2>Nikola</h2>
      ) : props.name === "Pera" ? (
        <h2>Pera</h2>
      ) : (
        <h2>Ne postojeci korisnik</h2>
      )}
      {(props.name === "Pera") & (props.age === "20") && <h2>Peric</h2>}
      <h2>{props.age}</h2>
    </div>
  );
};
export default Props;
