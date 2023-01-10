import React from "react";

function Card(props) {
  const { name, date, min, max, main } = props.data;


  return (
    <div className="card">
      <div className="card-title">{date}</div>
      <img src={`${main}.js`} alt={main} />
      <div className="card-footer">{min}/{max}</div>
    </div>
  );
}

export default Card;
