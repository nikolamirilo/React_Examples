import React from "react";

const Card = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={props.image} alt={props.name} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <div className="card-text">{props.data}</div>
      </div>
    </div>
  );
};

export default Card;
