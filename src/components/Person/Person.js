import React from "react";

const person = props => {
  return (
    <p onClick={props.click}>
      I'm {props.name}. I'm {props.age} years old
    </p>
  );
};

export default person;
