import React from "react";
import Quote from "./sandboxTwo";

function Foo(props) {
  return (
    <div>
      <h1>Two and Two make {props.sayTotal}</h1>
      <p>or might be</p>
      <h1>Two and Two make {props.sayConcate}</h1>
      <hr />
      <Quote empText="good" />
      <hr />
    </div>
  );
}

export default Foo;
