import React, {useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import CounterWrapper from "remote/CounterWrapper";

import "./index.css";

const App = () => {
  const divRef = useRef(null);
  useEffect(()=>{
    CounterWrapper(divRef.current);
  },[])

  return (
    <div className="container">
      <div>Name: remote-react</div>
      <div ref={divRef}></div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
