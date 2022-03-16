import React from "react";

const Card = (props) => {
  return (
    <div className="card col-lg-3 col-md-4 col-sm-6 col-xs-12">
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
