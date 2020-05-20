import React from "react";

const personinfo = (props) => {
  return (
    <div>
      <h1>
        Hello My Name is {props.name} my phone number is {props.PhoneNumber} and
        I was born on {props.DOB}
      </h1>
    </div>
  );
};

export default personinfo;
