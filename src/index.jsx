import React, { useState } from "react";
import ReactDOM from "react-dom";
import Data from "./data";

function Index(props) {
  const [data, Setdata] = useState();
  const getData = (a) => {
    Setdata(a);
  };

  return (
    <div>
      <Data get={getData} data={data}/>
    </div>
  );
}

export default Index;

ReactDOM.render(<Index />, document.querySelector("#root"));
