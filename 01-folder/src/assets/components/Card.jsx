import React from "react";

const Card = (name) => {
  return (
      <div className="Card">
        <img
          src={name.img}alt=""/>
        <h1>{name.user}, {name.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>login</button>
      </div>
  );
};

export default Card;
