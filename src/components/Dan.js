import React from "react";
import data from "../data/dataDan";

const Dan = () => {
  return (
    <div>
      <h1>Hello from dan</h1>
      {data.products.map((x) => (
        <>
          <h1>{x.category}</h1>
          <h1>{x.price}</h1>
        </>
      ))}
    </div>
  );
};

export default Dan;
