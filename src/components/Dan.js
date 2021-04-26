import React from "react";
import data from "../data/dataDan";
import "../styles/danInfo.scss";

const Dan = () => {
  return (
    <>
      <h1>Hello from dan</h1>
      <div className="dan_wrapper">
        {data.products.map((x) => (
          <>
            <div className="dan_info_container">
              <div className="dan_info_card">
                <h1>{x.category}</h1>
                <h1>{x.price}</h1>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Dan;
